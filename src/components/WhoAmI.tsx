import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Trophy, Share2, HelpCircle, Lock, Check, X, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';
import { WHO_AM_I_QUESTIONS, WhoAmIPlayer } from '../data/whoAmIQuestions';
import { correctAudio, incorrectAudio } from '../audio';

interface WhoAmIProps {
  onDeductLife: () => void;
  onHome: () => void;
  isDev?: boolean;
  lives: number;
}

interface PlayerProgress {
  playerId: string;
  triesUsed: number;
  guesses: string[];
  status: 'playing' | 'won' | 'lost';
}

const getLocalDateString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// Helper to strip diacritics / accents for robust matching
const stripAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Fuzzy name comparison for user convenience
const checkGuess = (guess: string, playerName: string) => {
  const normGuess = stripAccents(guess.toLowerCase().trim());
  const normPlayer = stripAccents(playerName.toLowerCase().trim());
  
  if (normGuess === normPlayer) return true;
  
  const playerParts = normPlayer.split(/\s+/);
  
  // If player is "Lionel Messi", and guess is "Messi"
  if (playerParts.includes(normGuess) && normGuess.length > 3) {
    return true;
  }
  
  // Custom mappings for special players
  if (normPlayer === 'cristiano ronaldo' && normGuess === 'cristiano') {
    return true;
  }
  if (normPlayer === 'ronaldo' && normGuess === 'ronaldo nazario') {
    return true;
  }
  
  return false;
};

