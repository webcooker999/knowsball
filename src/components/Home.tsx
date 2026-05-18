import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Trophy, Volume2, VolumeX, Lock, TrendingUp } from 'lucide-react';
import { GameModeType } from '../App';
import { bgMusic } from '../audio';
import BettingHub from './BettingHub';

interface HomeProps {
  onStart: (mode: GameModeType) => void;
  onLeaderboard: () => void;
}

const slides = [
  {
    mode: 'goals' as GameModeType,
    title1: 'WHO SCORED',
    titleAccent: 'MORE',
    title2: 'WORLD CUP GOALS?',
    subtitle: 'THE ULTIMATE HERITAGE CHECK',
    bg: 'bg-zinc-900'
  },
  {
    mode: 'intlGoals' as GameModeType,
    title1: 'WHO HAS MORE',
    titleAccent: 'INTERNATIONAL',
    title2: 'GOALS?',
    subtitle: 'COMPARE THE GREATEST OF ALL TIME',
    bg: 'bg-zinc-900'
  },
  {
    mode: 'market' as GameModeType,
    title1: 'WHO HAS HIGHER',
    titleAccent: 'MARKET',
    title2: 'VALUE?',
    subtitle: 'BALLKNOWLEDGE ECONOMICS 101',
    bg: 'bg-zinc-900'
  },
  {
    mode: 'age' as GameModeType,
    title1: 'WHO IS',
    titleAccent: 'OLDER',
    title2: 'IN AGE?',
    subtitle: 'GUESS THE VETERANS & WUNDERKINDERS',
    bg: 'bg-zinc-900'
  }
];

interface GameModeItem {
  id: string;
  mode?: GameModeType;
  title: string;
  subtitle: string;
  tag: string;
  category: 'worldcup' | 'classic';
  image: string;
  isActive: boolean;
  dbInfo?: string;
}

const GAME_MODES: GameModeItem[] = [
  // World Cup Category
  {
    id: 'wc-goals',
    mode: 'goals',
    title: 'WC GOALS',
    subtitle: 'Who scored more World Cup goals?',
    tag: 'Active // Vol. 1',
    category: 'worldcup',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600',
    isActive: true,
    dbInfo: '400+ WC legends'
  },
  {
    id: 'starting-xi',
    mode: 'startingXI',
    title: 'STARTING XI',
    subtitle: 'Recreate historic World Cup lineups',
    tag: 'Active // Vol. 1',
    category: 'worldcup',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600',
    isActive: true,
    dbInfo: '100 Iconic Squads'
  },
  {
    id: 'wc-assists',
    title: 'WC ASSISTS',
    subtitle: 'Top playmakers in tournament stages',
    tag: 'Coming Soon',
    category: 'worldcup',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=600',
    isActive: false
  },
  {
    id: 'wc-trophies',
    title: 'WC TITLES',
    subtitle: 'Players with the most WC trophies',
    tag: 'Coming Soon',
    category: 'worldcup',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=600',
    isActive: false
  },

  // Classic Category
  {
    id: 'intl-goals',
    mode: 'intlGoals',
    title: 'INTL GOALS',
    subtitle: 'All-time international top scorers',
    tag: 'Active // Vol. 3',
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600',
    isActive: true,
    dbInfo: 'Legends pool'
  },
  {
    id: 'peak-value',
    mode: 'market',
    title: 'PEAK VALUE',
    subtitle: 'Who has higher peak transfer value?',
    tag: 'Active // Vol. 2',
    category: 'classic',
    image: '/assets/whos_higher_value.jpeg',
    isActive: true,
    dbInfo: '2004 - 2026 stats'
  },
  {
    id: 'age-guess',
    mode: 'age',
    title: 'AGE GUESS',
    subtitle: 'Compare player ages in real-time',
    tag: 'Active // Vol. 4',
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1511886929837-399a8a11bdca?auto=format&fit=crop&q=80&w=600',
    isActive: true,
    dbInfo: 'Veterans & Wunderkinds'
  },
  {
    id: 'career-titles',
    title: 'SILVERWARE',
    subtitle: 'Who collected more career trophies?',
    tag: 'Coming Soon',
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=600',
    isActive: false
  }
];

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

