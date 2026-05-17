import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Home from './components/Home';
import Game from './components/Game';
import Result from './components/Result';
import Leaderboard from './components/Leaderboard';
import { unlockAndPlayAudio } from './audio';

export type GameModeType = 'goals' | 'market' | 'intlGoals' | 'age';
export type Screen = 'home' | 'game' | 'result' | 'leaderboard';

export default function App() {
  useEffect(() => {
    const handleInteraction = () => {
      unlockAndPlayAudio();
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('touchend', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('touchend', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [gameMode, setGameMode] = useState<GameModeType>('goals');
  const [score, setScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [attemptsGoals, setAttemptsGoals] = useState(() => {
    const saved = localStorage.getItem('football_high_low_attempts');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [highScoreGoals, setHighScoreGoals] = useState(() => {
    const saved = localStorage.getItem('football_highest_score');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [attemptsMarket, setAttemptsMarket] = useState(() => {
    const saved = localStorage.getItem('football_high_low_attempts_market');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [highScoreMarket, setHighScoreMarket] = useState(() => {
    const saved = localStorage.getItem('football_highest_score_market');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [attemptsIntlGoals, setAttemptsIntlGoals] = useState(() => {
    const saved = localStorage.getItem('football_high_low_attempts_intl');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [highScoreIntlGoals, setHighScoreIntlGoals] = useState(() => {
    const saved = localStorage.getItem('football_highest_score_intl');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [attemptsAge, setAttemptsAge] = useState(() => {
    const saved = localStorage.getItem('football_high_low_attempts_age');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [highScoreAge, setHighScoreAge] = useState(() => {
    const saved = localStorage.getItem('football_highest_score_age');
    return saved ? parseInt(saved, 10) : 0;
  });

  const attempts = gameMode === 'goals' ? attemptsGoals : gameMode === 'market' ? attemptsMarket : gameMode === 'intlGoals' ? attemptsIntlGoals : attemptsAge;
  const highScore = gameMode === 'goals' ? highScoreGoals : gameMode === 'market' ? highScoreMarket : gameMode === 'intlGoals' ? highScoreIntlGoals : highScoreAge;

  const startGame = (mode: GameModeType = 'goals') => {
    setGameMode(mode);
    setScore(0);
    setHasWon(false);
    setCurrentScreen('game');
  };

  const endGame = (finalScore: number, won: boolean) => {
    if (gameMode === 'goals') {
      const newAttempts = attemptsGoals + 1;
      setAttemptsGoals(newAttempts);
      localStorage.setItem('football_high_low_attempts', newAttempts.toString());
      if (finalScore > highScoreGoals) {
        setHighScoreGoals(finalScore);
        localStorage.setItem('football_highest_score', finalScore.toString());
      }
    } else if (gameMode === 'market') {
      const newAttempts = attemptsMarket + 1;
      setAttemptsMarket(newAttempts);
      localStorage.setItem('football_high_low_attempts_market', newAttempts.toString());
      if (finalScore > highScoreMarket) {
        setHighScoreMarket(finalScore);
        localStorage.setItem('football_highest_score_market', finalScore.toString());
      }
    } else if (gameMode === 'intlGoals') {
      const newAttempts = attemptsIntlGoals + 1;
      setAttemptsIntlGoals(newAttempts);
      localStorage.setItem('football_high_low_attempts_intl', newAttempts.toString());
      if (finalScore > highScoreIntlGoals) {
        setHighScoreIntlGoals(finalScore);
        localStorage.setItem('football_highest_score_intl', finalScore.toString());
      }
    } else {
      const newAttempts = attemptsAge + 1;
      setAttemptsAge(newAttempts);
      localStorage.setItem('football_high_low_attempts_age', newAttempts.toString());
      if (finalScore > highScoreAge) {
        setHighScoreAge(finalScore);
        localStorage.setItem('football_highest_score_age', finalScore.toString());
      }
    }
    
    setScore(finalScore);
    setHasWon(won);
    setCurrentScreen('result');
  };

  return (
    <div className="flex flex-col h-[100dvh] items-center justify-center p-4">
      <div className="bg-noise" />
      <div className="w-full max-w-4xl h-full flex flex-col relative overflow-hidden bg-zinc-950 brutal-border">
        <AnimatePresence mode="wait">
          {/* @ts-expect-error */}
          {currentScreen === 'home' && <Home key="home" onStart={startGame} onLeaderboard={() => setCurrentScreen('leaderboard')} />}
          {/* @ts-expect-error */}
          {currentScreen === 'game' && <Game key="game" gameMode={gameMode} onEnd={endGame} />}
          {/* @ts-expect-error */}
          {currentScreen === 'result' && <Result key="result" gameMode={gameMode} score={score} highScore={highScore} hasWon={hasWon} attempts={attempts} onPlayAgain={() => startGame(gameMode)} onHome={() => setCurrentScreen('home')} />}
          {/* @ts-expect-error */}
          {currentScreen === 'leaderboard' && <Leaderboard key="leaderboard" onBack={() => setCurrentScreen('home')} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
