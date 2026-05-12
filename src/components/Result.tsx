import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCcw, Share, Home, Check } from 'lucide-react';
import { GameModeType } from '../App';

interface ResultProps {
  gameMode: GameModeType;
  score: number;
  highScore: number;
  attempts: number;
  hasWon: boolean;
  onPlayAgain: () => void;
  onHome: () => void;
}

const getArchetype = (score: number, hasWon: boolean) => {
  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  if (hasWon) {
    return { 
      title: "ELITE BALL KNOWLEDGE", 
      msg: pick([
        "You know all the goal scorers! Absolute masterclass.", 
        "Pep is begging for your number.", 
        "Football history completed.", 
        "Cruyff would be proud."
      ]), 
      color: "text-yellow-500", shadow: "rgba(234, 179, 8, 0.4)", shadowDrop: "drop-shadow(0px 0px 25px rgba(234, 179, 8, 0.8))", border: "border-yellow-500" 
    };
  }
  
  if (score === 0) {
    return { 
      title: pick(["CASUAL DETECTED", "GHOSTED", "PLASTIC FAN", "ZERO BALL KNOWLEDGE"]), 
      msg: pick([
        "Do you even watch the sport? Try again.", 
        "Bro thought Messi plays for the Lakers. Come on, restart!", 
        "Go back to watching TikTok highlights. But seriously, go again.", 
        "Even my nan knows more ball than you. We need a remontada!",
        "Absolutely tragic display. Get back on the pitch and redeem yourself!"
      ]), 
      color: "text-slate-500", shadow: "rgba(100, 116, 139, 0.4)", shadowDrop: "drop-shadow(0px 0px 25px rgba(100, 116, 139, 0.8))", border: "border-slate-500" 
    };
  }
  
  if (score < 5) {
    return { 
      title: pick(["FRAUD", "SUNDAY LEAGUE", "NOT MY GOAT", "FOOTBALL TERRORIST"]), 
      msg: pick([
        "Football terrorist, and your ball knowledge is horrific. Come on bro, you can do better.", 
        "My younger brother could do better bro. Queue up another one!", 
        "Are you guessing or just tragically bad? Run it back immediately.", 
        "You watch games with your eyes closed. Prove me wrong, try again!", 
        "Embarrassing ball knowledge. We need a comeback, go again!",
        "Southgate ball right here. You're better than this, restart!",
        "A literal terrorist to the beautiful game. Time for a remontada!"
      ]), 
      color: "text-red-500", shadow: "rgba(239, 68, 68, 0.4)", shadowDrop: "drop-shadow(0px 0px 25px rgba(239, 68, 68, 0.8))", border: "border-red-500" 
    };
  }

  if (score < 10) {
    return { 
      title: pick(["ARMCHAIR ANALYST", "TWITTER TACTICIAN", "MID-TABLE FINISH"]), 
      msg: pick([
        "You watch highlights on TikTok. Decent start, but you crumbled. Come on now!", 
        "Keep pushing, but you're still a bit basic. You can hit double digits!", 
        "Not bad, but Roy Keane is furious with you. One more try to silence the haters!", 
        "You know a bit, but not enough to flex yet! Go again and dominate.",
        "Mid-table finish. Nobody remembers 2nd place, never mind 10th. Run it back!",
        "Bro is stuck in the Europa League. Push for Champions League next round!"
      ]), 
      color: "text-orange-500", shadow: "rgba(249, 115, 22, 0.4)", shadowDrop: "drop-shadow(0px 0px 25px rgba(249, 115, 22, 0.8))", border: "border-orange-500" 
    };
  }
  
  if (score < 15) {
    return { 
      title: pick(["SOLID BALL KNOWLEDGE", "RESPECTABLE", "TOP HALF"]), 
      msg: pick([
        "You actually watch the games. Okay, we see you. Push for the title next!", 
        "You survived the group stage, but can you win the knockout? Go for more!", 
        "Getting serious now. Keep it up bro! Let's hit 15.", 
        "Bro knows ball, but still hasn't touched grass. Almost elite, go again!",
        "A respectable run. The fans are chanting your name. Run it back!"
      ]), 
      color: "text-blue-500", shadow: "rgba(59, 130, 246, 0.4)", shadowDrop: "drop-shadow(0px 0px 25px rgba(59, 130, 246, 0.8))", border: "border-blue-500" 
    };
  }
  
  if (score < 20) {
    return { 
      title: pick(["TACTICAL GENIUS", "BALLER ALERT", "SPECIAL ONE"]), 
      msg: pick([
        "Guardiola is taking notes. You're cooking right now, keep going!", 
        "You passed the Mourinho masterclass. But can you go invincible?", 
        "Are you a scout? Because you're cooking out here. Try to max it out!", 
        "World-class performance. Let's get that perfect score, come on!", 
        "Almost at the Ballon d'Or podium. Push for the ultimate title next try!"
      ]), 
      color: "text-green-500", shadow: "rgba(34, 197, 94, 0.4)", shadowDrop: "drop-shadow(0px 0px 25px rgba(34, 197, 94, 0.8))", border: "border-green-500" 
    };
  }
  
  return { 
    title: pick(["YOU KNOW BALL.", "THE GOAT", "TRULY ELITE", "ELITE BALL KNOWLEDGE"]), 
    msg: pick([
      "Absolute legend of the game. But can you do it on a cold rainy night in Stoke? Go again!", 
      "The true GOAT of trivia. Literally unbeatable.", 
      "They should build a statue outside the stadium for you. Flawless.", 
      "Incredible streak. Have a day off bro! (Or play again, you addict).", 
      "Pep is begging for your number. Football history completed."
    ]), 
    color: "text-yellow-500", shadow: "rgba(234, 179, 8, 0.4)", shadowDrop: "drop-shadow(0px 0px 25px rgba(234, 179, 8, 0.8))", border: "border-yellow-500" 
  };
};

