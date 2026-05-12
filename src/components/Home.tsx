import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Trophy, ChevronRight, BarChart2 } from 'lucide-react';
import { GameModeType } from '../App';

interface HomeProps {
  onStart: (mode: GameModeType) => void;
  onLeaderboard: () => void;
}

const slides = [
  {
    mode: 'goals' as GameModeType,
    title1: 'WHO SCORED',
    titleAccent: 'MORE',
    title2: 'GOALS?',
    subtitle: 'World Cup Edition'
  },
  {
    mode: 'intlGoals' as GameModeType,
    title1: 'INTERNATIONAL',
    titleAccent: 'CAREER',
    title2: 'GOALS?',
    subtitle: 'All-Time Legends'
  },
  {
    mode: 'market' as GameModeType,
    title1: 'WHO HAD A',
    titleAccent: 'HIGHER',
    title2: 'PEAK VALUE?',
    subtitle: 'Transfer Market'
  },
  {
    mode: 'age' as GameModeType,
    title1: 'WHO IS',
    titleAccent: 'OLDER?',
    title2: 'AGE GUESS',
    subtitle: 'Current & Legends'
  }
];

export default function Home({ onStart, onLeaderboard }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden bg-zinc-950 hide-scrollbar"
    >
      {/* MAG HEADER */}
      <header className="flex justify-center items-center p-4 md:p-6 border-b-4 border-brand-white bg-zinc-900 border-t-4 md:border-t-0 mt-0 w-full">
        <img
          src="/assets/knowsball.png"
          alt="Knows Ball"
          className="h-12 md:h-16 object-contain brightness-0 invert"
        />
      </header>

      {/* MAG COVER HERO */}
      <section className="relative w-full border-b-4 border-brand-white overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900"></div>
        <div
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-[url('/assets/trophy.png')] bg-contain bg-right bg-no-repeat opacity-40 mix-blend-screen"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>

        <div className="relative p-6 pt-12 pb-12 md:pt-16 md:pb-14 flex flex-col items-center text-center z-10 w-full">
          <div className="w-full relative min-h-[220px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[340px] flex items-center justify-center -mt-4 mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full absolute"
              >
                <h2 className="font-anton text-5xl md:text-7xl lg:text-[7rem] uppercase leading-[0.85] tracking-tighter text-brand-white">
                  {slide.title1} <br />
                  <span className="text-brand-green italic text-4xl md:text-6xl lg:text-[6rem] relative z-10">{slide.titleAccent}</span><br />
                  {slide.title2}
                </h2>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <span className="h-0.5 w-12 bg-brand-white"></span>
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-brand-white/80">
                    {slide.subtitle}
                  </p>
                  <span className="h-0.5 w-12 bg-brand-white"></span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full max-w-sm mt-4 flex flex-col gap-3 relative z-20">
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
              className="w-full bg-brand-green text-brand-black font-anton text-3xl md:text-4xl uppercase py-4 flex items-center justify-center gap-3 border-4 border-brand-white shadow-[8px_8px_0px_0px_#f4f1ea] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#f4f1ea] transition-all"
            >
              <Play fill="currentColor" size={28} />
              PLAY NOW
            </motion.button>

            <motion.button
              onClick={onLeaderboard}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-zinc-900 text-brand-white font-anton text-xl uppercase py-4 flex items-center justify-center gap-3 border-4 border-zinc-700 hover:border-brand-white hover:bg-brand-white hover:text-black transition-all"
            >
              <Trophy size={20} />
              LEADERBOARD
            </motion.button>
          </div>
        </div>
      </section>

      {/* ARCHIVE/ARTICLES GRID */}
      <section className="p-6 bg-brand-black">
        <div className="flex justify-between items-end mb-6 border-b-2 border-zinc-800 pb-2">
          <h3 className="font-anton text-2xl uppercase tracking-widest text-brand-white">Game Modes</h3>
          <span className="font-mono text-xs text-brand-green/80 flex items-center gap-1 cursor-pointer hover:text-brand-green">
            VIEW ALL <ChevronRight size={14} />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
          {/* Mode 1 */}
          <div onClick={() => onStart('goals')} className="group relative border-2 border-zinc-800 bg-zinc-900 p-4 hover:border-brand-green transition-colors cursor-pointer overflow-hidden flex flex-col h-40 justify-end">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute top-4 right-4 bg-brand-green w-2 h-2 rounded-full animate-pulse"></div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase text-brand-green tracking-widest block mb-1">Active Database</span>
              <h4 className="font-anton text-3xl uppercase leading-none text-brand-white">WC GOALS</h4>
            </div>
          </div>

          {/* Mode 2 */}
          <div onClick={() => onStart('market')} className="group relative border-2 border-zinc-800 bg-zinc-900 p-4 hover:border-brand-green transition-colors cursor-pointer overflow-hidden flex flex-col h-40 justify-end">
            <div className="absolute inset-0 bg-[url('/assets/whos_higher_value.jpeg')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute top-4 right-4 bg-brand-green w-2 h-2 rounded-full animate-pulse"></div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase text-brand-green tracking-widest block mb-1">New // Vol. 2</span>
              <h4 className="font-anton text-2xl uppercase leading-none text-brand-white">PEAK VALUE <span className="text-sm">(ALL-TIME)</span></h4>
            </div>
          </div>

          {/* Mode 3 */}
          <div onClick={() => onStart('intlGoals')} className="group relative border-2 border-zinc-800 bg-zinc-900 p-4 hover:border-brand-green transition-colors cursor-pointer overflow-hidden flex flex-col h-40 justify-end md:col-span-2">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"></div>
            <div className="absolute top-4 right-4 bg-brand-green w-2 h-2 rounded-full animate-pulse"></div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase text-brand-green tracking-widest block mb-1">New // Vol. 3</span>
              <h4 className="font-anton text-2xl uppercase leading-none text-brand-white transition-colors">INTL GOALS <span className="text-sm">(ALL-TIME)</span></h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer text */}
      <div className="p-6 text-center border-t border-zinc-800 text-zinc-600 text-xs font-mono uppercase">
        © 2026 KnowsBall by Studio147 <br className="md:hidden" /> ALL RIGHTS RESERVED.
      </div>
    </motion.div>
  );
}
