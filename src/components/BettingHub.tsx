import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Check, Calculator, Trash2 } from 'lucide-react';

interface CuratedMatch {
  id: string;
  emojiLeft: string;
  teamHome: string;
  teamAway: string;
  emojiRight: string;
  date: string;
  tip: string;
  odds: number;
  description: string;
}

const CURATED_MATCHES: CuratedMatch[] = [
  {
    id: 'match-1',
    emojiLeft: '🦁',
    teamHome: 'Chelsea',
    teamAway: 'Tottenham Hotspur',
    emojiRight: '⚪',
    date: 'MAY/19',
    tip: 'BTTS + Over 2.5 Goals',
    odds: 1.85,
    description: 'A massive London derby at Stamford Bridge. Both teams play with high defensive lines and have shown major vulnerabilities at the back this season. Expect a high-paced, chaotic match with plenty of chances on both ends.'
  },
  {
    id: 'match-2',
    emojiLeft: '🇩🇪',
    teamHome: 'Bayern Munich',
    teamAway: 'VfB Stuttgart',
    emojiRight: '🔴',
    date: 'MAY/23',
    tip: 'Bayern Munich WIN + Over 2.5 Goals',
    odds: 1.75,
    description: "The DFB-Pokal Cup Final in Berlin. Stuttgart has had an incredible run, but Bayern's attack is overwhelming on the big stage. When domestic hardware is on the line, Bayern rarely misses the chance to ruthlessly secure the trophy."
  },
  {
    id: 'match-3',
    emojiLeft: '⚪',
    teamHome: 'Real Madrid',
    teamAway: 'Athletic Club',
    emojiRight: '🦁',
    date: 'MAY/23',
    tip: 'Real Madrid WIN + Over 1.5 Goals',
    odds: 1.85,
    description: "Closing the La Liga season at the Bernabéu. Madrid will want to put on a dominant show for the home crowd. Athletic Club will fight hard, but the sheer quality and depth of Madrid's attack is too much to contain in the capital."
  },
  {
    id: 'match-4',
    emojiLeft: '🦇',
    teamHome: 'Valencia',
    teamAway: 'FC Barcelona',
    emojiRight: '🔵🔴',
    date: 'MAY/23',
    tip: 'Barcelona WIN + Over 1.5 Goals',
    odds: 1.90,
    description: "Mestalla is always a hostile away day, but Barça's quick transition play will exploit a Valencia defense that has leaked goals recently. Once the game opens up in the second half, Barcelona will find the spaces to finish it."
  },
  {
    id: 'match-5',
    emojiLeft: '🔴🔵',
    teamHome: 'Bologna',
    teamAway: 'Inter Milan',
    emojiRight: '⚫🔵',
    date: 'MAY/23',
    tip: 'Inter Milan WIN',
    odds: 1.95,
    description: 'Bologna is a tough out at home, but Inter has the depth and tactical discipline to completely shut down their structured attack. Expect a clinical, professional away performance from one of Europe\'s most consistent squads.'
  },
  {
    id: 'match-6',
    emojiLeft: '🦅',
    teamHome: 'Crystal Palace',
    teamAway: 'Arsenal',
    emojiRight: '🔴',
    date: 'MAY/24',
    tip: 'Arsenal WIN + Over 1.5 Goals',
    odds: 1.60,
    description: "The final day of the Premier League season. Arsenal will throw absolutely everything forward from the first whistle to secure the result. Expect them to dominate possession and easily break through Palace's low block."
  },
  {
    id: 'match-7',
    emojiLeft: '🔴',
    teamHome: 'Liverpool',
    teamAway: 'Brentford',
    emojiRight: '🐝',
    date: 'MAY/24',
    tip: 'Liverpool WIN + Over 2.5 Goals',
    odds: 1.70,
    description: 'Anfield on the final day means relentless attacking football. Liverpool will want a massive win to sign off the campaign in style, and Brentford simply doesn\'t have the defensive legs to withstand 90 minutes of pressure.'
  },
  {
    id: 'match-8',
    emojiLeft: '🏙️',
    teamHome: 'Manchester City',
    teamAway: 'Aston Villa',
    emojiRight: '🦁',
    date: 'MAY/24',
    tip: 'Man City -1.5 Handicap',
    odds: 1.95,
    description: 'City at the Etihad with everything to play for on the final matchday is inevitable. They will pin Villa back right from kickoff, press aggressively, and comfortably win by multiple goals to stamp their authority.'
  },
  {
    id: 'match-9',
    emojiLeft: '🦅',
    teamHome: 'Brighton',
    teamAway: 'Manchester United',
    emojiRight: '🔴',
    date: 'MAY/24',
    tip: 'BTTS (Both Teams To Score)',
    odds: 1.75,
    description: 'Brighton plays an aggressive, wide-open style, which plays perfectly into United\'s counter-attacking strengths. This has all the makings of a transitional, end-to-end thriller with plenty of goals for both sides.'
  },
  {
    id: 'match-10',
    emojiLeft: '🔴⚫',
    teamHome: 'AC Milan',
    teamAway: 'Cagliari',
    emojiRight: '🔴🔵',
    date: 'MAY/24',
    tip: 'AC Milan WIN + Over 1.5 Goals',
    odds: 1.55,
    description: "San Siro will be rocking for the final Serie A matchday. Milan's blistering pace on the wings will be far too much for Cagliari's defense to handle, making this a very comfortable home victory to cap off the season."
  }
];