// Seeded deterministic generator based on the date string
const getDailySeed = (dateStr: string) => {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const getDailyPlayers = (dateStr: string, allPlayers: WhoAmIPlayer[]): WhoAmIPlayer[] => {
  const seed = getDailySeed(dateStr);
  const selected: WhoAmIPlayer[] = [];
  const pool = [...allPlayers];
  
  let currentSeed = seed;
  const nextRandom = () => {
    currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
    return currentSeed / 4294967296;
  };
  
  for (let i = 0; i < 3; i++) {
    if (pool.length === 0) break;
    const idx = Math.floor(nextRandom() * pool.length);
    selected.push(pool[idx]);
    pool.splice(idx, 1);
  }
  
  return selected;
};

export default function WhoAmI({ onDeductLife, onHome, isDev = false, lives }: WhoAmIProps) {
  // Game state
  const [dailyPlayers, setDailyPlayers] = useState<WhoAmIPlayer[]>([]);
  const [progress, setProgress] = useState<PlayerProgress[]>([]);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [inputVal, setInputVal] = useState('');
  const [shake, setShake] = useState(false);
  const [showShareNotification, setShowShareNotification] = useState(false);
  const [countdown, setCountdown] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const inputRef = useRef<HTMLInputElement>(null);

  // Load or initialize daily players and progress
  useEffect(() => {
    const todayStr = getLocalDateString();
    const savedDate = localStorage.getItem('knowsball_whoami_date');
    const savedPlayerIds = localStorage.getItem('knowsball_whoami_player_ids');
    const savedProgress = localStorage.getItem('knowsball_whoami_progress');

    let selectedPlayers: WhoAmIPlayer[] = [];
    let initialProgress: PlayerProgress[] = [];

    if (savedDate === todayStr && savedPlayerIds && savedProgress) {
      try {
        const ids = JSON.parse(savedPlayerIds) as string[];
        selectedPlayers = ids.map(id => WHO_AM_I_QUESTIONS.find(p => p.id === id)).filter(Boolean) as WhoAmIPlayer[];
        initialProgress = JSON.parse(savedProgress) as PlayerProgress[];
      } catch (e) {
        console.error("Failed to parse saved Who Am I progress, resetting daily challenge.", e);
        selectedPlayers = [];
      }
    }

    // Generate new daily challenge if date mismatch or parse error
    if (selectedPlayers.length === 0 || initialProgress.length === 0) {
      // Deterministic selection based on the local date
      const selected = getDailyPlayers(todayStr, WHO_AM_I_QUESTIONS);
      
      selectedPlayers = selected;
      initialProgress = selected.map(p => ({
        playerId: p.id,
        triesUsed: 0,
        guesses: [],
        status: 'playing'
      }));

      localStorage.setItem('knowsball_whoami_date', todayStr);
      localStorage.setItem('knowsball_whoami_player_ids', JSON.stringify(selected.map(p => p.id)));
      localStorage.setItem('knowsball_whoami_progress', JSON.stringify(initialProgress));
    }

    setDailyPlayers(selectedPlayers);
    setProgress(initialProgress);

    // Find the first player who is still 'playing' to set as activeIdx
    const firstActive = initialProgress.findIndex(p => p.status === 'playing');
    if (firstActive !== -1) {
      setActiveIdx(firstActive);
    } else {
      // If all are completed, show the final report card (activeIdx becomes 3/completed)
      setActiveIdx(3);
    }
  }, []);

  // Update midnight countdown clock
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // 00:00 tomorrow
      const diffMs = midnight.getTime() - now.getTime();
      
      const hours = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60)));
      const minutes = Math.max(0, Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = Math.max(0, Math.floor((diffMs % (1000 * 60)) / 1000));
      
      setCountdown({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Set focus on input whenever active index change
  useEffect(() => {
    if (activeIdx < 3 && progress[activeIdx]?.status === 'playing') {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [activeIdx, progress]);

  // Pre-compiled list of all 100 player names for autocomplete suggestions
  const allPlayerNames = useMemo(() => {
    return WHO_AM_I_QUESTIONS.map(q => q.playerName);
  }, []);

  // Filter and sort suggestions as user types (triggered at 3+ characters)
  const suggestions = useMemo(() => {
    const query = inputVal.trim().toLowerCase();
    if (query.length < 3) return [];

    const strippedQuery = stripAccents(query);

    const filtered = allPlayerNames.filter((name) => {
      const strippedName = stripAccents(name.toLowerCase());
      return strippedName.includes(strippedQuery);
    });

    filtered.sort((a, b) => {
      const aStripped = stripAccents(a.toLowerCase());
      const bStripped = stripAccents(b.toLowerCase());
      const aStartsWith = aStripped.startsWith(strippedQuery);
      const bStartsWith = bStripped.startsWith(strippedQuery);
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      return a.localeCompare(b);
    });
    
    return filtered.slice(0, 5); // Limit to top 5 for premium fit
  }, [inputVal, allPlayerNames]);

  const activePlayer = dailyPlayers[activeIdx];
  const activeProgress = progress[activeIdx];

  const handleGuessSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!activePlayer || !activeProgress || activeProgress.status !== 'playing') return;

    const trimmedVal = inputVal.trim();
    if (!trimmedVal) return;

    const isCorrect = checkGuess(trimmedVal, activePlayer.playerName);
    const newGuesses = [...activeProgress.guesses, trimmedVal];
    const newTries = activeProgress.triesUsed + 1;
    let newStatus = activeProgress.status;

    if (isCorrect) {
      newStatus = 'won';
      correctAudio.currentTime = 0;
      correctAudio.play().catch(() => {});
    } else {
      if (newTries >= 3) {
        newStatus = 'lost';
        incorrectAudio.currentTime = 0;
        incorrectAudio.play().catch(() => {});
        // Deduct 1 life in the global session!
        onDeductLife();
      } else {
        // Simple shake feedback on incorrect attempts (non-terminal)
        setShake(true);
        setTimeout(() => setShake(false), 500);
        incorrectAudio.currentTime = 0;
        incorrectAudio.play().catch(() => {});
      }
    }

    const updatedProgress = progress.map((p, idx) => {
      if (idx === activeIdx) {
        return {
          ...p,
          guesses: newGuesses,
          triesUsed: newTries,
          status: newStatus
        };
      }
      return p;
    });

    setProgress(updatedProgress);
    localStorage.setItem('knowsball_whoami_progress', JSON.stringify(updatedProgress));
    setInputVal('');
  };

  const handleSuggestionClick = (name: string) => {
    setInputVal(name);
    // Instant submission when suggestion clicked for one-click premium typing UX
    setTimeout(() => {
      setInputVal('');
      const isCorrect = checkGuess(name, activePlayer.playerName);
      const newGuesses = [...activeProgress.guesses, name];
      const newTries = activeProgress.triesUsed + 1;
      let newStatus = activeProgress.status;

      if (isCorrect) {
        newStatus = 'won';
        correctAudio.currentTime = 0;
        correctAudio.play().catch(() => {});
      } else {
        if (newTries >= 3) {
          newStatus = 'lost';
          incorrectAudio.currentTime = 0;
          incorrectAudio.play().catch(() => {});
          onDeductLife();
        } else {
          setShake(true);
          setTimeout(() => setShake(false), 500);
          incorrectAudio.currentTime = 0;
          incorrectAudio.play().catch(() => {});
        }
      }

      const updatedProgress = progress.map((p, idx) => {
        if (idx === activeIdx) {
          return {
            ...p,
            guesses: newGuesses,
            triesUsed: newTries,
            status: newStatus
          };
        }
        return p;
      });

      setProgress(updatedProgress);
      localStorage.setItem('knowsball_whoami_progress', JSON.stringify(updatedProgress));
    }, 50);
  };

  const handleNext = () => {
    const nextIdx = activeIdx + 1;
    setActiveIdx(nextIdx);
  };

  const handleShare = () => {
    const todayStr = getLocalDateString();
    let text = `⚽ Knowsball "Who Am I?" • World Cup Challenge • ${todayStr}\n\n`;
    
    progress.forEach((p, idx) => {
      const correctName = dailyPlayers[idx]?.playerName || '';
      if (p.status === 'won') {
        const emoji = p.triesUsed === 1 ? '🟢' : p.triesUsed === 2 ? '🟡' : '🟠';
        text += `Player ${idx + 1}: ${emoji} Won in ${p.triesUsed}/3 tries\n`;
      } else {
        text += `Player ${idx + 1}: 🔴 Failed (0/3 tries)\n`;
      }
    });

    text += `\nPlay now at knowsball.com ! 🏆`;

    navigator.clipboard.writeText(text)
      .then(() => {
        setShowShareNotification(true);
        setTimeout(() => setShowShareNotification(false), 2500);
      })
      .catch((err) => {
        console.error('Failed to copy to clipboard', err);
      });
  };

  // If players not loaded yet, display loader
  if (dailyPlayers.length === 0 || progress.length === 0) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 z-30">
        <RefreshCw className="text-brand-green w-10 h-10 animate-spin mb-3" />
        <span className="font-mono text-zinc-500 text-sm tracking-widest uppercase">
          ASSEMBLING WORLD CUP DOSSIER...
        </span>
      </div>
    );
  }

  // SCREEN 1 & 2: GUESSING MODE / ACTIVE PLAYER REVEALS
  const showActiveGuessScreen = activeIdx < 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="absolute inset-0 z-30 flex flex-col justify-between bg-zinc-950 p-4 sm:p-6 overflow-y-auto"
    >
      {/* 1. TOP STATUS HEADER */}
      <header className="flex justify-between items-center pb-3 border-b-2 border-zinc-800 shrink-0">
        <div className="flex flex-col text-left">
          <span className="font-anton text-lg tracking-wider text-brand-white uppercase leading-none">
            WHO AM I?
          </span>
          <span className="font-mono text-[9px] text-brand-green uppercase tracking-widest mt-1">
            World Cup Edition
          </span>
        </div>

        {/* Circular Progress Icons */}
        <div className="flex gap-2.5">
          {progress.map((p, idx) => {
            let dotStyle = 'bg-zinc-900 border-zinc-700 text-zinc-500';
            if (p.status === 'won') dotStyle = 'bg-brand-green border-brand-white text-zinc-950 shadow-[0_0_10px_rgba(204,255,0,0.4)]';
            if (p.status === 'lost') dotStyle = 'bg-rose-600 border-brand-white text-brand-white shadow-[0_0_10px_rgba(255,0,60,0.4)]';
            if (idx === activeIdx && activeIdx < 3) dotStyle = 'bg-brand-gold border-brand-white text-zinc-950 animate-pulse';

            return (
              <div 
                key={idx} 
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 font-anton text-xs sm:text-sm flex items-center justify-center transition-all duration-300 ${dotStyle}`}
              >
                {p.status === 'won' ? <Check size={12} className="stroke-[3]" /> : p.status === 'lost' ? <X size={12} className="stroke-[3]" /> : idx + 1}
              </div>
            );
          })}
        </div>

        <button
          onClick={onHome}
          className="font-anton text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-brand-white px-3 py-1.5 brutal-border border-zinc-700 transition-colors cursor-pointer"
        >
          QUIT
        </button>
      </header>

      {showActiveGuessScreen ? (
        // GUESSING SCREEN
        <div className="flex-1 flex flex-col justify-between py-4 gap-4">
          
          {/* PLAYER CARD VIEWPORT */}
          <div className="flex-1 flex flex-col justify-center items-center max-w-lg mx-auto w-full gap-4">
            
            {/* Clue progressive container */}
            <div className="w-full flex flex-col gap-3">
              
              {/* CLUE 1 CARD (Obscure Fact) */}
              <div className="bg-zinc-900 border-2 border-zinc-800 p-4 rounded-xl relative shadow-md text-left">
                <div className="absolute top-2 right-3 font-mono text-[9px] text-zinc-500 uppercase font-black">
                  🛡️ Clue 1: Obscure Fact
                </div>
                <p className="text-zinc-100 font-sans text-sm sm:text-base leading-relaxed mt-2 select-text">
                  "{activePlayer.clues[0]}"
                </p>
              </div>

              {/* CLUE 2 CARD (Medium Fact) */}
              <AnimatePresence mode="wait">
                {activeProgress.triesUsed >= 1 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-900 border-2 border-brand-gold/40 p-4 rounded-xl relative shadow-md text-left"
                  >
                    <div className="absolute top-2 right-3 font-mono text-[9px] text-brand-gold uppercase font-black">
                      ⚡ Clue 2: Medium Fact
                    </div>
                    <p className="text-zinc-100 font-sans text-sm sm:text-base leading-relaxed mt-2 select-text">
                      "{activePlayer.clues[1]}"
                    </p>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center p-5 bg-zinc-900/40 border-2 border-dashed border-zinc-800 rounded-xl relative overflow-hidden select-none">
                    <span className="font-anton text-zinc-600 tracking-wider text-xs sm:text-sm flex items-center gap-1.5">
                      <Lock size={12} /> CLUE 2 UNLOCKS AFTER TRY 1
                    </span>
                  </div>
                )}
              </AnimatePresence>

              {/* CLUE 3 CARD (Obvious Fact) */}
              <AnimatePresence mode="wait">
                {activeProgress.triesUsed >= 2 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-900 border-2 border-brand-green/40 p-4 rounded-xl relative shadow-md text-left"
                  >
                    <div className="absolute top-2 right-3 font-mono text-[9px] text-brand-green uppercase font-black font-black">
                      🔥 Clue 3: Obvious Fact
                    </div>
                    <p className="text-zinc-100 font-sans text-sm sm:text-base leading-relaxed mt-2 select-text">
                      "{activePlayer.clues[2]}"
                    </p>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center p-5 bg-zinc-900/40 border-2 border-dashed border-zinc-800 rounded-xl relative overflow-hidden select-none">
                    <span className="font-anton text-zinc-600 tracking-wider text-xs sm:text-sm flex items-center gap-1.5">
                      <Lock size={12} /> CLUE 3 UNLOCKS AFTER TRY 2
                    </span>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* ATTEMPTS BAR / FEEDBACK MESSAGES */}
            <div className="w-full flex flex-col items-center gap-2">
              {/* Tries remaining visual bar */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-zinc-500 text-[10px] uppercase font-bold tracking-wider">
                  Attempts Used:
                </span>
                <div className="flex gap-2">
                  {[1, 2, 3].map((num) => {
                    const isUsed = activeProgress.triesUsed >= num;
                    return (
                      <div
                        key={num}
                        className={`w-3.5 h-3.5 rounded-full border ${
                          isUsed 
                            ? 'bg-rose-500 border-brand-white shadow-[0_0_5px_rgba(239,68,68,0.5)]' 
                            : 'bg-zinc-800 border-zinc-700'
                        } transition-all duration-300`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Guessed History list */}
              {activeProgress.guesses.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-center mt-1">
                  {activeProgress.guesses.map((g, i) => (
                    <span key={i} className="px-2 py-0.5 bg-rose-950/60 border border-rose-800 text-rose-300 font-mono text-[10px] rounded flex items-center gap-1">
                      <X size={8} /> {g}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* DYNAMIC RESULTS/OUTCOME POPUP OVERLAY */}
            <AnimatePresence>
              {activeProgress.status !== 'playing' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`w-full p-5 rounded-2xl border-4 brutal-border text-center flex flex-col gap-3 relative overflow-hidden ${
                    activeProgress.status === 'won' 
                      ? 'bg-brand-green text-brand-black border-brand-white shadow-[6px_6px_0px_0px_#f4f1ea]' 
                      : 'bg-zinc-900 text-brand-white border-rose-500 shadow-[6px_6px_0px_0px_#ef4444]'
                  }`}
                >
                  {activeProgress.status === 'won' ? (
                    <>
                      <h3 className="font-anton text-2xl uppercase tracking-wider text-stroke leading-none">
                        🎯 GOOOAAALLL!
                      </h3>
                      <p className="font-sans text-sm font-semibold leading-relaxed">
                        Incredible ball knowledge! The World Cup legend was indeed:
                      </p>
                      <h4 className="font-anton text-3xl uppercase tracking-tighter text-stroke leading-none py-1">
                        {activePlayer.playerName}
                      </h4>
                    </>
                  ) : (
                    <>
                      <h3 className="font-anton text-2xl text-rose-500 uppercase tracking-wider leading-none">
                        🟥 OUT OF TRIES!
                      </h3>
                      <p className="font-mono text-zinc-400 text-xs leading-relaxed">
                        Tough bounce, manager. You depleted all 3 attempts. The correct answer was:
                      </p>
                      <h4 className="font-anton text-3xl text-brand-gold uppercase tracking-tighter leading-none py-1">
                        {activePlayer.playerName}
                      </h4>
                      <p className="text-[10px] font-mono text-rose-400 italic">
                        💔 1 Life Deducted from Daily Balance
                      </p>
                    </>
                  )}

                  <button
                    onClick={handleNext}
                    className={`w-full font-anton py-3 border-2 text-lg uppercase shadow-[3px_3px_0px_0px] transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeProgress.status === 'won'
                        ? 'bg-brand-black text-brand-white border-brand-white shadow-[#f4f1ea] hover:bg-zinc-800'
                        : 'bg-brand-green text-brand-black border-brand-white shadow-[#f4f1ea]'
                    }`}
                  >
                    {activeIdx < 2 ? 'Next Player' : 'View Daily Summary'} <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. INPUT FORM & SUGGESTIONS BAR */}
          <div className="w-full max-w-lg mx-auto flex flex-col gap-2 shrink-0">
            {activeProgress.status === 'playing' ? (
              <>
                {/* Autocomplete suggestions bar */}
                <div className="min-h-[38px] flex items-center">
                  <AnimatePresence>
                    {suggestions.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="flex gap-2 overflow-x-auto py-1 px-0.5 scrollbar-none snap-x w-full"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {suggestions.map((name) => (
                          <button
                            key={name}
                            type="button"
                            onClick={() => handleSuggestionClick(name)}
                            className="px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-brand-gold font-mono text-xs font-bold rounded-full brutal-border border-zinc-700 hover:border-brand-gold transition-all cursor-pointer snap-start shrink-0"
                          >
                            {name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Guess input form */}
                <form 
                  onSubmit={handleGuessSubmit} 
                  className={`flex gap-2 ${shake ? 'animate-shake' : ''}`}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type name (e.g. Messi, Zidane)..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onFocus={() => setTimeout(() => window.scrollTo(0, 0), 10)}
                    disabled={activeProgress.status !== 'playing'}
                    className="flex-1 bg-zinc-900 text-brand-white px-3 py-3 brutal-border border-brand-white rounded-lg focus:outline-none focus:border-brand-gold text-base font-semibold placeholder-zinc-600 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={activeProgress.status !== 'playing'}
                    className="bg-brand-green text-brand-black font-anton px-5 py-3 rounded-lg border-2 border-brand-white shadow-[2px_2px_0px_0px_#f4f1ea] active:translate-x-[2px] active:translate-y-[2px] cursor-pointer disabled:opacity-50"
                  >
                    SUBMIT
                  </button>
                </form>
              </>
            ) : (
              <div className="bg-zinc-900 border border-zinc-800 py-3 rounded-lg text-center font-mono text-xs text-zinc-500">
                Inputs locked for this player. Click proceed above.
              </div>
            )}
          </div>
        </div>
      ) : (
        // DAILY REPORT CARD / FINAL SUMMARY SCREEN
        <div className="flex-1 flex flex-col justify-between py-6 max-w-lg mx-auto w-full">
          
          <div className="flex flex-col gap-6 my-auto justify-center">
            
            {/* Header summary badge */}
            <div className="text-center">
              <span className="px-3.5 py-1.5 bg-brand-gold text-brand-black font-anton text-sm uppercase rounded brutal-border border-brand-white tracking-widest shadow-[2px_2px_0px_0px_#f4f1ea]">
                Challenge Completed
              </span>
              <h2 className="font-anton text-4xl uppercase tracking-tighter text-brand-white mt-4 leading-none">
                DAILY REPORT CARD
              </h2>
              <p className="font-mono text-zinc-400 text-xs mt-2 tracking-wide uppercase">
                WORLD CUP GUESSER • {getLocalDateString()}
              </p>
            </div>

            {/* 3 players list detailed recap */}
            <div className="flex flex-col gap-3">
              {progress.map((p, idx) => {
                const player = dailyPlayers[idx];
                const wasWon = p.status === 'won';
                
                return (
                  <div 
                    key={p.playerId}
                    className={`p-4 rounded-xl border-2 flex items-center justify-between shadow-md relative overflow-hidden bg-zinc-900 ${
                      wasWon 
                        ? 'border-brand-green/30' 
                        : 'border-rose-500/30'
                    }`}
                  >
                    {/* Visual state vertical ribbon */}
                    <div className={`absolute left-0 inset-y-0 w-1.5 ${wasWon ? 'bg-brand-green' : 'bg-rose-500'}`} />

                    <div className="flex flex-col text-left pl-2">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                        PLAYER 0{idx + 1}
                      </span>
                      <span className="font-anton text-lg sm:text-xl text-brand-white uppercase mt-0.5 leading-none">
                        {player.playerName}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400 mt-1">
                        {wasWon ? `Guessed in ${p.triesUsed} try(ies)` : `Failed after 3 attempts`}
                      </span>
                    </div>

                    <div className="flex items-center">
                      {wasWon ? (
                        <div className="bg-brand-green/10 text-brand-green px-3 py-1 border border-brand-green/20 rounded font-anton text-xs tracking-wider">
                          CORRECT
                        </div>
                      ) : (
                        <div className="bg-rose-500/10 text-rose-500 px-3 py-1 border border-rose-500/20 rounded font-anton text-xs tracking-wider">
                          FAILED
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Countdown recharge timer block */}
            <div className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-1.5 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-gold to-brand-green" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                NEXT CHALLENGE IN
              </span>
              <span className="font-mono text-3xl font-extrabold tracking-widest text-brand-gold">
                {countdown.hours}:{countdown.minutes}:{countdown.seconds}
              </span>
              <span className="text-[9px] font-mono text-zinc-500">
                DAILY WORLD CUP SET RESETS AT 00:00 MIDNIGHT
              </span>
            </div>

          </div>

          {/* Social share results, play other arena action triggers */}
          <div className="w-full flex flex-col gap-3 shrink-0 relative">
            <button
              onClick={handleShare}
              className="w-full bg-brand-green text-brand-black font-anton text-xl uppercase py-4 border-2 border-brand-white shadow-[4px_4px_0px_0px_#f4f1ea] hover:shadow-[1px_1px_0px_0px_#f4f1ea] active:translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Share2 size={18} /> SHARE SCORE RECAP
            </button>

            <button
              onClick={onHome}
              className="w-full bg-zinc-900 text-brand-white font-anton text-lg uppercase py-3 border-2 border-zinc-700 hover:border-brand-white transition-colors cursor-pointer"
            >
              BACK TO MAIN ARENA
            </button>

            {/* Copied notification toaster popup */}
            <AnimatePresence>
              {showShareNotification && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-[110%] inset-x-0 mx-auto max-w-xs bg-zinc-900 border-2 border-brand-green text-brand-green px-4 py-2.5 rounded-lg text-center font-mono text-xs font-bold shadow-lg flex items-center justify-center gap-1.5 select-none"
                >
                  <Check size={14} className="stroke-[3]" /> COPIED DAILY SCORE TO CLIPBOARD!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      )}
      
      {/* 4. FOOTER CREDITS */}
      <footer className="text-center border-t border-zinc-900 pt-2 bg-zinc-950 text-zinc-700 text-[9px] font-mono uppercase shrink-0">
        ⚽ WORLD CUP HISTORICAL CHALLENGE MODE • VOL. 1
      </footer>
    </motion.div>
  );
}
