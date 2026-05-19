import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, X, HelpCircle, Check, Play, RefreshCw, Eye } from 'lucide-react';
import { ALL_SQUADS, Squad, Player } from '../data/squads';
import { tickingAudio, correctAudio, incorrectAudio } from '../audio';

interface StartingXIProps {
  onEnd: (score: number, won: boolean) => void;
  onHome: () => void;
}

export default function StartingXI({ onEnd, onHome }: StartingXIProps) {
  // Game Setup States
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  const [isHardMode, setIsHardMode] = useState(true);

  // Play States
  const [guessedPlayerIds, setGuessedPlayerIds] = useState<string[]>([]);
  const [activePlayer, setActivePlayer] = useState<Player | null>(null);
  const [inputVal, setInputVal] = useState('');
  const [shakePlayerId, setShakePlayerId] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [hintsLeft, setHintsLeft] = useState(3);
  const [revealedPlayerHints, setRevealedPlayerHints] = useState<string[]>([]);
  const [gameTime, setGameTime] = useState(60); // seconds
  const [elapsedTime, setElapsedTime] = useState(0); // for casual mode
  const [gameOver, setGameOver] = useState(false);
  const [revealedAll, setRevealedAll] = useState(false);

  // Keyboard and focus references
  const inputRef = useRef<HTMLInputElement>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 1. SELECT SQUAD AT RANDOM ON INITIAL MOUNT
  const pickRandomSquad = (forceHardMode?: boolean) => {
    const hard = forceHardMode !== undefined ? forceHardMode : isHardMode;
    const pool = hard 
      ? ALL_SQUADS 
      : ALL_SQUADS.filter((s) => s.isIconic === true);
    
    const activePool = pool.length > 0 ? pool : ALL_SQUADS;
    
    // Filter out current squad to avoid immediate repetition if pool allows
    let finalPool = activePool;
    if (selectedSquad && activePool.length > 1) {
      finalPool = activePool.filter((s) => s.id !== selectedSquad.id);
    }
    
    const randSquad = finalPool[Math.floor(Math.random() * finalPool.length)];
    setSelectedSquad(randSquad);
    setGuessedPlayerIds([]);
    setActivePlayer(null);
    setInputVal('');
    setGameTime(hard ? 60 : 180);
    setElapsedTime(0);
    setGameOver(false);
    setRevealedAll(false);
    setShowHint(false);
    setHintsLeft(3);
    setRevealedPlayerHints([]);
  };

  const handleToggleHardMode = (hard: boolean) => {
    setIsHardMode(hard);
    pickRandomSquad(hard);
  };

  useEffect(() => {
    pickRandomSquad();
  }, []);

  // 2. TIMER SYSTEM
  useEffect(() => {
    if (!isPlaying || gameOver) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      tickingAudio.pause();
      return;
    }

    timerIntervalRef.current = setInterval(() => {
      setGameTime((prev) => {
        if (prev <= 1) {
          // End Game!
          handleGameOver(true);
          return 0;
        }
        // Play tick tock in the final 10 seconds
        if (prev <= 11) {
          tickingAudio.currentTime = 0;
          tickingAudio.play().catch((e) => console.log('Audio error:', e));
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      tickingAudio.pause();
    };
  }, [isPlaying, gameOver]);

  // Clean audio on unmount
  useEffect(() => {
    return () => {
      tickingAudio.pause();
      correctAudio.pause();
      incorrectAudio.pause();
    };
  }, []);

  // Prevent viewport shifting/scrolling on iOS Safari when typing
  useEffect(() => {
    const preventScroll = () => {
      if (document.activeElement?.tagName === 'INPUT') {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('scroll', preventScroll);
    return () => {
      window.removeEventListener('scroll', preventScroll);
    };
  }, []);

  // 3. START GAME
  const handleKickOff = () => {
    if (!selectedSquad) return;
    setIsPlaying(true);
    // Refresh time based on mode to be absolutely sure it's accurate
    setGameTime(isHardMode ? 60 : 180);
    // Autofocus the Goalkeeper (usually first player in list or just index 0)
    if (selectedSquad.players.length > 0) {
      setActivePlayer(selectedSquad.players[0]);
    }
    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 100);
  };

  // 4. SUBMIT GUESS
  const handleGuessSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim() || !selectedSquad) return;

    const normalizedInput = inputVal.trim().toLowerCase();
    
    // Find if the input matches ANY unguessed player in the squad
    const matchedPlayer = selectedSquad.players.find(p => {
      if (guessedPlayerIds.includes(p.id)) return false;
      return p.name.toLowerCase() === normalizedInput || 
             p.aliases.some((alias) => alias.trim().toLowerCase() === normalizedInput);
    });

    if (matchedPlayer) {
      // Guessed!
      correctAudio.currentTime = 0;
      correctAudio.play().catch((e) => console.log(e));

      const updatedGuesses = [...guessedPlayerIds, matchedPlayer.id];
      setGuessedPlayerIds(updatedGuesses);
      setInputVal('');
      setShowHint(false);

      // Check if all players guessed
      if (updatedGuesses.length === selectedSquad.players.length) {
        handleGameOver(false);
        return;
      }

      // Keep activePlayer if they guessed someone else, or clear it if they guessed the active one
      if (activePlayer && activePlayer.id === matchedPlayer.id) {
        setActivePlayer(null);
      }
      setTimeout(() => {
        inputRef.current?.focus({ preventScroll: true });
      }, 50);
    } else {
      // Shake animation and sound feedback
      incorrectAudio.currentTime = 0;
      incorrectAudio.play().catch((e) => console.log(e));
      if (activePlayer) {
        setShakePlayerId(activePlayer.id);
        setTimeout(() => {
          setShakePlayerId(null);
        }, 500);
      }
    }
  };


  // 6. GAME OVER CONTROLLER
  const handleGameOver = (isTimeOut: boolean) => {
    setGameOver(true);
    setIsPlaying(false);
    tickingAudio.pause();
    
    // Save highscore if all guessed or significant score
    const finalScore = guessedPlayerIds.length;
    const won = guessedPlayerIds.length === (selectedSquad?.players.length || 11);
    
    onEnd(finalScore, won);
  };

  // 7. GIVE UP
  const handleGiveUp = () => {
    setRevealedAll(true);
    handleGameOver(false);
  };

  const handleBackToSetup = () => {
    setIsPlaying(false);
    pickRandomSquad();
  };

  // Autocomplete helpers
  const getUnrevealedPlayers = () => {
    if (!selectedSquad) return [];
    return selectedSquad.players.filter((p) => !guessedPlayerIds.includes(p.id));
  };

  // Custom Shirt Vector component representing premium high-fidelity shirt
  const PlayerShirt = ({
    jerseyColor,
    numberColor,
    trimColor,
    number,
    isGuessed,
    isActive,
    name,
    positionLabel
  }: {
    jerseyColor: string;
    numberColor: string;
    trimColor: string;
    number: number;
    isGuessed: boolean;
    isActive: boolean;
    name: string;
    positionLabel: string;
  }) => {
    const isStriped = jerseyColor === '#74C3FF'; // Special stripe render for Argentina
    
    return (
      <div className="flex flex-col items-center">
        {/* Shirt body */}
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center cursor-pointer transition-transform duration-200 active:scale-95">
          {/* Glowing Aura if selected */}
          {isActive && (
            <span className="absolute inset-0 rounded-full bg-brand-gold/40 border-4 border-brand-gold animate-ping" />
          )}

          <svg
            className={`w-full h-full drop-shadow-md transition-all duration-300 ${
              isActive ? 'scale-110' : 'hover:scale-105'
            }`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Jersey Outline */}
            <path
              d="M15,25 L30,10 L42,16 L42,8 L58,8 L58,16 L70,10 L85,25 L75,40 L68,36 L68,88 L32,88 L32,36 L25,40 Z"
              fill={jerseyColor}
              stroke={isActive ? '#ffb800' : '#ffffff'}
              strokeWidth={isActive ? '5' : '3'}
            />

            {/* Argentina Stripes overlay */}
            {isStriped && (
              <>
                <rect x="42" y="16" width="6" height="72" fill="#FFFFFF" />
                <rect x="52" y="16" width="6" height="72" fill="#FFFFFF" />
                <rect x="32" y="36" width="6" height="52" fill="#FFFFFF" />
                <rect x="62" y="36" width="6" height="52" fill="#FFFFFF" />
              </>
            )}

            {/* Collar / Trim decoration */}
            <path d="M42,16 Q50,26 58,16" stroke={trimColor} strokeWidth="4" fill="none" />
            <path d="M15,25 L22,33" stroke={trimColor} strokeWidth="3" />
            <path d="M85,25 L78,33" stroke={trimColor} strokeWidth="3" />
            <path d="M32,88 L68,88" stroke={trimColor} strokeWidth="4" />

            {/* Player Number */}
            <text
              x="50"
              y="58"
              fill={numberColor}
              fontSize="28"
              fontFamily="Anton, Impact, sans-serif"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {number}
            </text>
          </svg>
        </div>

        {/* Player Name Tag */}
        <div className="mt-1 sm:mt-2 text-center max-w-[90px] sm:max-w-[130px]">
          <span className="block text-[8px] sm:text-[10px] text-zinc-400 font-medium uppercase tracking-wider">
            {positionLabel}
          </span>
          <span
            className={`inline-block text-[9px] sm:text-[12px] font-anton px-1.5 py-0.5 rounded uppercase border max-w-full truncate ${
              isGuessed
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500'
                : revealedAll
                ? 'bg-rose-950/80 text-rose-300 border-rose-500'
                : isActive
                ? 'bg-brand-gold text-brand-black border-brand-white font-bold'
                : 'bg-zinc-900/90 text-zinc-300 border-zinc-700'
            }`}
          >
            {isGuessed ? name.split(' ').pop() : revealedAll ? name.split(' ').pop() : '???'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-zinc-950 font-sans text-brand-white overflow-hidden relative">
      {/* 1. SETUP / SELECTION SCREEN */}
      {!isPlaying && !gameOver && (
        <div className="flex-1 flex flex-col p-4 sm:p-6 justify-between overflow-y-auto z-10">
          <div className="flex items-center justify-between border-b-4 border-brand-white pb-3 mb-4">
            <h1 className="font-anton text-2xl sm:text-4xl tracking-wide text-brand-gold">
              🏆 STARTING XI
            </h1>
            <button
              onClick={onHome}
              className="p-1.5 border-2 border-brand-white rounded-md bg-zinc-900 hover:bg-zinc-800 text-brand-white"
            >
              <X size={20} />
            </button>
          </div>

          {selectedSquad && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 flex flex-col justify-center items-center text-center gap-6 my-auto max-w-md mx-auto w-full"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-brand-white bg-zinc-900 flex items-center justify-center relative shadow-[4px_4px_0px_0px_#f4f1ea] overflow-hidden">
                <span
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundColor: selectedSquad.jerseyColor }}
                />
                <img src="/assets/worldcupicon.png" alt="World Cup" className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10 animate-bounce" />
              </div>

              <div>
                <span className="px-3 py-1 bg-brand-gold text-brand-black font-anton text-xs uppercase rounded brutal-border border-brand-white tracking-widest">
                  LEGENDARY SQUAD #{selectedSquad.id.split('-').pop()}
                </span>
                <h2 className="font-anton text-3xl sm:text-5xl uppercase mt-3 tracking-wide leading-none text-brand-white">
                  {selectedSquad.country}
                </h2>
                <h3 className="font-anton text-2xl sm:text-3xl text-brand-gold mt-1 tracking-wider">
                  WORLD CUP {selectedSquad.year}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-2 italic font-mono">
                  "{selectedSquad.squadName}" • Formation {selectedSquad.formation}
                </p>
              </div>

              {/* Game Settings */}
              <div className="w-full bg-zinc-900/90 p-4 rounded-xl brutal-border border-brand-white text-left flex flex-col gap-3">
                <span className="font-anton text-sm tracking-wider uppercase text-zinc-400">
                  Select Match Rules
                </span>
                
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => handleToggleHardMode(true)}
                    className={`flex-1 py-3 px-2 rounded-lg font-anton text-sm sm:text-base border-2 transition-all flex items-center justify-center gap-1.5 ${
                      isHardMode
                        ? 'bg-brand-gold text-brand-black border-brand-white shadow-[2px_2px_0px_0px_#f4f1ea]'
                        : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-brand-white'
                    }`}
                  >
                    <Clock size={16} />
                    ⚡ HARD (1 MIN)
                  </button>
                  <button
                    onClick={() => handleToggleHardMode(false)}
                    className={`flex-1 py-3 px-2 rounded-lg font-anton text-sm sm:text-base border-2 transition-all flex items-center justify-center gap-1.5 ${
                      !isHardMode
                        ? 'bg-brand-green text-brand-black border-brand-white shadow-[2px_2px_0px_0px_#f4f1ea]'
                        : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-brand-white'
                    }`}
                  >
                    <Play size={16} />
                    🎮 CASUAL (3 MINS)
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 w-full mt-2">
                <button
                  onClick={pickRandomSquad}
                  className="flex-1 py-4 font-anton text-sm sm:text-base bg-zinc-900 border-2 border-zinc-700 hover:bg-zinc-800 rounded-xl transition-all uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw size={16} />
                  Different Squad
                </button>
                <button
                  onClick={handleKickOff}
                  className="flex-1 py-4 font-anton text-base sm:text-lg bg-brand-green text-brand-black border-4 border-brand-white rounded-xl transition-all shadow-[4px_4px_0px_0px_#f4f1ea] hover:shadow-[1px_1px_0px_0px_#f4f1ea] hover:translate-x-[3px] hover:translate-y-[3px] uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <img src="/assets/worldcupicon.png" alt="World Cup" className="w-5 h-5 object-contain" />
                  KICK OFF!
                </button>
              </div>
            </motion.div>
          )}

          <div className="text-center text-[10px] text-zinc-500 font-mono mt-4">
            GUESS ALL 11 SQUAD STARTERS. ACCENTS ARE FORGIVEN. GOOD LUCK!
          </div>
        </div>
      )}

      {/* 2. ACTIVE GAME SCREEN */}
      {isPlaying && selectedSquad && (
        <div className="flex-1 flex flex-col justify-between overflow-hidden relative">
          
          {/* Top HUD Bar */}
          <div className="p-3 bg-zinc-950 border-b-4 border-brand-white flex items-center justify-between z-20">
            <div className="flex flex-col">
              <span className="font-anton text-sm sm:text-lg uppercase text-brand-white leading-none">
                {selectedSquad.country}
              </span>
              <span className="text-[10px] sm:text-xs text-brand-gold font-anton tracking-wider mt-0.5 leading-none">
                {selectedSquad.year} • {selectedSquad.formation}
              </span>
            </div>

            {/* Middle Score counter */}
            <div className="bg-zinc-900 px-3 py-1.5 brutal-border border-brand-white font-anton text-sm sm:text-base text-brand-green">
              🏆 {guessedPlayerIds.length} / 11 GUESSED
            </div>

            {/* Timer HUD */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 brutal-border border-brand-white font-anton text-sm sm:text-base ${
                gameTime <= 10
                  ? 'bg-rose-950 text-rose-300 animate-pulse'
                  : 'bg-zinc-900 text-brand-white'
              }`}
            >
              <Clock size={16} />
              <span>
                {Math.floor(gameTime / 60)}:{gameTime % 60 < 10 ? `0${gameTime % 60}` : gameTime % 60}
              </span>
            </div>
          </div>

          {/* Tactical Pitch Board */}
          <div className="flex-1 relative w-full overflow-hidden bg-emerald-950/80 flex items-center justify-center p-4">
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />

            {/* Stylized Pitch Lines */}
            <div className="absolute inset-4 border-2 border-emerald-500/20 rounded flex flex-col justify-between pointer-events-none">
              {/* Half-way line */}
              <div className="w-full border-t border-emerald-500/20 my-auto relative flex items-center justify-center">
                {/* Center Circle */}
                <div className="absolute w-24 h-24 rounded-full border border-emerald-500/20" />
              </div>
              {/* Penalty Boxes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-16 border-b border-x border-emerald-500/20" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-16 border-t border-x border-emerald-500/20" />
            </div>

            {/* Players Position Layout */}
            <div className="absolute inset-0 z-10">
              {selectedSquad.players.map((player) => {
                const isGuessed = guessedPlayerIds.includes(player.id);
                const isActive = activePlayer?.id === player.id;
                const isShaking = shakePlayerId === player.id;

                return (
                  <div
                    key={player.id}
                    style={{
                      position: 'absolute',
                      left: `${player.x}%`,
                      top: `${player.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.div
                      onClick={() => {
                        setActivePlayer(player);
                        setTimeout(() => {
                          inputRef.current?.focus({ preventScroll: true });
                        }, 50);
                      }}
                      animate={isShaking ? {
                        x: [-4, 4, -4, 4, 0],
                        scale: isActive ? 1.08 : 1
                      } : {
                        scale: isActive ? 1.08 : 1
                      }}
                      transition={{ duration: 0.4 }}
                      className="cursor-pointer"
                    >
                      <PlayerShirt
                        jerseyColor={selectedSquad.jerseyColor}
                        numberColor={selectedSquad.numberColor}
                        trimColor={selectedSquad.trimColor}
                        number={player.number}
                        isGuessed={isGuessed}
                        isActive={isActive}
                        name={player.name}
                        positionLabel={player.positionLabel}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* User Guess Panel (Optimized for touch & keyb) */}
          <div className="bg-zinc-950 p-4 border-t-4 border-brand-white flex flex-col gap-3 z-20">
            <div className="flex flex-col gap-2">
              {/* Guess Header & Hint */}
              <div className="flex items-center justify-between">
                <span className="font-anton text-[10px] sm:text-xs tracking-wider text-zinc-400 uppercase">
                  {activePlayer ? (
                    <>Guessing: <span className="text-brand-gold">{activePlayer.positionLabel}</span></>
                  ) : (
                    "Type any name or tap a shirt for a hint"
                  )}
                </span>
                
                {activePlayer && (
                  <div className="flex items-center gap-2">
                    {!revealedPlayerHints.includes(activePlayer.id) ? (
                      <button
                        type="button"
                        disabled={hintsLeft <= 0}
                        onClick={() => {
                          if (hintsLeft > 0) {
                            setHintsLeft((prev) => prev - 1);
                            setRevealedPlayerHints((prev) => [...prev, activePlayer.id]);
                            setShowHint(true);
                          }
                        }}
                        className={`flex items-center gap-1 font-anton text-[10px] sm:text-xs px-2.5 py-1 rounded brutal-border transition-all ${
                          hintsLeft > 0
                            ? 'bg-zinc-900 border-zinc-700 text-brand-gold hover:bg-zinc-800'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-600 cursor-not-allowed'
                        }`}
                      >
                        <HelpCircle size={12} />
                        Unlock Hint ({hintsLeft} Left)
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowHint(!showHint)}
                        className="flex items-center gap-1 font-anton text-xs bg-zinc-900 border border-zinc-700 px-2 py-1 rounded text-brand-green hover:bg-zinc-850"
                      >
                        <Check size={12} />
                        {showHint ? "Hide Hint" : "Show Hint"}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Hint Bar */}
              <AnimatePresence>
                {activePlayer && revealedPlayerHints.includes(activePlayer.id) && showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-zinc-900 p-2.5 rounded-lg border border-brand-gold text-xs flex justify-between items-center"
                  >
                    <div>
                      <span className="font-bold text-zinc-400 uppercase mr-1">Initials:</span>
                      <span className="text-brand-white font-mono text-sm tracking-wider">{activePlayer.hintInitials}</span>
                    </div>
                    <div>
                      <span className="font-bold text-zinc-400 uppercase mr-1">Club in {selectedSquad.year}:</span>
                      <span className="text-brand-white">{activePlayer.hintClub}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Guess Entry Form */}
              <form onSubmit={handleGuessSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Enter any player's name..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onFocus={() => setTimeout(() => window.scrollTo(0, 0), 10)}
                  className="flex-1 bg-zinc-900 text-brand-white px-3 py-3 brutal-border border-brand-white rounded-lg focus:outline-none focus:border-brand-gold text-base font-semibold"
                />
                <button
                  type="submit"
                  className="bg-brand-green text-brand-black font-anton px-5 py-3 rounded-lg border-2 border-brand-white shadow-[2px_2px_0px_0px_#f4f1ea] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  SUBMIT
                </button>
              </form>

              {/* Global Hint status tracker for total squad hints */}
              <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono mt-1 px-1">
                <span>Unlock up to 3 individual player hints per match.</span>
                <span className="font-bold text-brand-gold uppercase">Hints remaining: {hintsLeft}/3</span>
              </div>
             </div>

            {/* Bottom Actions Row */}
            <div className="flex gap-2 mt-1">
              <button
                onClick={handleBackToSetup}
                className="flex-1 py-2.5 font-anton text-xs bg-zinc-900 border-2 border-zinc-700 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-brand-white transition-all cursor-pointer"
              >
                Quit / New Setup
              </button>
              <button
                onClick={handleGiveUp}
                className="flex-1 py-2.5 font-anton text-xs bg-rose-950 border-2 border-rose-800 hover:bg-rose-900 rounded-lg text-rose-300 transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <Eye size={12} />
                GIVE UP & REVEAL SQUAD
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. GAME OVER / RESULTS BOARD SCREEN */}
      {gameOver && selectedSquad && (
        <div className="flex-1 flex flex-col p-4 sm:p-6 justify-between overflow-y-auto z-30 bg-zinc-950">
          
          <div className="text-center max-w-md mx-auto w-full flex flex-col gap-6 my-auto justify-center">
            {/* Header Result */}
            <div>
              <span className="px-3 py-1 bg-rose-950 text-rose-300 font-anton text-xs uppercase rounded brutal-border border-rose-600 tracking-widest">
                Match Finished
              </span>
              <h1 className="font-anton text-4xl sm:text-5xl uppercase mt-3 tracking-wide leading-none text-brand-white">
                {guessedPlayerIds.length === selectedSquad.players.length ? "🌟 MAXIMUM IQ!" : "FULL TIME!"}
              </h1>
              <h3 className="font-anton text-lg sm:text-xl text-brand-gold mt-1 tracking-wider uppercase">
                {selectedSquad.country} Class of {selectedSquad.year}
              </h3>
            </div>

            {/* Score Showcase Banner */}
            <div className="bg-zinc-900 p-5 rounded-2xl brutal-border border-brand-white shadow-[4px_4px_0px_0px_#f4f1ea] text-center">
              <span className="text-xs text-zinc-400 font-anton uppercase tracking-wider block">
                Final Score
              </span>
              <div className="font-anton text-4xl sm:text-6xl text-brand-green mt-1">
                {guessedPlayerIds.length} / 11
              </div>
              <span className="text-[11px] text-zinc-400 font-mono mt-1 block">
                {guessedPlayerIds.length === selectedSquad.players.length 
                  ? "Perfect Match! You matched the historical Starting XI perfectly."
                  : `Good effort! You unlocked ${guessedPlayerIds.length} star players.`}
              </span>
            </div>

            {/* Complete Star-Studded Squad Grid */}
            <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800 text-left">
              <span className="font-anton text-xs tracking-wider uppercase text-zinc-500 block mb-3">
                Star Lineup Breakdown
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-1">
                {selectedSquad.players.map((player) => {
                  const gotIt = guessedPlayerIds.includes(player.id);
                  return (
                    <div
                      key={player.id}
                      className={`flex items-center gap-2.5 p-2 rounded-lg border text-xs ${
                        gotIt
                          ? 'bg-emerald-950/45 border-emerald-900 text-emerald-300'
                          : 'bg-rose-950/45 border-rose-900 text-rose-300'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center font-bold text-[10px]">
                        {player.number}
                      </span>
                      <div className="flex-1 flex flex-col">
                        <span className="font-bold">{player.name}</span>
                        <span className="text-[9px] text-zinc-400">{player.positionLabel} • {player.hintClub}</span>
                      </div>
                      {gotIt ? <Check size={14} /> : <X size={14} />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Back Actions */}
            <div className="flex gap-2 w-full mt-2">
              <button
                onClick={onHome}
                className="flex-1 py-4 font-anton text-sm sm:text-base bg-zinc-900 border-2 border-zinc-700 hover:bg-zinc-800 rounded-xl transition-all uppercase cursor-pointer"
              >
                Exit to Menu
              </button>
              <button
                onClick={pickRandomSquad}
                className="flex-1 py-4 font-anton text-base sm:text-lg bg-brand-green text-brand-black border-4 border-brand-white rounded-xl transition-all shadow-[4px_4px_0px_0px_#f4f1ea] hover:shadow-[1px_1px_0px_0px_#f4f1ea] hover:translate-x-[3px] hover:translate-y-[3px] uppercase cursor-pointer flex items-center justify-center gap-2"
              >
                <RefreshCw size={16} />
                PLAY AGAIN
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
