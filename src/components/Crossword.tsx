import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Lock, Check, X, ChevronLeft, ChevronRight, AlertCircle, Home, Timer } from 'lucide-react';
import { CROSSWORD_THEMES, CrosswordTheme, CrosswordPlayer } from '../data/crosswordThemes';
import { correctAudio, incorrectAudio, tickingAudio, bgMusic } from '../audio';

interface CrosswordProps {
  onDeductLife: () => void;
  onHome: () => void;
  isDev?: boolean;
  lives: number;
}

const getLocalDateString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// Seeded deterministic generator based on date string
const getDailySeed = (dateStr: string) => {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

// Shuffles an array deterministically based on seed
const shuffleDeterministic = <T,>(array: T[], seed: number): T[] => {
  const arr = [...array];
  let currentSeed = seed;
  const nextRandom = () => {
    currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
    return currentSeed / 4294967296;
  };

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const SoccerBall = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="12,9 14.5,10.8 13.5,13.8 10.5,13.8 9.5,10.8" fill="currentColor" fillOpacity="0.2" />
    <line x1="12" y1="9" x2="12" y2="2" />
    <line x1="14.5" y1="10.8" x2="19.5" y2="9" />
    <line x1="13.5" y1="13.8" x2="17" y2="20" />
    <line x1="10.5" y1="13.8" x2="7" y2="20" />
    <line x1="9.5" y1="10.8" x2="4.5" y2="9" />
  </svg>
);

export default function Crossword({ onDeductLife, onHome, isDev = false, lives }: CrosswordProps) {
  const [selectedTheme, setSelectedTheme] = useState<CrosswordTheme | null>(null);
  const [gridLetters, setGridLetters] = useState<{ [key: string]: string }>({});
  const [solvedWordIds, setSolvedWordIds] = useState<number[]>([]);
  const [boardLives, setBoardLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<'across' | 'down'>('across');
  const [shakingWordId, setShakingWordId] = useState<number | null>(null);
  const [showShareNotification, setShowShareNotification] = useState(false);
  const [keyboardLetters, setKeyboardLetters] = useState<string[]>([]);
  
  const tickingPlayedRef = useRef(false);

  // 1. Theme loading & state initialization
  useEffect(() => {
    const todayStr = getLocalDateString();
    const seed = getDailySeed(todayStr);

    // Pick theme deterministically from the 10 available themes
    const themeIdx = seed % CROSSWORD_THEMES.length;
    const theme = CROSSWORD_THEMES[themeIdx];
    setSelectedTheme(theme);

    // Generate stable daily scrambled keyboard letters
    const lettersSet = new Set<string>();
    theme.players.forEach(p => {
      p.name.split('').forEach(char => {
        if (char >= 'A' && char <= 'Z') {
          lettersSet.add(char);
        }
      });
    });

    const uniqueLetters = Array.from(lettersSet);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let randSeed = seed;
    const nextRand = () => {
      randSeed = (randSeed * 1664525 + 1013904223) % 4294967296;
      return randSeed / 4294967296;
    };

    while (uniqueLetters.length < 18) {
      const idx = Math.floor(nextRand() * alphabet.length);
      const char = alphabet[idx];
      if (!uniqueLetters.includes(char)) {
        uniqueLetters.push(char);
      }
    }

    const shuffled = shuffleDeterministic(uniqueLetters, seed);
    setKeyboardLetters(shuffled);

    // Caching/Load progress from localStorage
    const savedDate = localStorage.getItem('knowsball_crossword_date');
    const savedProgress = localStorage.getItem('knowsball_crossword_progress');

    if (savedDate === todayStr && savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (parsed.themeId === theme.id) {
          setGridLetters(parsed.gridLetters || {});
          setSolvedWordIds(parsed.solvedWordIds || []);
          setBoardLives(parsed.boardLives !== undefined ? parsed.boardLives : 3);
          setTimeLeft(parsed.timeLeft !== undefined ? parsed.timeLeft : 300);
          setStatus(parsed.status || 'playing');
          
          // Select first cell of first unsolved player
          const firstUnsolved = theme.players.find(p => !(parsed.solvedWordIds || []).includes(p.number));
          if (firstUnsolved) {
            setSelectedCell({ row: firstUnsolved.row, col: firstUnsolved.col });
            setSelectedDirection(firstUnsolved.direction);
          } else {
            // Already completed
            setSelectedCell(null);
          }
          return;
        }
      } catch (e) {
        console.error("Failed to restore crossword progress", e);
      }
    }

    // Default init: clear previous cached progress if new day
    setGridLetters({});
    setSolvedWordIds([]);
    setBoardLives(3);
    setTimeLeft(300);
    setStatus('playing');

    // Auto-select first player's start cell
    if (theme.players.length > 0) {
      setSelectedCell({ row: theme.players[0].row, col: theme.players[0].col });
      setSelectedDirection(theme.players[0].direction);
    }

    // Write freshly initialized progress to storage
    localStorage.setItem('knowsball_crossword_date', todayStr);
    const initialProgress = {
      themeId: theme.id,
      gridLetters: {},
      solvedWordIds: [],
      boardLives: 3,
      timeLeft: 300,
      status: 'playing'
    };
    localStorage.setItem('knowsball_crossword_progress', JSON.stringify(initialProgress));
  }, []);

  // 2. Save progress on changes
  const saveProgress = (
    updatedGrid: { [key: string]: string },
    updatedSolved: number[],
    updatedLives: number,
    updatedTime: number,
    updatedStatus: 'playing' | 'won' | 'lost'
  ) => {
    if (!selectedTheme) return;
    const progress = {
      themeId: selectedTheme.id,
      gridLetters: updatedGrid,
      solvedWordIds: updatedSolved,
      boardLives: updatedLives,
      timeLeft: updatedTime,
      status: updatedStatus
    };
    localStorage.setItem('knowsball_crossword_progress', JSON.stringify(progress));
  };

  // 3. Game Loop: Countdown and ticking audio
  useEffect(() => {
    if (status !== 'playing' || !selectedTheme) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const nextTime = Math.max(0, prev - 1);
        saveProgress(gridLetters, solvedWordIds, boardLives, nextTime, status);

        if (nextTime <= 0) {
          // Time failure
          setStatus('lost');
          onDeductLife();
          tickingAudio.pause();
          incorrectAudio.currentTime = 0;
          incorrectAudio.play().catch(() => {});
          saveProgress(gridLetters, solvedWordIds, boardLives, 0, 'lost');
          clearInterval(timer);
          return 0;
        }

        // Ticking audio tension: under 60 seconds
        if (nextTime <= 60 && !bgMusic.muted) {
          if (!tickingPlayedRef.current) {
            tickingAudio.currentTime = 0;
            tickingAudio.play().catch(() => {});
            tickingPlayedRef.current = true;
          }
          tickingAudio.muted = bgMusic.muted;
        } else {
          tickingAudio.pause();
          tickingPlayedRef.current = false;
        }

        return nextTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      tickingAudio.pause();
    };
  }, [status, selectedTheme, gridLetters, solvedWordIds, boardLives]);

  // Sync ticking audio mute status with bgMusic
  useEffect(() => {
    tickingAudio.muted = bgMusic.muted;
  }, [bgMusic.muted]);

  // 4. Precompute grid information
  const gridMap = useMemo(() => {
    if (!selectedTheme) return {};
    const map: {
      [key: string]: {
        char: string;
        players: { playerNumber: number; index: number; direction: 'across' | 'down' }[];
        cellNumber?: number;
      };
    } = {};

    selectedTheme.players.forEach(p => {
      for (let i = 0; i < p.name.length; i++) {
        const r = p.direction === 'across' ? p.row : p.row + i;
        const c = p.direction === 'across' ? p.col + i : p.col;
        const key = `${r},${c}`;

        if (!map[key]) {
          map[key] = {
            char: p.name[i],
            players: []
          };
        }

        map[key].players.push({
          playerNumber: p.number,
          index: i,
          direction: p.direction
        });

        if (i === 0) {
          map[key].cellNumber = p.number;
        }
      }
    });

    return map;
  }, [selectedTheme]);

  // Determine active player / selected player number
  const selectedPlayerNumber = useMemo(() => {
    if (!selectedCell || !selectedTheme) return null;
    const key = `${selectedCell.row},${selectedCell.col}`;
    const cellInfo = gridMap[key];
    if (!cellInfo) return null;

    const match = cellInfo.players.find(p => p.direction === selectedDirection);
    return match ? match.playerNumber : cellInfo.players[0].playerNumber;
  }, [selectedCell, selectedDirection, gridMap, selectedTheme]);

  const activePlayer = useMemo(() => {
    if (!selectedTheme || selectedPlayerNumber === null) return null;
    return selectedTheme.players.find(p => p.number === selectedPlayerNumber) || null;
  }, [selectedTheme, selectedPlayerNumber]);

  // Check if a cell is part of any solved word
  const isCellLockedBySolvedWord = (row: number, col: number) => {
    const key = `${row},${col}`;
    const cellInfo = gridMap[key];
    if (!cellInfo) return false;
    return cellInfo.players.some(p => solvedWordIds.includes(p.playerNumber));
  };

  // 5. User Input Triggers
  const handleCellClick = (r: number, c: number) => {
    if (status !== 'playing') return;
    const key = `${r},${c}`;
    const cellInfo = gridMap[key];
    if (!cellInfo) return; // Inactive cell

    if (selectedCell && selectedCell.row === r && selectedCell.col === c) {
      // Clicked same cell, toggle orientation if it's an intersection
      if (cellInfo.players.length > 1) {
        setSelectedDirection(prev => (prev === 'across' ? 'down' : 'across'));
      }
    } else {
      setSelectedCell({ row: r, col: c });
      // Pick direction matching the clicked cell
      const hasAcross = cellInfo.players.some(p => p.direction === 'across');
      const hasDown = cellInfo.players.some(p => p.direction === 'down');
      
      if (selectedDirection === 'across' && hasAcross) {
        setSelectedDirection('across');
      } else if (selectedDirection === 'down' && hasDown) {
        setSelectedDirection('down');
      } else {
        setSelectedDirection(cellInfo.players[0].direction);
      }
    }
  };

  // Visual Keyboard typing
  const handleKeyPress = (char: string) => {
    if (status !== 'playing' || !selectedCell || !activePlayer) return;

    const key = `${selectedCell.row},${selectedCell.col}`;
    
    // Only write if cell is not locked by a completed/solved word
    const isLocked = isCellLockedBySolvedWord(selectedCell.row, selectedCell.col);
    const nextGrid = { ...gridLetters };
    
    if (!isLocked) {
      nextGrid[key] = char;
      setGridLetters(nextGrid);
      saveProgress(nextGrid, solvedWordIds, boardLives, timeLeft, status);
    }

    // Move cursor to the next cell in the active word
    const currentIndex = activePlayer.direction === 'across' 
      ? selectedCell.col - activePlayer.col 
      : selectedCell.row - activePlayer.row;

    if (currentIndex < activePlayer.name.length - 1) {
      // Find the next cell coordinate
      let nextR = selectedCell.row;
      let nextC = selectedCell.col;
      
      if (activePlayer.direction === 'across') {
        nextC += 1;
      } else {
        nextR += 1;
      }
      
      // Auto advance cursor
      setSelectedCell({ row: nextR, col: nextC });
    }
  };

  const handleBackspace = () => {
    if (status !== 'playing' || !selectedCell || !activePlayer) return;

    const key = `${selectedCell.row},${selectedCell.col}`;
    const isLocked = isCellLockedBySolvedWord(selectedCell.row, selectedCell.col);
    const nextGrid = { ...gridLetters };

    const currentIndex = activePlayer.direction === 'across' 
      ? selectedCell.col - activePlayer.col 
      : selectedCell.row - activePlayer.row;

    // Standard high-quality crossword backspace behavior:
    // If the cell is empty or locked, go backwards first and delete that cell
    if ((!nextGrid[key] || isLocked) && currentIndex > 0) {
      let prevR = selectedCell.row;
      let prevC = selectedCell.col;

      if (activePlayer.direction === 'across') {
        prevC -= 1;
      } else {
        prevR -= 1;
      }

      setSelectedCell({ row: prevR, col: prevC });
      
      const prevKey = `${prevR},${prevC}`;
      if (!isCellLockedBySolvedWord(prevR, prevC)) {
        nextGrid[prevKey] = '';
        setGridLetters(nextGrid);
        saveProgress(nextGrid, solvedWordIds, boardLives, timeLeft, status);
      }
    } else {
      // If cell has text and is editable, clear it but stay on the cell
      if (!isLocked) {
        nextGrid[key] = '';
        setGridLetters(nextGrid);
        saveProgress(nextGrid, solvedWordIds, boardLives, timeLeft, status);
      }
    }
  };

  // Word submission & correctness verification
  const handleSubmitWord = () => {
    if (status !== 'playing' || !selectedTheme || !activePlayer || selectedPlayerNumber === null) return;

    // Check if the current word is already solved
    if (solvedWordIds.includes(selectedPlayerNumber)) return;

    // Gather entered string for the active player
    let entered = '';
    let isComplete = true;

    for (let i = 0; i < activePlayer.name.length; i++) {
      const r = activePlayer.direction === 'across' ? activePlayer.row : activePlayer.row + i;
      const c = activePlayer.direction === 'across' ? activePlayer.col + i : activePlayer.col;
      const key = `${r},${c}`;
      
      // If locked, we know it's correct letter
      if (isCellLockedBySolvedWord(r, c)) {
        entered += gridMap[key].char;
      } else {
        const letter = gridLetters[key];
        if (!letter) {
          isComplete = false;
          break;
        }
        entered += letter;
      }
    }

    if (!isComplete) {
      // Alert: fill the word
      setShakingWordId(selectedPlayerNumber);
      setTimeout(() => setShakingWordId(null), 500);
      incorrectAudio.currentTime = 0;
      incorrectAudio.play().catch(() => {});
      return;
    }

    const correctWord = activePlayer.name.toUpperCase();
    const userWord = entered.toUpperCase();

    if (userWord === correctWord) {
      // Correct!
      const newSolved = [...solvedWordIds, selectedPlayerNumber];
      
      // Fill the grid explicitly with correct characters
      const nextGrid = { ...gridLetters };
      for (let i = 0; i < activePlayer.name.length; i++) {
        const r = activePlayer.direction === 'across' ? activePlayer.row : activePlayer.row + i;
        const c = activePlayer.direction === 'across' ? activePlayer.col + i : activePlayer.col;
        const key = `${r},${c}`;
        nextGrid[key] = activePlayer.name[i];
      }

      setGridLetters(nextGrid);
      setSolvedWordIds(newSolved);
      correctAudio.currentTime = 0;
      correctAudio.play().catch(() => {});

      // Check win condition
      if (newSolved.length === selectedTheme.players.length) {
        setStatus('won');
        tickingAudio.pause();
        saveProgress(nextGrid, newSolved, boardLives, timeLeft, 'won');
      } else {
        // Select the next unsolved word
        const nextUnsolved = selectedTheme.players.find(p => !newSolved.includes(p.number));
        if (nextUnsolved) {
          setSelectedCell({ row: nextUnsolved.row, col: nextUnsolved.col });
          setSelectedDirection(nextUnsolved.direction);
        }
        saveProgress(nextGrid, newSolved, boardLives, timeLeft, 'playing');
      }
    } else {
      // Incorrect guess!
      setShakingWordId(selectedPlayerNumber);
      setTimeout(() => setShakingWordId(null), 500);
      incorrectAudio.currentTime = 0;
      incorrectAudio.play().catch(() => {});

      const newLives = Math.max(0, boardLives - 1);
      setBoardLives(newLives);

      if (newLives <= 0) {
        setStatus('lost');
        tickingAudio.pause();
        onDeductLife();
        saveProgress(gridLetters, solvedWordIds, 0, timeLeft, 'lost');
      } else {
        saveProgress(gridLetters, solvedWordIds, newLives, timeLeft, 'playing');
      }
    }
  };

  // Clue Navigation
  const handlePrevClue = () => {
    if (!selectedTheme || selectedPlayerNumber === null) return;
    const currentIdx = selectedTheme.players.findIndex(p => p.number === selectedPlayerNumber);
    const prevIdx = (currentIdx - 1 + selectedTheme.players.length) % selectedTheme.players.length;
    const nextPlayer = selectedTheme.players[prevIdx];
    setSelectedCell({ row: nextPlayer.row, col: nextPlayer.col });
    setSelectedDirection(nextPlayer.direction);
  };

  const handleNextClue = () => {
    if (!selectedTheme || selectedPlayerNumber === null) return;
    const currentIdx = selectedTheme.players.findIndex(p => p.number === selectedPlayerNumber);
    const nextIdx = (currentIdx + 1) % selectedTheme.players.length;
    const nextPlayer = selectedTheme.players[nextIdx];
    setSelectedCell({ row: nextPlayer.row, col: nextPlayer.col });
    setSelectedDirection(nextPlayer.direction);
  };

  // Formatting utility for timer display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Wordle clipboard recap card sharer
  const handleShareResult = () => {
    if (!selectedTheme) return;
    
    // Generate emoji grid matrix representing the 10x10 board layout
    let shareText = `Knowsball WC Crossword ⚽\n`;
    shareText += `Theme: ${selectedTheme.title}\n`;
    shareText += status === 'won' ? `Solved in ${formatTime(300 - timeLeft)}! 🏆\n` : `Board Failed ❌\n`;
    
    for (let r = 0; r < 10; r++) {
      let rowEmojis = '';
      for (let c = 0; c < 10; c++) {
        const key = `${r},${c}`;
        const cellInfo = gridMap[key];
        if (!cellInfo) {
          rowEmojis += '⬛'; // Empty/inactive pitch
        } else {
          // Check if this cell belongs to a solved word
          const isSolved = cellInfo.players.some(p => solvedWordIds.includes(p.playerNumber));
          if (isSolved) {
            rowEmojis += '🟩'; // Neon-green solved
          } else {
            rowEmojis += status === 'won' ? '🟩' : '🟥'; // Red failed at game over
          }
        }
      }
      shareText += rowEmojis + '\n';
    }
    
    shareText += `\nPlay at knowsball.com`;

    navigator.clipboard.writeText(shareText).then(() => {
      setShowShareNotification(true);
      setTimeout(() => setShowShareNotification(false), 2000);
    }).catch(err => {
      console.error("Failed to copy puzzle result to clipboard", err);
    });
  };

  if (!selectedTheme) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-brand-white font-mono bg-zinc-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-brand-green border-b-2 border-transparent"></div>
        <p className="mt-4 text-xs tracking-widest uppercase">LOADING PITCH GRID...</p>
      </div>
    );
  }

  // Build rows/cols iteration arrays
  const rowsArray = Array.from({ length: 10 }, (_, i) => i);
  const colsArray = Array.from({ length: 10 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="absolute inset-0 z-20 flex flex-col justify-between bg-zinc-950 overflow-y-auto overflow-x-hidden hide-scrollbar"
    >
      {/* 1. Header */}
      <header className="relative flex justify-between items-center p-3 border-b-4 border-brand-white bg-zinc-900 shrink-0 select-none">
        <button
          onClick={onHome}
          className="p-1.5 rounded-lg border-2 border-brand-white bg-zinc-950 text-brand-white hover:bg-brand-white hover:text-zinc-950 transition-all shadow-[2px_2px_0px_0px_#f4f1ea] active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_]"
        >
          <Home size={16} />
        </button>

        <div className="text-center flex-1 mx-2">
          <h1 className="font-anton text-lg sm:text-xl text-brand-white tracking-wide leading-none uppercase">
            WC CROSSWORD
          </h1>
          <span className="text-[9px] font-mono text-brand-gold tracking-widest block mt-0.5 uppercase">
            {selectedTheme.title}
          </span>
        </div>

        {/* Time Limit Indicator */}
        <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-950 border-2 border-brand-white shadow-[2px_2px_0px_0px_#f4f1ea]">
          <Timer size={14} className={timeLeft <= 30 ? "text-rose-500 animate-pulse" : "text-brand-green"} />
          <span className={`font-mono text-xs font-bold leading-none ${timeLeft <= 30 ? "text-rose-500 font-extrabold" : "text-brand-white"}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </header>

      {/* 2. Lives & Info Panel */}
      <div className="px-4 py-2 bg-zinc-900/60 border-b border-zinc-800 flex justify-between items-center shrink-0">
        {/* Lives visual balls */}
        <div className="flex items-center gap-1 bg-zinc-950 px-2 py-1 border border-zinc-800 rounded-md">
          <span className="text-[10px] font-mono text-zinc-400 mr-1 uppercase">BOARD LIVES:</span>
          {Array.from({ length: 3 }).map((_, idx) => (
            <span key={idx}>
              <SoccerBall
                size={14}
                className={idx < boardLives ? "text-brand-green fill-brand-green/20" : "text-rose-500 scale-95 opacity-40"}
              />
            </span>
          ))}
        </div>

        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
          {selectedTheme.subtitle}
        </span>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 flex flex-col justify-start items-center p-3 sm:p-4 gap-3 w-full">
        {/* 3. Interactive Football Pitch Grid */}
        <div className="w-full flex justify-center shrink-0">
          <div className="relative aspect-square w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[400px] border-4 border-brand-white bg-emerald-950 p-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] overflow-hidden">
            {/* Pitch markings */}
            <div className="absolute inset-0 border-2 border-emerald-900/20 m-2 pointer-events-none rounded-lg" />
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-900/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-emerald-900/10 pointer-events-none" />

            <div className="grid grid-cols-10 grid-rows-10 gap-1 h-full w-full relative z-10">
              {rowsArray.map(r =>
                colsArray.map(c => {
                  const key = `${r},${c}`;
                  const cellInfo = gridMap[key];
                  const value = gridLetters[key] || '';
                  
                  if (!cellInfo) {
                    // Empty pitch cell
                    return (
                      <div
                        key={key}
                        className="bg-emerald-950/40 rounded-[3px] border border-emerald-900/25 transition-all duration-300"
                      />
                    );
                  }

                  // Active gameplay cell styling
                  const isSelected = selectedCell && selectedCell.row === r && selectedCell.col === c;
                  const isPartofActiveWord = activePlayer && cellInfo.players.some(p => p.playerNumber === selectedPlayerNumber);
                  
                  // Locked/Solved states
                  const isSolved = cellInfo.players.some(p => solvedWordIds.includes(p.playerNumber));
                  
                  // Word Shaking state on wrong submit
                  const isShaking = activePlayer && shakingWordId !== null && cellInfo.players.some(p => p.playerNumber === shakingWordId);

                  let cellClass = "relative aspect-square rounded-[4px] flex items-center justify-center transition-all duration-200 select-none cursor-pointer border font-mono font-black text-sm xs:text-base sm:text-lg ";
                  
                  if (isSolved) {
                    cellClass += "bg-brand-green text-zinc-950 border-brand-white font-extrabold shadow-[0_0_10px_rgba(74,222,128,0.4)]";
                  } else if (isSelected) {
                    cellClass += "bg-zinc-900 text-cyan-300 border-cyan-400 ring-2 ring-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)] z-20";
                  } else if (isPartofActiveWord) {
                    cellClass += "bg-cyan-950/30 text-cyan-100 border-cyan-700/80 shadow-[0_0_6px_rgba(6,182,212,0.15)] z-10";
                  } else {
                    cellClass += "bg-zinc-900 text-brand-white border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/80";
                  }

                  return (
                    <motion.div
                      key={key}
                      onClick={() => handleCellClick(r, c)}
                      animate={isShaking ? {
                        x: [0, -6, 6, -6, 6, 0],
                        borderColor: ["#ef4444", "#ef4444", "#ef4444", "#ef4444", "#ef4444"]
                      } : {}}
                      transition={{ duration: 0.4 }}
                      className={cellClass}
                    >
                      {/* Clue Index number displayed in cell top-left corner */}
                      {cellInfo.cellNumber && (
                        <span className={`absolute top-0.5 left-0.5 text-[7px] leading-none font-bold ${isSolved ? 'text-zinc-800' : 'text-zinc-500'}`}>
                          {cellInfo.cellNumber}
                        </span>
                      )}
                      
                      {/* The character value inside this cell */}
                      <span className="mt-0.5">
                        {isSolved ? cellInfo.char : value}
                      </span>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* 4. Clue Display Box */}
        {activePlayer && (
          <div className="w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[400px] bg-zinc-900 border-2 border-brand-white p-3 rounded-lg shadow-[3px_3px_0px_0px_#f4f1ea] shrink-0 text-left">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5 mb-1.5 select-none">
              <span className="font-anton text-[11px] sm:text-xs text-brand-green tracking-wider uppercase flex items-center gap-1">
                <span className="bg-brand-green text-zinc-950 px-1 py-0.5 rounded text-[10px] font-black leading-none">
                  #{activePlayer.number}
                </span>
                CLUE ({activePlayer.direction.toUpperCase()})
                {solvedWordIds.includes(activePlayer.number) && (
                  <span className="text-brand-green text-[9px] font-mono font-bold tracking-widest border border-brand-green/30 px-1 py-0.5 rounded bg-brand-green/5">
                    SOLVED
                  </span>
                )}
              </span>

              {/* Prev / Next controls */}
              <div className="flex gap-1.5">
                <button
                  onClick={handlePrevClue}
                  className="p-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-brand-white hover:border-brand-white transition-colors cursor-pointer"
                  aria-label="Previous clue"
                >
                  <ChevronLeft size={12} />
                </button>
                <button
                  onClick={handleNextClue}
                  className="p-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-brand-white hover:border-brand-white transition-colors cursor-pointer"
                  aria-label="Next clue"
                >
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>

            <p className="font-mono text-[10px] xs:text-[11px] sm:text-xs leading-relaxed text-zinc-300">
              {activePlayer.clue}
            </p>
          </div>
        )}
      </div>

      {/* 5. Custom Virtual Scrambled Keyboard */}
      <footer className="w-full bg-zinc-900 border-t-4 border-brand-white p-3 sm:p-4 shrink-0 z-10 flex flex-col gap-2.5">
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-lg mx-auto select-none">
          {keyboardLetters.map(char => (
            <motion.button
              whileTap={{ scale: 0.9 }}
              key={char}
              onClick={() => handleKeyPress(char)}
              className="h-8 xs:h-9 px-2 xs:px-2.5 bg-zinc-950 hover:bg-zinc-800 text-brand-white font-mono font-bold text-xs sm:text-sm rounded border border-zinc-800 hover:border-brand-green transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,0.02)] cursor-pointer flex items-center justify-center min-w-[28px] xs:min-w-[32px]"
            >
              {char}
            </motion.button>
          ))}
        </div>

        {/* Operational buttons row */}
        <div className="flex justify-between gap-3 max-w-sm w-full mx-auto select-none">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleBackspace}
            className="flex-1 bg-zinc-950 hover:bg-zinc-850 text-rose-400 font-anton text-xs py-2.5 border border-zinc-800 hover:border-rose-900 rounded-lg tracking-wider uppercase transition-colors shadow-md cursor-pointer"
          >
            ⌫ BACKSPACE
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmitWord}
            className="flex-1 bg-brand-green text-zinc-950 font-anton text-xs py-2.5 border-2 border-brand-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.25)] hover:shadow-[1px_1px_0px_0px_] active:translate-y-0.5 rounded-lg tracking-wider uppercase transition-all cursor-pointer"
          >
            ✓ ENTER GUESS
          </motion.button>
        </div>
      </footer>

      {/* 6. End-Game Overlay Summary (Won / Lost) */}
      <AnimatePresence>
        {status !== 'playing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-zinc-900 border-4 border-brand-white rounded-2xl max-w-md w-full p-6 text-center relative shadow-[8px_8px_0px_0px_#f4f1ea] overflow-hidden"
            >
              {/* Top accent border striping */}
              <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${status === 'won' ? 'from-brand-green via-emerald-400 to-cyan-400' : 'from-rose-600 via-zinc-800 to-rose-600'}`} />

              <div className="flex justify-center my-3 relative select-none">
                {status === 'won' ? (
                  <div className="bg-brand-green text-zinc-950 p-3.5 rounded-full border-2 border-brand-white shadow-lg animate-bounce">
                    <Check size={36} strokeWidth={3} />
                  </div>
                ) : (
                  <div className="bg-rose-500 text-brand-white p-3.5 rounded-full border-2 border-brand-white shadow-lg">
                    <X size={36} strokeWidth={3} />
                  </div>
                )}
              </div>

              <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-wide leading-none mt-2">
                {status === 'won' ? (
                  <span className="text-brand-green">BOARD SOLVED!</span>
                ) : (
                  <span className="text-rose-500">BOARD FAILED!</span>
                )}
              </h2>

              <p className="text-zinc-400 font-mono text-[10px] tracking-widest uppercase mt-1">
                DAILY: {selectedTheme.title}
              </p>

              <div className="my-5 p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col gap-2 text-left">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">SOLVED WORDS:</span>
                  <span className="font-anton text-sm text-brand-white">
                    {solvedWordIds.length} / {selectedTheme.players.length}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900 pb-1.5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">TIME REMAINING:</span>
                  <span className="font-mono text-sm text-brand-gold font-bold">
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">REMAINING LIVES:</span>
                  <span className="font-anton text-sm text-brand-white flex items-center gap-1">
                    {isDev ? '∞' : lives} <span className="text-[10px] text-zinc-600">({lives <= 0 ? 'Locked' : 'Active'})</span>
                  </span>
                </div>
              </div>

              {/* Shares copied message drawer */}
              <AnimatePresence>
                {showShareNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 bg-brand-green text-zinc-950 font-anton text-xs py-1.5 px-3 rounded border border-brand-white shadow-md z-30 tracking-wider"
                  >
                    ✓ COPIED TO CLIPBOARD!
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Modal controls */}
              <div className="flex flex-col gap-2 mt-4 select-none">
                <button
                  onClick={handleShareResult}
                  className="w-full bg-cyan-500 text-zinc-950 font-anton text-lg uppercase py-3 border-2 border-brand-white shadow-[3px_3px_0px_0px_#f4f1ea] hover:shadow-[1px_1px_0px_0px_] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Share2 size={18} />
                  SHARE TO SOCIALS
                </button>
                
                <button
                  onClick={onHome}
                  className="w-full bg-zinc-800 text-brand-white hover:bg-zinc-700 font-anton text-base uppercase py-3 border-2 border-zinc-700 hover:border-brand-white transition-all cursor-pointer"
                >
                  RETURN TO ARENA
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