export default function BettingHub() {
  const [selectedMatches, setSelectedMatches] = useState<string[]>([]);
  const [oddsFormat, setOddsFormat] = useState<'decimal' | 'american'>('decimal');
  const [wager, setWager] = useState<number>(50);

  const toggleMatchSelection = (id: string) => {
    if (selectedMatches.includes(id)) {
      setSelectedMatches(selectedMatches.filter(mId => mId !== id));
    } else {
      setSelectedMatches([...selectedMatches, id]);
    }
  };

  const convertOdds = (decimalOdds: number) => {
    if (oddsFormat === 'decimal') {
      return `${decimalOdds.toFixed(2)}x`;
    }
    if (decimalOdds >= 2.0) {
      const american = Math.round((decimalOdds - 1) * 100);
      return `+${american}`;
    } else {
      const american = Math.round(-100 / (decimalOdds - 1));
      return `${american}`;
    }
  };

  const getSelectedMatchesData = () => {
    return CURATED_MATCHES.filter(m => selectedMatches.includes(m.id));
  };

  const calculateTotalOdds = () => {
    const selectedData = getSelectedMatchesData();
    if (selectedData.length === 0) return 1.0;
    const oddsMultiplier = selectedData.reduce((acc, match) => acc * match.odds, 1);
    return parseFloat(oddsMultiplier.toFixed(2));
  };

  const totalOdds = calculateTotalOdds();
  const calculatedPayout = wager * totalOdds;

  return (
    <div className="w-full flex flex-col gap-6 p-4 sm:p-6 bg-[#0f212e] min-h-[600px] text-brand-white">
      
      {/* Header Banner */}
      <div className="relative p-5 sm:p-6 rounded-2xl border border-[#2F4550] bg-[#1a2c38] overflow-hidden shadow-lg">
        <div className="relative z-10 flex flex-col gap-2">
          <span className="px-3 py-0.5 bg-[#00e701] text-[#0f212e] text-[10px] font-anton tracking-widest uppercase rounded self-start font-bold">
            THE PICK FATHER PRESENTS
          </span>
          <h2 className="font-anton text-2xl sm:text-4xl text-brand-white uppercase tracking-wide">
            PARLAYS OF THE WEEK
          </h2>
          <p className="text-[#b1bad3] text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
            Curated elite football tips for <span className="text-[#00e701] font-bold">May 18 to May 24</span>. Tap cards to select matches and build your custom multi-bet accumulator!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Curated Slips Feed (7 cols) */}
        <div className="xl:col-span-7 flex flex-col gap-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="font-anton text-lg text-[#b1bad3] tracking-wide uppercase">
              Curated Picks ({CURATED_MATCHES.length})
            </h3>
            <div className="flex gap-1 bg-[#0f212e] p-1 rounded-md border border-[#2F4550]">
              <button 
                onClick={() => setOddsFormat('decimal')} 
                className="px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer bg-[#2F4550] text-white"
              >
                Decimal
              </button>
              <button 
                onClick={() => setOddsFormat('american')} 
                className="px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer text-[#b1bad3]"
              >
                American
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {CURATED_MATCHES.map((match) => {
              const isSelected = selectedMatches.includes(match.id);
              return (
                <div 
                  key={match.id}
                  onClick={() => toggleMatchSelection(match.id)}
                  className={`p-5 rounded-xl border-2 transition-all cursor-pointer flex flex-col gap-3 relative ${
                    isSelected 
                      ? 'bg-[#1a2c38] border-[#00e701] shadow-[0_0_15px_rgba(0,231,1,0.15)]'
                      : 'bg-[#1a2c38]/60 border-[#2F4550] hover:border-[#b1bad3]/30 hover:bg-[#1a2c38]'
                  }`}
                >
                  {/* Top Header Metadata Row */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono text-[#b1bad3] bg-[#0f212e] px-2.5 py-0.5 rounded-full border border-[#2F4550]">
                      {match.date}
                    </span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-[#00e701] border-[#00e701] text-[#0f212e]' 
                        : 'border-[#2F4550]'
                    }`}>
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                  </div>

                  {/* Team matchups */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg">{match.emojiLeft}</span>
                    <span className="font-anton text-base sm:text-lg text-white tracking-wide leading-tight">
                      {match.teamHome} <span className="text-[#b1bad3] font-normal">vs</span> {match.teamAway}
                    </span>
                    <span className="text-lg">{match.emojiRight}</span>
                  </div>

                  {/* Tip + Odds row */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#2F4550]/40">
                    <span className="px-3 py-1 bg-[#0f212e] text-[#00e701] text-xs font-mono font-bold rounded-lg border border-[#2f4550]">
                      {match.tip}
                    </span>
                    <span className="px-3 py-1 bg-[#00e701]/10 text-[#00e701] text-xs font-mono font-bold rounded-lg border border-[#00e701]/30">
                      {convertOdds(match.odds)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-xs sm:text-sm font-mono leading-relaxed mt-1">
                    {match.description}
                  </p>

                  {/* Individual Bet Button */}
                  <div className="flex justify-end pt-2">
                    <a
                      href="https://stake.com/?c=knowsball"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-[#0f212e] border border-[#2F4550] hover:border-[#00e701] text-white hover:text-[#00e701] font-bold text-xs rounded-lg flex items-center gap-1.5 transition-all shadow-inner"
                    >
                      <span>Bet on Stake</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Interactive Accumulator/Slip Builder (5 cols) */}
        <div className="xl:col-span-5 flex flex-col gap-4 xl:sticky xl:top-6">
          <div className="bg-[#1a2c38] rounded-xl relative overflow-hidden flex flex-col border border-[#2F4550] shadow-2xl">
            
            {/* Slip Header */}
            <div className="bg-[#1a2c38] p-4 flex items-center justify-between border-b border-[#2F4550]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-[#2F4550] flex items-center justify-center shadow-inner">
                  <Calculator size={18} className="text-[#00e701]" />
                </div>
                <span className="font-bold text-white tracking-wide">
                  Custom Multi-Slip <span className="text-[#b1bad3] font-normal">({selectedMatches.length})</span>
                </span>
              </div>
              {selectedMatches.length > 0 && (
                <button 
                  onClick={() => setSelectedMatches([])}
                  className="text-xs font-mono text-zinc-400 hover:text-rose-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Trash2 size={12} /> Clear all
                </button>
              )}
            </div>

            {/* List of custom selected legs */}
            <div className="p-0 flex flex-col bg-[#0f212e] max-h-[300px] overflow-y-auto">
              <AnimatePresence initial={false}>
                {selectedMatches.length === 0 ? (
                  <div className="p-8 text-center flex flex-col items-center justify-center gap-2">
                    <span className="text-zinc-500 text-xs font-mono">No matches selected.</span>
                    <span className="text-zinc-600 text-[10px] font-mono leading-relaxed">
                      Tap one or more picks on the left to add them to your multi-bet calculator.
                    </span>
                  </div>
                ) : (
                  getSelectedMatchesData().map((match) => (
                    <motion.div 
                      key={match.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 border-b border-[#2F4550] hover:bg-[#1a2c38]/30 transition-colors flex flex-col gap-1.5 relative overflow-hidden"
                    >
                      <div className="flex justify-between items-start pr-6">
                        <span className="text-white text-xs font-bold truncate">
                          {match.teamHome} vs {match.teamAway}
                        </span>
                        <span className="text-[#00e701] font-bold text-xs font-mono">
                          {convertOdds(match.odds)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#b1bad3] text-[11px] font-mono">
                          {match.tip}
                        </span>
                        <button 
                          onClick={() => toggleMatchSelection(match.id)}
                          className="text-[10px] font-mono text-zinc-500 hover:text-rose-400 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Odds, Wager, Returns calculation section */}
            <div className="p-4 bg-[#1a2c38] border-t border-[#2F4550] flex flex-col gap-4">
              
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[#b1bad3] text-xs font-bold">Total Odds</label>
                  <div className="bg-[#0f212e] px-4 py-3 rounded-md border border-[#2F4550] text-white font-bold text-sm font-mono">
                    {convertOdds(totalOdds)}
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[#b1bad3] text-xs font-bold flex justify-between">
                    <span>Bet Amount</span>
                    <span className="text-white">USD</span>
                  </label>
                  <input
                    type="number"
                    value={wager}
                    onChange={(e) => setWager(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-[#0f212e] text-white px-3 py-3 rounded-md border border-[#2F4550] focus:outline-none focus:border-[#00e701] font-bold text-sm font-mono transition-colors"
                  />
                </div>
              </div>

              {/* Quick stake selectors */}
              <div className="flex gap-2 justify-end">
                {[10, 25, 50, 100].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setWager(amt)}
                    className="px-3 py-1 bg-[#0f212e] border border-[#2F4550] hover:border-[#00e701] text-[#b1bad3] hover:text-white text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Estimated Payout Row */}
              <div className="flex justify-between items-center py-2 border-t border-[#2F4550]/40">
                <span className="text-[#b1bad3] text-xs font-bold">Estimated Return</span>
                <span className="text-[#00e701] font-bold text-xl font-mono">
                  ${calculatedPayout.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              {/* Ultimate Stake redirect CTA */}
              <a
                href="https://stake.com/?c=knowsball"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-lg bg-[#00e701] hover:bg-[#00d001] text-[#0f212e] font-bold text-sm uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,231,1,0.2)] transition-colors text-center font-anton tracking-wide"
              >
                <span>Play Parlay on Stake</span>
                <ExternalLink size={16} />
              </a>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
