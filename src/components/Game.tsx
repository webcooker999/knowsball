import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { players, getRandomPlayer, Player } from '../data/players';
import { marketValuePlayers, getRandomMarketValuePlayer } from '../data/marketValues';
import { intlGoalsPlayers, getRandomIntlGoalsPlayer } from '../data/intlGoals';
import { agePlayers, getRandomAgePlayer } from '../data/agePlayers';
import { Flame, X } from 'lucide-react';
import { GameModeType } from '../App';
import { tickingAudio, correctAudio, incorrectAudio } from '../audio';

interface GameProps {
  gameMode: GameModeType;
  onEnd: (score: number, won: boolean) => void;
}

export default function Game({ gameMode, onEnd }: GameProps) {
  const [playerLeft, setPlayerLeft] = useState<Player | null>(null);
  const [playerRight, setPlayerRight] = useState<Player | null>(null);
  const [streak, setStreak] = useState(0);
  const [status, setStatus] = useState<'playing' | 'correct' | 'incorrect'>('playing');
  const [revealed, setRevealed] = useState(false); // When true, show both values
  const [selectedSide, setSelectedSide] = useState<'left' | 'right' | null>(null);
  const [round, setRound] = useState(1);
  const [timerKey, setTimerKey] = useState(0);
  const usedIds = useRef<string[]>([]);

  useEffect(() => {
    return () => {
      tickingAudio.pause();
      correctAudio.pause();
      incorrectAudio.pause();
    };
  }, []);

  useEffect(() => {
    if (status === 'playing') {
      tickingAudio.currentTime = 0;
      tickingAudio.play().catch(e => console.log("Audio play blocked:", e));
    } else {
      tickingAudio.pause();

      if (status === 'correct') {
        correctAudio.currentTime = 0;
        correctAudio.play().catch(e => console.log("Audio play blocked:", e));
      } else if (status === 'incorrect') {
        incorrectAudio.currentTime = 0;
        incorrectAudio.play().catch(e => console.log("Audio play blocked:", e));
      }
    }
  }, [status, timerKey]);

  useEffect(() => {
    loadNewRound();
  }, [gameMode]);

  const handleTimeOut = () => {
    if (status !== 'playing') return;
    setStatus('incorrect');
    setRevealed(true);
    setSelectedSide(null);
    setTimeout(() => {
      onEnd(streak, false);
    }, 2000);
  };

  const loadNewRound = () => {
    // If the pool is getting small, drop older used IDs to allow infinite play
    const threshold = gameMode === 'goals' ? 180 : gameMode === 'market' ? 80 : 150;
    if (usedIds.current.length > threshold) {
      usedIds.current = usedIds.current.slice(- (threshold / 2));
    }

    let p1, p2;

    if (gameMode === 'goals') {
      p1 = getRandomPlayer(usedIds.current);
      if (!usedIds.current.includes(p1.id)) usedIds.current.push(p1.id);

      const minScore = Math.max(0, p1.value - 3);
      const maxScore = p1.value + 3;

      p2 = getRandomPlayer(usedIds.current, maxScore, minScore);
      let attempts = 0;
      while (p1.value === p2.value && attempts < 10) {
        p2 = getRandomPlayer(usedIds.current, maxScore, minScore);
        attempts++;
      }
    } else if (gameMode === 'market') {
      p1 = getRandomMarketValuePlayer(usedIds.current);
      if (!usedIds.current.includes(p1.id)) usedIds.current.push(p1.id);

      p2 = getRandomMarketValuePlayer(usedIds.current, p1.value, streak);
      let attempts = 0;
      while (p1.value === p2.value && attempts < 10) {
        p2 = getRandomMarketValuePlayer(usedIds.current, p1.value, streak);
        attempts++;
      }
    } else if (gameMode === 'intlGoals') {
      p1 = getRandomIntlGoalsPlayer(usedIds.current);
      if (!usedIds.current.includes(p1.id)) usedIds.current.push(p1.id);

      p2 = getRandomIntlGoalsPlayer(usedIds.current, p1.value, streak);
      let attempts = 0;
      while (p1.value === p2.value && attempts < 10) {
        p2 = getRandomIntlGoalsPlayer(usedIds.current, p1.value, streak);
        attempts++;
      }
    } else {
      p1 = getRandomAgePlayer(usedIds.current);
      if (!usedIds.current.includes(p1.id)) usedIds.current.push(p1.id);

      p2 = getRandomAgePlayer(usedIds.current, p1.value, streak);
      let attempts = 0;
      while (p1.value === p2.value && attempts < 10) {
        p2 = getRandomAgePlayer(usedIds.current, p1.value, streak);
        attempts++;
      }
    }

    if (!usedIds.current.includes(p2.id)) usedIds.current.push(p2.id);

    setPlayerLeft(p1);
    setPlayerRight(p2);
    setRound(r => r + 1);
    setTimerKey(t => t + 1);

    setStatus('playing');
    setRevealed(false);
    setSelectedSide(null);
  };

  const handleGuess = (guessSide: 'left' | 'right') => {
    if (status !== 'playing' || !playerLeft || !playerRight) return;

    setSelectedSide(guessSide);
    setRevealed(true);
    const leftWins = playerLeft.value > playerRight.value;
    const rightWins = playerRight.value > playerLeft.value;
    const isCorrect =
      (guessSide === 'left' && leftWins) ||
      (guessSide === 'right' && rightWins) ||
      (playerLeft.value === playerRight.value); // Tie counts as correct

    if (isCorrect) {
      setStatus('correct');
      const newStreak = streak + 1;
      setStreak(newStreak);

      setTimeout(() => {
        loadNewRound();
      }, 1500);
    } else {
      setStatus('incorrect');
      setTimeout(() => {
        onEnd(streak, false);
      }, 2000);
    }
  };

  if (!playerLeft || !playerRight) return null;

  const title = gameMode === 'goals' ? 'WHO SCORED MORE WORLD CUP GOALS?' : gameMode === 'market' ? 'WHO HAD THE HIGHER PEAK VALUE?' : gameMode === 'age' ? 'WHO IS OLDER? (MAY/2026)' : 'WHO SCORED MORE INTERNATIONAL GOALS?';
  const headerSubtitle = gameMode === 'goals' ? 'World Cup 2026' : gameMode === 'market' ? 'Transfer Market' : gameMode === 'age' ? 'Age Guess' : 'All-Time Legends';
  const prefix = gameMode === 'market' ? '€' : '';
  const suffix = gameMode === 'market' ? 'M' : gameMode === 'age' ? ' years' : '';

  return (
    <div className="flex flex-col h-[100dvh] w-full relative z-20 overflow-hidden bg-brand-black">
      {/* Background effect based on status */}
      <AnimatePresence>
        {status === 'correct' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-green/20 z-30 pointer-events-none"
          />
        )}
        {status === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-red/40 z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* TOP HEADER */}
      <header className="flex justify-between items-center p-4 border-b-4 border-brand-white bg-zinc-900 z-40 relative">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">{gameMode === 'age' ? 'Age Guess' : 'World Cup 2026'}</span>
          <span className="font-anton text-xl uppercase tracking-tighter">
            {gameMode === 'goals' ? 'Who Scored More?' : gameMode === 'market' ? 'Higher Peak Value?' : gameMode === 'age' ? 'Who Is Older?' : 'More Intl Goals?'}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right leading-none">
            <span className="block text-[10px] uppercase font-bold opacity-60">Current Streak</span>
            <span className="font-anton text-3xl flex items-center gap-1 text-brand-green">
              {streak}
              <motion.span
                animate={status === 'correct' ? {
                  y: [0, -12, 4, -6, 0],
                  scale: [1, 1.4, 1],
                  filter: [
                    'drop-shadow(0px 0px 5px rgba(255, 165, 0, 0.5))',
                    'drop-shadow(0px 0px 20px rgba(255, 165, 0, 1))',
                    'drop-shadow(0px 0px 15px rgba(255, 165, 0, 0.8))',
                    'drop-shadow(0px 0px 5px rgba(255, 165, 0, 0.5))'
                  ]
                } : streak > 0 ? {
                  y: ["0%", "-15%", "0%"],
                  filter: 'drop-shadow(0px 0px 6px rgba(255, 165, 0, 0.6))',
                  scale: 1
                } : {
                  y: 0,
                  filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',
                  scale: 1
                }}
                transition={status === 'correct'
                  ? { duration: 0.8, ease: "easeOut" }
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xl inline-block"
              >
                🔥
              </motion.span>
            </span>
          </div>
          <button onClick={() => onEnd(streak, false)} className="brutal-border px-2 py-1 bg-brand-white text-black font-black text-sm uppercase skew-x-[-12deg] hover:bg-brand-red hover:text-white transition-colors cursor-pointer">
            <span className="block skew-x-[12deg] px-1">QUIT</span>
          </button>
        </div>
      </header>

      {/* TIMER BAR */}
      <div className="w-full h-1.5 bg-zinc-900 z-40 relative">
        {status === 'playing' && (
          <motion.div
            key={timerKey}
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 7, ease: "linear" }}
            onAnimationComplete={handleTimeOut}
            className="h-full bg-brand-green"
          />
        )}
      </div>

      {/* CENTER MATCHUP */}
      <main className="flex-1 flex flex-row relative z-10 w-full">
        {/* LEFT PLAYER */}
        <div className="w-1/2 h-full border-r-2 border-brand-white relative group overflow-hidden bg-zinc-900" style={{ backgroundColor: playerLeft.imageColor }}>
          <div className="absolute inset-0 opacity-50 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(https://flagcdn.com/w640/${playerLeft.countryCode.toLowerCase()}.png)` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-8 left-6 z-10 w-[calc(100%-2rem)]">
            <div className="flex flex-wrap gap-2 mb-2 items-center">
              <span className="block text-xs font-bold uppercase tracking-widest bg-white text-black px-2 py-0.5 inline-block">
                {playerLeft.country}
              </span>
              {playerLeft.club && (
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-700 text-brand-green px-2 py-0.5 inline-block shadow-sm">
                  {playerLeft.club}
                </span>
              )}
              {playerLeft.age && (
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-700 text-brand-green px-2 py-0.5 inline-block shadow-sm">
                  Age {playerLeft.age}
                </span>
              )}
            </div>
            <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.9] text-shadow-heavy break-words max-w-full text-balance">{playerLeft.name}</h2>
            <div className="mt-1">
              <div className="relative flex justify-start items-center">
                <AnimatePresence mode="popLayout">
                  {revealed ? (
                    <motion.div key="value" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className={`${status === 'incorrect' && selectedSide === 'left' ? 'text-brand-red' : status === 'correct' && selectedSide === 'right' ? 'text-white' : 'text-brand-green'} text-3xl md:text-4xl lg:text-5xl font-mono font-black italic leading-none`}>
                      {prefix}{playerLeft.value}{suffix}
                    </motion.div>
                  ) : (
                    <motion.div key="question" exit={{ opacity: 0, scale: 0.8 }} className="text-brand-green opacity-60 text-3xl md:text-4xl lg:text-5xl font-mono font-black italic leading-none">
                      ?
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <svg className="absolute top-20 right-10 w-24 h-24 opacity-40 text-white pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10,90 Q50,10 90,90" strokeDasharray="4 4" />
            <circle cx="90" cy="90" r="5" fill="currentColor" />
          </svg>
        </div>

        {/* RIGHT PLAYER */}
        <div className="w-1/2 h-full relative group overflow-hidden bg-zinc-800" style={{ backgroundColor: playerRight.imageColor }}>
          <div className="absolute inset-0 opacity-50 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(https://flagcdn.com/w640/${playerRight.countryCode.toLowerCase()}.png)` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-8 right-6 z-10 text-right w-[calc(100%-2rem)]">
            <div className="flex flex-wrap gap-2 justify-end mb-2 items-center">
              {playerRight.age && (
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-700 text-brand-green px-2 py-0.5 inline-block shadow-sm">
                  Age {playerRight.age}
                </span>
              )}
              {playerRight.club && (
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-700 text-brand-green px-2 py-0.5 inline-block shadow-sm">
                  {playerRight.club}
                </span>
              )}
              <span className="block text-xs font-bold uppercase tracking-widest bg-white text-black px-2 py-0.5 inline-block">
                {playerRight.country}
              </span>
            </div>
            <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.9] text-shadow-heavy break-words max-w-full text-balance">{playerRight.name}</h2>
            <div className="mt-1 flex flex-col items-end">
              <div className="relative flex justify-end items-center">
                <AnimatePresence mode="popLayout">
                  {revealed ? (
                    <motion.div key="value" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className={`${status === 'incorrect' && selectedSide === 'right' ? 'text-brand-red' : (status === 'incorrect' && selectedSide === 'left') || (status === 'correct' && selectedSide === 'right') ? 'text-brand-green' : 'text-white'} text-3xl md:text-4xl lg:text-5xl font-mono font-black italic leading-none`}>
                      {prefix}{playerRight.value}{suffix}
                    </motion.div>
                  ) : (
                    <motion.div key="question" exit={{ opacity: 0, scale: 0.8 }} className="text-white opacity-60 text-3xl md:text-4xl lg:text-5xl font-mono font-black italic leading-none">
                      ?
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>


        </div>
      </main>

      {/* QUESTION OVERLAY */}
      <div className="absolute top-[35%] left-0 w-full z-40 pointer-events-none px-6 md:px-12 flex justify-center">
        <div className="bg-brand-white text-black py-3 px-8 brutal-border shadow-2xl skew-y-[-2deg] max-w-full">
          <h3 className="font-anton text-2xl md:text-4xl text-center leading-none tracking-tighter">
            {title}
          </h3>
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <footer className="h-24 md:h-28 flex w-full border-t-4 border-brand-white z-40 bg-brand-black relative mt-auto shrink-0">
        <button
          disabled={status !== 'playing'}
          onClick={() => handleGuess('left')}
          className="w-1/2 bg-zinc-900 border-r-2 border-brand-white flex items-center justify-center cursor-pointer hover:bg-brand-green hover:text-black focus:bg-brand-green transition-colors group disabled:opacity-50 disabled:hover:bg-zinc-900 disabled:hover:text-white px-2"
        >
          <div className="text-center w-full min-w-0">
            <span className="block font-anton text-2xl md:text-3xl uppercase group-hover:scale-105 transition-transform truncate w-full">{playerLeft.name.split(' ').pop()}</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase opacity-60 mt-1 block">Tap Left</span>
          </div>
        </button>
        <button
          disabled={status !== 'playing'}
          onClick={() => handleGuess('right')}
          className="w-1/2 bg-zinc-900 flex items-center justify-center cursor-pointer hover:bg-brand-green hover:text-black focus:bg-brand-green transition-colors group disabled:opacity-50 disabled:hover:bg-zinc-900 disabled:hover:text-white px-2"
        >
          <div className="text-center w-full min-w-0">
            <span className="block font-anton text-2xl md:text-3xl uppercase group-hover:scale-105 transition-transform truncate w-full">{playerRight.name.split(' ').pop()}</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase opacity-60 mt-1 block">Tap Right</span>
          </div>
        </button>
      </footer>


    </div>
  );
}