export default function Home({ onStart, onLeaderboard }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(() => bgMusic.muted);
  const [activeCategory, setActiveCategory] = useState<'worldcup' | 'classic' | 'betting'>('worldcup');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !bgMusic.muted;
    bgMusic.muted = newMuted;
    localStorage.setItem('knowsball_music_muted', newMuted.toString());
    setIsMuted(newMuted);
  };

  const slide = slides[currentSlide];
  const filteredModes = GAME_MODES.filter(item => item.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden bg-zinc-950 hide-scrollbar flex flex-col justify-between"
    >
      <div>
        {/* MAG HEADER */}
        <header className="relative flex justify-center items-center p-4 border-b-4 border-brand-white bg-zinc-900 border-t-4 md:border-t-0 mt-0 w-full shrink-0">
          <img
            src="/assets/knowsball.png"
            alt="Knows Ball"
            className="h-10 sm:h-12 md:h-16 object-contain brightness-0 invert"
          />
          <button
            onClick={toggleMute}
            className="absolute right-4 md:right-6 p-2 rounded-full border-2 border-brand-white bg-zinc-950 text-brand-white hover:bg-brand-white hover:text-zinc-950 transition-all cursor-pointer flex items-center justify-center shadow-[4px_4px_0px_0px_#f4f1ea] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#f4f1ea]"
            aria-label="Toggle Music"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </header>

        {/* MAG COVER HERO */}
        <section className="relative w-full border-b-4 border-brand-white overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-zinc-900"></div>
          <div
            className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-[url('/assets/trophy.png')] bg-contain bg-right bg-no-repeat opacity-40 mix-blend-screen"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>

          <div className="relative p-4 sm:p-6 pt-6 pb-6 xs:pt-8 xs:pb-8 md:pt-12 md:pb-10 flex flex-col items-center text-center z-10 w-full">
            <div className="w-full relative min-h-[150px] xs:min-h-[175px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] flex items-center justify-center mt-0 mb-2 sm:mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full absolute"
                >
                  <h2 className="font-anton text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] uppercase leading-[0.85] tracking-tighter text-brand-white">
                    {slide.title1} <br />
                    <span className="text-brand-green italic text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] relative z-10">{slide.titleAccent}</span><br />
                    {slide.title2}
                  </h2>
                  <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 sm:gap-4">
                    <span className="h-0.5 w-8 sm:w-12 bg-brand-white"></span>
                    <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-brand-white/80">
                      {slide.subtitle}
                    </p>
                    <span className="h-0.5 w-8 sm:w-12 bg-brand-white"></span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm mt-2 sm:mt-4 flex flex-col gap-2.5 sm:gap-3 relative z-20">
              <div className="flex justify-center items-center gap-3 mb-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-brand-green' : 'w-2 bg-brand-white/30 hover:bg-brand-white/50'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onStart(slide.mode)}
                className="w-full bg-brand-green text-brand-black font-anton text-2xl sm:text-3xl md:text-4xl uppercase py-3 sm:py-4 flex items-center justify-center gap-3 border-4 border-brand-white shadow-[6px_6px_0px_0px_#f4f1ea] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#f4f1ea] transition-all cursor-pointer"
              >
                <Play fill="currentColor" size={24} className="sm:w-[28px] sm:h-[28px]" />
                PLAY NOW
              </motion.button>

              <motion.button
                onClick={onLeaderboard}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-zinc-900 text-brand-white font-anton text-lg sm:text-xl uppercase py-3 sm:py-4 flex items-center justify-center gap-3 border-4 border-zinc-700 hover:border-brand-white hover:bg-brand-white hover:text-black transition-all cursor-pointer"
              >
                <Trophy size={18} className="sm:w-[20px] sm:h-[20px]" />
                LEADERBOARD
              </motion.button>
            </div>
          </div>
        </section>

        {/* CATEGORIZED GAMES SECTION */}
        <section className="p-4 sm:p-6 bg-brand-black flex flex-col">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-5 border-b-2 border-zinc-800 pb-2 shrink-0">
            <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-widest text-brand-white">SELECT ARENA</h3>
            <span className="font-mono text-[10px] sm:text-xs text-brand-green/80 uppercase">
              Categorized Modes
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-6 bg-zinc-900/80 p-1 brutal-border border-brand-white rounded-lg shrink-0">
            <motion.button
              onClick={() => setActiveCategory('worldcup')}
              animate={activeCategory === 'worldcup' ? {
                boxShadow: [
                  '0 0 10px rgba(255, 184, 0, 0.4), 2px 2px 0px 0px #f4f1ea',
                  '0 0 25px rgba(255, 184, 0, 0.8), 2px 2px 0px 0px #f4f1ea',
                  '0 0 10px rgba(255, 184, 0, 0.4), 2px 2px 0px 0px #f4f1ea'
                ]
              } : {
                boxShadow: 'none'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut'
                }
              }}
              className={`flex-1 py-2.5 px-3 text-center font-anton text-base sm:text-lg uppercase transition-all duration-300 rounded-md cursor-pointer flex items-center justify-center gap-2 border-2 ${
                activeCategory === 'worldcup'
                  ? 'bg-brand-gold text-brand-black border-brand-white'
                  : 'border-transparent text-zinc-400 hover:text-brand-white hover:bg-zinc-800'
              }`}
            >
              <Trophy size={16} />
              WORLD CUP
            </motion.button>
            <motion.button
              onClick={() => setActiveCategory('classic')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 py-2.5 px-3 text-center font-anton text-base sm:text-lg uppercase transition-all duration-300 rounded-md cursor-pointer flex items-center justify-center gap-2 border-2 ${
                activeCategory === 'classic'
                  ? 'bg-brand-green text-brand-black border-brand-white shadow-[2px_2px_0px_0px_#f4f1ea]'
                  : 'border-transparent text-zinc-400 hover:text-brand-white hover:bg-zinc-800'
              }`}
            >
              <SoccerBall size={16} />
              CLASSIC
            </motion.button>
            <motion.button
              onClick={() => setActiveCategory('betting')}
              animate={activeCategory === 'betting' ? {
                boxShadow: [
                  '0 0 10px rgba(255, 184, 0, 0.4), 2px 2px 0px 0px #f4f1ea',
                  '0 0 25px rgba(255, 184, 0, 0.8), 2px 2px 0px 0px #f4f1ea',
                  '0 0 10px rgba(255, 184, 0, 0.4), 2px 2px 0px 0px #f4f1ea'
                ]
              } : {
                boxShadow: 'none'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut'
                }
              }}
              className={`flex-1 py-2.5 px-3 text-center font-anton text-base sm:text-lg uppercase transition-all duration-300 rounded-md cursor-pointer flex items-center justify-center gap-2 border-2 ${
                activeCategory === 'betting'
                  ? 'bg-brand-gold text-brand-black border-brand-white shadow-[2px_2px_0px_0px_#f4f1ea]'
                  : 'border-transparent text-zinc-400 hover:text-brand-white hover:bg-zinc-800'
              }`}
            >
              <TrendingUp size={16} />
              BETTING
            </motion.button>
          </div>

          {/* Content Area Switcher */}
          {activeCategory === 'betting' ? (
            <BettingHub />
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 pb-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredModes.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => item.isActive && item.mode && onStart(item.mode)}
                    className={`group relative aspect-square w-full border-2 brutal-border ${
                      item.isActive 
                        ? 'border-zinc-800 hover:border-brand-green bg-zinc-900 cursor-pointer' 
                        : 'border-zinc-800 bg-zinc-900/50 cursor-not-allowed opacity-60'
                    } p-3 sm:p-4 transition-all overflow-hidden flex flex-col justify-between rounded-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]`}
                  >
                    {/* Background Image with opacity */}
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>

                    {/* Card Top: Badges and Icons */}
                    <div className="relative z-10 flex justify-between items-start w-full">
                      <span className={`text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 border ${
                        item.isActive 
                          ? 'text-brand-green border-brand-green/30 bg-brand-green/5' 
                          : 'text-zinc-500 border-zinc-700 bg-zinc-800/30'
                      }`}>
                        {item.tag}
                      </span>
                      {!item.isActive && (
                        <Lock size={12} className="text-zinc-500" />
                      )}
                    </div>

                    {/* Card Bottom: Text and play indicator */}
                    <div className="relative z-10 w-full mt-auto text-left">
                      <h4 className="font-anton text-lg sm:text-xl md:text-2xl uppercase leading-none text-brand-white group-hover:text-brand-green transition-colors break-words text-balance">
                        {item.title}
                      </h4>
                      <p className="font-mono text-[8px] sm:text-[9px] text-zinc-400 mt-1 leading-tight group-hover:text-zinc-300 transition-colors line-clamp-2">
                        {item.subtitle}
                      </p>
                      {item.isActive && item.dbInfo && (
                        <span className="text-[8px] font-mono text-brand-green/70 block mt-1 tracking-wider">
                          {item.dbInfo}
                        </span>
                      )}
                    </div>

                    {/* Play hover overlay micro-animation */}
                    {item.isActive && (
                      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-brand-green text-brand-black p-1 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                        <Play fill="currentColor" size={10} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </section>
      </div>

      {/* Footer text */}
      <footer className="p-4 text-center border-t border-zinc-900 bg-zinc-950 text-zinc-600 text-[10px] sm:text-xs font-mono uppercase shrink-0">
        © 2026 KnowsBall by Studio147 <br className="md:hidden" /> ALL RIGHTS RESERVED.
      </footer>
    </motion.div>
  );
}
