import { motion } from 'motion/react';
import { ArrowLeft, Trophy, Medal, Star, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LeaderboardProps {
  onBack: () => void;
}

interface LeaderboardEntry {
  id: number;
  name: string;
  score: number;
  date: string;
  suffix?: string;
}

const generateLeaderboard = (): LeaderboardEntry[] => {
  // 10 scores between 90 and 120
  const scores = Array.from({ length: 10 }, () => Math.floor(Math.random() * 31) + 90).sort((a, b) => b - a);

  return scores.map((score, index) => {
    const randomMinutes = Math.floor(Math.random() * (720 - 30 + 1)) + 30;
    let dateStr = '';
    if (randomMinutes < 60) {
      dateStr = `${randomMinutes} MINUTES AGO`;
    } else {
      const hours = Math.floor(randomMinutes / 60);
      dateStr = `${hours} HOUR${hours > 1 ? 'S' : ''} AGO`;
    }

    return {
      id: index + 1,
      name: `@user${Math.floor(10000000 + Math.random() * 90000000)}`,
      score,
      date: dateStr,
      suffix: index === 0 ? '🏆 BEST OF THE DAY' : undefined
    };
  });
};

export default function Leaderboard({ onBack }: LeaderboardProps) {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>(() => {
    const todayStr = new Date().toDateString();
    const stored = localStorage.getItem('knowsball_leaderboard_v2');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.date === todayStr && parsed.data && parsed.data.length === 10) {
          return parsed.data;
        }
      } catch (e) {
        console.error('Failed to parse leaderboard data', e);
      }
    }
    const newData = generateLeaderboard();
    localStorage.setItem('knowsball_leaderboard_v2', JSON.stringify({ date: todayStr, data: newData }));
    return newData;
  });

  const [timeLeft, setTimeLeft] = useState<string>('--:--:--');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setHours(0, 0, 0, 0);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const diffMs = tomorrow.getTime() - now.getTime();
      
      if (diffMs <= 0) {
        const newData = generateLeaderboard();
        const todayStr = new Date().toDateString();
        localStorage.setItem('knowsball_leaderboard_v2', JSON.stringify({ date: todayStr, data: newData }));
        setLeaderboardData(newData);
      } else {
        const h = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diffMs / 1000 / 60) % 60);
        const s = Math.floor((diffMs / 1000) % 60);
        setTimeLeft(
          `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
        );
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 50 }}
      className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden bg-zinc-950 hide-scrollbar flex flex-col"
    >
      <div className="bg-noise" />
      
      {/* MAG HEADER */}
      <header className="flex justify-between items-center p-4 border-b-4 border-zinc-800 bg-zinc-900 sticky top-0 z-30">
        <button 
          onClick={onBack}
          className="p-2 border-2 border-zinc-700 bg-zinc-800 hover:bg-brand-white hover:text-black transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <span className="font-anton text-2xl uppercase text-brand-white tracking-widest flex items-center gap-2">
          <Trophy size={20} className="text-brand-green" /> 
          WALL OF FAME
        </span>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>
      
      <div className="p-6 flex-1 max-w-full relative z-10 w-full flex flex-col items-center">
        <div className="w-full max-w-lg">
          
          <div className="mb-6 border-l-4 border-brand-green pl-4 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <h3 className="font-anton text-4xl uppercase leading-none text-brand-white mb-2">
                BEST OF <span className="text-brand-green italic">THE DAY</span>
              </h3>
              <p className="font-mono text-xs tracking-widest text-brand-white/60 uppercase">
                Global Daily High Scores
              </p>
            </div>
            
            <div className="flex flex-col items-start sm:items-end bg-zinc-900/80 p-2 sm:p-3 border-2 border-zinc-800 rounded-lg">
              <span className="font-mono text-[10px] text-zinc-400 uppercase flex items-center gap-1.5 mb-1">
                 <Clock size={12} className="text-brand-green" /> RESETS IN
              </span>
              <span className="font-mono text-lg tracking-widest text-brand-white font-bold leading-none">
                 {timeLeft}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {leaderboardData.map((entry, index) => {
              const isFirst = index === 0;
              const isTop3 = index < 3;
              
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={entry.id}
                  className={`flex items-center justify-between p-4 border-2 transition-all ${
                    isFirst 
                      ? 'border-brand-green bg-brand-green/10' 
                      : isTop3 
                        ? 'border-zinc-700 bg-zinc-800/50' 
                        : 'border-zinc-800 bg-zinc-900/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-anton text-2xl w-8 text-center ${
                      isFirst ? 'text-brand-green' : isTop3 ? 'text-brand-white' : 'text-zinc-600'
                    }`}>
                      {index + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className={`font-anton uppercase text-xl md:text-2xl leading-none flex items-center gap-2 ${
                        isFirst ? 'text-brand-white' : 'text-zinc-400'
                      }`}>
                        {entry.name}
                        {isFirst && <Medal size={16} className="text-brand-green" />}
                      </span>
                      <span className="font-mono flex flex-col md:flex-row md:items-center text-[10px] tracking-wider text-zinc-500 mt-1 uppercase">
                        {entry.date} {entry.suffix && <span className="text-brand-green font-bold md:ml-1">{entry.suffix}</span>}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`font-anton text-4xl leading-none ${
                      isFirst ? 'text-brand-green' : 'text-brand-white'
                    }`}>
                      {entry.score}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">PTS</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 border-2 border-zinc-800 border-dashed p-6 flex flex-col items-center justify-center text-center bg-zinc-900/50">
            <Star size={24} className="text-zinc-600 mb-2" />
            <h4 className="font-anton text-xl uppercase text-zinc-400 mb-1">NOT IN THE TOP 10?</h4>
            <p className="font-mono text-xs text-zinc-500 max-w-xs">
              Not appearing here? Keep playing and try to reach the top. Top scores reset daily.
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