export default function Result({ gameMode, score, highScore, attempts, hasWon, onPlayAgain, onHome }: ResultProps) {
  const archetype = getArchetype(score, hasWon);
  const [copied, setCopied] = useState(false);

  const displayHighScore = Math.max(score, highScore);

  const handleShare = async () => {
    const title = gameMode === 'goals' ? '"Who Scored More Goals?"' : gameMode === 'market' ? '"Higher Peak Value?"' : gameMode === 'age' ? '"Who Is Older?"' : '"International Goals?"';
    const text = `I just scored ${score} in ${title} ⚽️
My current High Score is ${displayHighScore}!
${archetype.title}: ${archetype.msg}
Can you beat my football knowledge? 👀`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Football Higher or Lower',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(`${text}\nPlay here: ${window.location.href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full w-full items-center justify-center p-4 md:p-6 text-center max-w-md mx-auto relative z-20 overflow-hidden md:overflow-visible"
    >
      <div className="flex-1 flex flex-col items-center justify-center w-full relative mt-4 mb-4 md:mt-0 md:mb-0" style={{ filter: archetype.shadowDrop }}>
        <motion.div 
          initial={{ scale: 0.5, rotate: 10 }}
          animate={{ scale: 1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`bg-zinc-900 border-4 ${archetype.border} w-full p-5 md:p-8 relative mt-8 md:mt-0`}
          style={{ boxShadow: `0px 0px 40px ${archetype.shadow}, inset 0px 0px 20px ${archetype.shadow}` }}
        >
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
          
          {/* Attempt Badge sticking out top left */}
          <div className="absolute -top-5 -left-2 md:-top-6 md:-left-8 bg-zinc-100 text-black py-1 px-3 md:py-2 md:px-4 shadow-[4px_4px_0px_#000] rotate-[-5deg] border-2 border-black z-10 flex items-center gap-2">
            <span className="font-anton text-sm md:text-lg tracking-wider uppercase">Attempt</span>
            <span className="font-mono font-black text-xl md:text-2xl text-brand-green bg-zinc-900 px-2 leading-none skew-x-[-10deg]">#{attempts}</span>
          </div>

          <p className="font-inter font-bold text-xs md:text-sm tracking-widest text-zinc-500 mb-1 mt-4 md:mt-0">FINAL STREAK</p>
          <div className="font-anton text-7xl md:text-8xl text-brand-white leading-none mb-2">{score}</div>
          
          <div className="bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg px-4 py-2 my-3 mx-auto max-w-[80%] shadow-[0_0_20px_rgba(234,179,8,0.3)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-yellow-500/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <p className="font-inter font-bold text-[10px] md:text-xs tracking-widest text-yellow-500/80 uppercase">Highest Score</p>
            <p className="font-mono text-2xl md:text-3xl font-black text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)] relative z-10">{displayHighScore}</p>
          </div>
          
          <div className={`h-px w-full ${archetype.border} my-3 opacity-50`} />
          
          <h2 className={`font-playfair font-black text-2xl md:text-3xl uppercase leading-tight ${archetype.color} transform rotate-2 break-words max-w-full px-2`}>
            {archetype.title}
          </h2>
          <p className="font-inter font-medium text-zinc-400 mt-2 text-xs md:text-sm uppercase pb-2">
            {archetype.msg}
          </p>
          
          {/* Stamps/Effects */}
          <div className="absolute -top-4 -right-2 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-4 flex items-center justify-center transform rotate-12 opacity-80 bg-zinc-900 z-10" style={{ 
            borderColor: hasWon ? '#eab308' : '#f43f5e', 
            boxShadow: hasWon ? "0 0 10px rgba(234, 179, 8, 0.5)" : "0 0 10px rgba(244, 63, 94, 0.5)"
          }}>
            <span className={`font-anton text-sm md:text-xl transform -rotate-12 ${hasWon ? 'text-yellow-500' : 'text-brand-red'}`}>
              {hasWon ? 'WON!' : 'OVER'}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex flex-col gap-3 md:gap-4 pb-4 md:pb-8 relative z-30">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onPlayAgain}
          className="w-full bg-brand-green text-brand-black font-anton text-2xl md:text-3xl uppercase py-3 md:py-5 flex items-center justify-center gap-3 border-4 border-brand-black shadow-[4px_4px_0px_#f4f1ea] md:shadow-[6px_6px_0px_#f4f1ea] active:translate-y-2 active:shadow-none transition-all"
        >
          <RefreshCcw size={24} className="md:w-7 md:h-7" />
          PLAY AGAIN
        </motion.button>
        
        <div className="flex gap-3 md:gap-4 w-full h-14 md:h-16">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleShare}
            className="flex-1 bg-brand-black text-brand-white font-anton text-lg md:text-xl uppercase flex items-center justify-center gap-2 border-4 border-zinc-800 hover:border-brand-white hover:bg-white hover:text-black transition-colors relative overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div key="copied" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                  <Check size={20} className="text-brand-green" />
                  <span className="text-brand-green">COPIED!</span>
                </motion.div>
              ) : (
                <motion.div key="share" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                  <Share size={20} className="group-hover:text-black" />
                  <span className="group-hover:text-black">SHARE SCORE</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onHome}
            className="flex-none aspect-square bg-brand-black text-brand-white py-4 px-4 flex items-center justify-center border-4 border-zinc-800 hover:border-brand-white hover:bg-white hover:text-black transition-colors"
          >
            <Home size={24} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
