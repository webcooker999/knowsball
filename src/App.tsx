import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Home from './components/Home';
import Game from './components/Game';
import Result from './components/Result';
import Leaderboard from './components/Leaderboard';
import StartingXI from './components/StartingXI';
import WhoAmI from './components/WhoAmI';
import { unlockAndPlayAudio } from './audio';

export type GameModeType = 'goals' | 'market' | 'intlGoals' | 'age' | 'startingXI' | 'startingXIClassic' | 'whoAmI';
export type Screen = 'home' | 'game' | 'result' | 'leaderboard';

const getLocalDateString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

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
  
  const [isDev, setIsDev] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const devParam = params.get('dev');
    if (devParam === 'true') {
      localStorage.setItem('knowsball_dev_mode', 'true');
      return true;
    } else if (devParam === 'false') {
      localStorage.removeItem('knowsball_dev_mode');
      return false;
    }
    return localStorage.getItem('knowsball_dev_mode') === 'true';
  });
  
  // Daily local storage lives tracking (resets at 00:00 midnight local time)
  const [lives, setLives] = useState(() => {
    const today = getLocalDateString();
    const lastReset = localStorage.getItem('knowsball_last_reset_date');
    const savedLives = localStorage.getItem('knowsball_lives');
    
    if (lastReset !== today) {
      localStorage.setItem('knowsball_last_reset_date', today);
      localStorage.setItem('knowsball_lives', '10');
      return 10;
    }
    
    return savedLives ? parseInt(savedLives, 10) : 10;
  });

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
  const [attemptsStartingXI, setAttemptsStartingXI] = useState(() => {
    const saved = localStorage.getItem('football_high_low_attempts_startingxi');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [highScoreStartingXI, setHighScoreStartingXI] = useState(() => {
    const saved = localStorage.getItem('football_highest_score_startingxi');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [attemptsStartingXIClassic, setAttemptsStartingXIClassic] = useState(() => {
    const saved = localStorage.getItem('football_high_low_attempts_startingxiclassic');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [highScoreStartingXIClassic, setHighScoreStartingXIClassic] = useState(() => {
    const saved = localStorage.getItem('football_highest_score_startingxiclassic');
    return saved ? parseInt(saved, 10) : 0;
  });

  const attempts = 
    gameMode === 'goals' ? attemptsGoals : 
    gameMode === 'market' ? attemptsMarket : 
    gameMode === 'intlGoals' ? attemptsIntlGoals : 
    gameMode === 'age' ? attemptsAge : 
    gameMode === 'startingXI' ? attemptsStartingXI :
    attemptsStartingXIClassic;

  const highScore = 
    gameMode === 'goals' ? highScoreGoals : 
    gameMode === 'market' ? highScoreMarket : 
    gameMode === 'intlGoals' ? highScoreIntlGoals : 
    gameMode === 'age' ? highScoreAge : 
    gameMode === 'startingXI' ? highScoreStartingXI :
    highScoreStartingXIClassic;

  const deductLife = () => {
    if (!isDev) {
      setLives((prev) => {
        const nextLives = Math.max(0, prev - 1);
        localStorage.setItem('knowsball_lives', nextLives.toString());
        return nextLives;
      });
    }
  };

  const startGame = (mode: GameModeType = 'goals') => {
    // Deduct 1 life immediately when game begins!
    if (!isDev && mode !== 'whoAmI') {
      setLives((prev) => {
        const nextLives = Math.max(0, prev - 1);
        localStorage.setItem('knowsball_lives', nextLives.toString());
        return nextLives;
      });
    }

    setGameMode(mode);
    setScore(0);
    setHasWon(false);
    setCurrentScreen('game');
  };

  const endGame = (finalScore: number, won: boolean) => {
    if ((gameMode === 'startingXI' || gameMode === 'startingXIClassic') && won) {
      // Refund the life for winning!
      setLives((prev) => {
        const nextLives = Math.min(10, prev + 1);
        localStorage.setItem('knowsball_lives', nextLives.toString());
        return nextLives;
      });
    }

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
    } else if (gameMode === 'startingXI' || gameMode === 'startingXIClassic') {
      const isClassic = gameMode === 'startingXIClassic';
      const newAttempts = (isClassic ? attemptsStartingXIClassic : attemptsStartingXI) + 1;
      if (isClassic) {
        setAttemptsStartingXIClassic(newAttempts);
        localStorage.setItem('football_high_low_attempts_startingxiclassic', newAttempts.toString());
        if (finalScore > highScoreStartingXIClassic) {
          setHighScoreStartingXIClassic(finalScore);
          localStorage.setItem('football_highest_score_startingxiclassic', finalScore.toString());
        }
      } else {
        setAttemptsStartingXI(newAttempts);
        localStorage.setItem('football_high_low_attempts_startingxi', newAttempts.toString());
        if (finalScore > highScoreStartingXI) {
          setHighScoreStartingXI(finalScore);
          localStorage.setItem('football_highest_score_startingxi', finalScore.toString());
        }
      }
      setScore(finalScore);
      setHasWon(won);
      // Stay on game screen to display historical names in StartingXI results
      return;
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
          {currentScreen === 'home' && <Home key="home" onStart={startGame} onLeaderboard={() => setCurrentScreen('leaderboard')} lives={lives} isDev={isDev} />}
          {currentScreen === 'game' && (gameMode === 'startingXI' || gameMode === 'startingXIClassic') && (
            <StartingXI 
              key={gameMode} 
              mode={gameMode === 'startingXIClassic' ? 'classic' : 'worldcup'} 
              onEnd={endGame} 
              onHome={() => setCurrentScreen('home')} 
            />
          )}
          {currentScreen === 'game' && gameMode === 'whoAmI' && (
            <WhoAmI
              onDeductLife={deductLife}
              onHome={() => setCurrentScreen('home')}
              isDev={isDev}
              lives={lives}
            />
          )}
          {/* @ts-expect-error */}
          {currentScreen === 'game' && gameMode !== 'startingXI' && gameMode !== 'startingXIClassic' && gameMode !== 'whoAmI' && <Game key="game" gameMode={gameMode} onEnd={endGame} />}
          {/* @ts-expect-error */}
          {currentScreen === 'result' && <Result key="result" gameMode={gameMode} score={score} highScore={highScore} hasWon={hasWon} attempts={attempts} onPlayAgain={() => startGame(gameMode)} onHome={() => setCurrentScreen('home')} />}
          {/* @ts-expect-error */}
          {currentScreen === 'leaderboard' && <Leaderboard key="leaderboard" onBack={() => setCurrentScreen('home')} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
