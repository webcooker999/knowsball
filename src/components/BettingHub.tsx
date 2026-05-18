import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Percent, Calculator, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';

interface ParlayLeg {
  id: string;
  match: string;
  selection: string;
  market: string;
  odds: number; // Decimal odds (e.g. 1.85)
  time: string;
}

interface Parlay {
  id: string;
  title: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  totalOdds: number;
  stakeUrl: string;
  description: string;
  legs: ParlayLeg[];
}

const WEEKLY_PARLAYS: Parlay[] = [
  {
    id: 'pickfather-gold',
    title: 'THE PICK FATHER GOLD SLIP',
    riskLevel: 'Medium',
    totalOdds: 5.63,
    stakeUrl: 'https://stake.com/?c=thepickfather&iid=sport%3A579532791&source=my_bet_preview&modal=bet',
    description: 'Expertly researched high-momentum selections for this week\'s international matchups. Maximum value slip curated by KnowsBall analysts.',
    legs: [
      {
        id: 'pf-1',
        match: 'England vs Brazil',
        selection: 'Brazil to Win or Draw',
        market: 'Double Chance',
        odds: 1.85,
        time: 'Starts in 12h'
      },
      {
        id: 'pf-2',
        match: 'Argentina vs France',
        selection: 'Over 2.5 Goals',
        market: 'Total Goals',
        odds: 1.95,
        time: 'Starts in 24h'
      },
      {
        id: 'pf-3',
        match: 'Spain vs Germany',
        selection: 'Both Teams to Score',
        market: 'BTTS',
        odds: 1.56,
        time: 'Starts in 2 days'
      }
    ]
  },
  {
    id: 'champions-elite',
    title: 'CHAMPIONS LEAGUE ACCUMULATOR',
    riskLevel: 'High',
    totalOdds: 8.42,
    stakeUrl: 'https://stake.com/?c=thepickfather',
    description: 'High-yield European powerhouse accumulator. Targeting high-scoring elite matchups where key forwards are in peak form.',
    legs: [
      {
        id: 'cl-1',
        match: 'Real Madrid vs Manchester City',
        selection: 'Real Madrid to Qualify',
        market: 'To Qualify',
        odds: 2.10,
        time: 'Tuesday 20:00'
      },
      {
        id: 'cl-2',
        match: 'Bayern Munich vs Arsenal',
        selection: 'Harry Kane to Score Anytime',
        market: 'Anytime Goalscorer',
        odds: 1.85,
        time: 'Wednesday 20:00'
      },
      {
        id: 'cl-3',
        match: 'PSG vs Barcelona',
        selection: 'Kylian Mbappé Over 1.5 Shots on Target',
        market: 'Player Props',
        odds: 2.16,
        time: 'Wednesday 20:00'
      }
    ]
  },
  {
    id: 'heritage-safe',
    title: 'WORLD CUP HERITAGE TRIPLE',
    riskLevel: 'Low',
    totalOdds: 3.12,
    stakeUrl: 'https://stake.com/?c=thepickfather',
    description: 'Calculated, high-probability selections covering top-tier nations. Optimized for bankroll growth with lowered risk profiles.',
    legs: [
      {
        id: 'ht-1',
        match: 'Netherlands vs Belgium',
        selection: 'Netherlands to Win',
        market: 'Match Result',
        odds: 1.65,
        time: 'Monday 18:00'
      },
      {
        id: 'ht-2',
        match: 'Italy vs Croatia',
        selection: 'Under 3.5 Goals',
        market: 'Total Goals',
        odds: 1.35,
        time: 'Monday 20:45'
      },
      {
        id: 'ht-3',
        match: 'Portugal vs Uruguay',
        selection: 'Portugal to Score First',
        market: 'First Goalscorer Team',
        odds: 1.40,
        time: 'Tuesday 20:45'
      }
    ]
  }
];

export default function BettingHub() {
  const [selectedParlay, setSelectedParlay] = useState<Parlay>(WEEKLY_PARLAYS[0]);
  const [oddsFormat, setOddsFormat] = useState<'decimal' | 'american'>('decimal');
  const [wager, setWager] = useState<number>(50);

  const convertOdds = (decimalOdds: number) => {
    if (oddsFormat === 'decimal') {
      return `${decimalOdds.toFixed(2)}x`;
    }
    // American Odds Conversion
    if (decimalOdds >= 2.0) {
      const american = Math.round((decimalOdds - 1) * 100);
      return `+${american}`;
    } else {
      const american = Math.round(-100 / (decimalOdds - 1));
      return `${american}`;
    }
  };

  const calculatedPayout = wager * selectedParlay.totalOdds;
  const calculatedProfit = calculatedPayout - wager;

  return (
    <div className="w-full flex flex-col gap-6 p-4 sm:p-6 bg-brand-black min-h-[500px]">
      
      {/* Introduction Banner */}
      <div className="relative p-5 sm:p-6 rounded-2xl border-2 border-brand-white bg-zinc-900 overflow-hidden shadow-[4px_4px_0px_0px_#f4f1ea]">
        <div className="absolute right-0 top-0 w-32 h-full opacity-10 bg-[url('/assets/knowsball.png')] bg-contain bg-no-repeat bg-right" />
        <div className="relative z-10 flex flex-col gap-2">
          <span className="px-3 py-0.5 bg-brand-gold text-brand-black text-[10px] font-anton tracking-widest uppercase rounded self-start border border-brand-white">
            THE PICK FATHER PRESENTS
          </span>
          <h2 className="font-anton text-2xl sm:text-4xl text-brand-white uppercase tracking-wide">
            PARLAYS OF THE WEEK
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-mono max-w-2xl leading-relaxed">
            Copy the hot slips directly to <span className="text-brand-gold font-bold">Stake.com</span>! Explore calculated multipliers, use the built-in wager returns calculator, and stake with elite ballknowledge.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Parlay Slips Select & Leg details (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Parlay Selection Tabs */}
          <div className="flex flex-col sm:flex-row gap-2">
            {WEEKLY_PARLAYS.map((parlay) => {
              const isActive = selectedParlay.id === parlay.id;
              return (
                <button
                  key={parlay.id}
                  onClick={() => setSelectedParlay(parlay)}
                  className={`flex-1 text-left p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900 border-brand-white shadow-[3px_3px_0px_0px_#f4f1ea]'
                      : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-brand-white hover:bg-zinc-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[9px] font-anton tracking-wider px-1.5 py-0.5 rounded border uppercase ${
                      parlay.riskLevel === 'Low'
                        ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                        : parlay.riskLevel === 'Medium'
                        ? 'bg-amber-950 text-amber-400 border-amber-800'
                        : 'bg-rose-950 text-rose-400 border-rose-800'
                    }`}>
                      {parlay.riskLevel} Risk
                    </span>
                    <span className="font-anton text-xs text-brand-gold">
                      {convertOdds(parlay.totalOdds)}
                    </span>
                  </div>
                  <span className="font-anton text-sm tracking-wide text-brand-white line-clamp-1">
                    {parlay.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Featured Slip Preview Board */}
          <div className="bg-zinc-900 rounded-2xl border-2 border-brand-white p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden">
            
            {/* Header info */}
            <div className="flex items-start justify-between border-b-2 border-zinc-800 pb-3">
              <div className="flex flex-col">
                <h3 className="font-anton text-lg sm:text-xl text-brand-white">
                  {selectedParlay.title}
                </h3>
                <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  {selectedParlay.description}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 shrink-0">
                <span className="font-anton text-xs text-zinc-400">Total Odds:</span>
                <span className="font-anton text-base text-brand-green">{convertOdds(selectedParlay.totalOdds)}</span>
              </div>
            </div>

            {/* List of Legs */}
            <div className="flex flex-col gap-3">
              {selectedParlay.legs.map((leg, index) => (
                <div
                  key={leg.id}
                  className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-anton text-xs text-brand-gold shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-anton text-sm sm:text-base text-brand-white">{leg.match}</span>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-zinc-400">
                        <span className="font-mono text-brand-green font-semibold">{leg.selection}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                        <span className="font-mono text-[10px] text-zinc-500">{leg.market}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="font-anton text-sm text-brand-white bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                      {convertOdds(leg.odds)}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      {leg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Copy Details or Info Alert */}
            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 flex items-center gap-1.5 mt-1 bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/60">
              <CheckCircle2 size={14} className="text-brand-green" />
              <span>Real-time odds fetched from Stake.com. Copy directly using the copy slip feature on the right.</span>
            </div>

          </div>

        </div>

        {/* Right Side: Virtual Slip Preview & Wager Calculator (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Virtual Stake.com Bet Slip Preview */}
          <div className="bg-zinc-900 rounded-2xl border-4 border-brand-white relative shadow-[4px_4px_0px_0px_#f4f1ea] overflow-hidden flex flex-col">
            
            {/* Stake Style Header */}
            <div className="bg-zinc-950 p-3.5 border-b-2 border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#2F4550] flex items-center justify-center font-anton text-xs text-[#55E6A5]">S</span>
                <span className="font-anton text-sm sm:text-base text-brand-white uppercase tracking-wider">STAKE BET SLIP PREVIEW</span>
              </div>
              <span className="px-2 py-0.5 bg-[#1A2C38] text-[#55E6A5] font-mono text-[10px] rounded border border-[#2F4550]">
                Parlay Active
              </span>
            </div>

            {/* Slip Core Fields */}
            <div className="p-4 flex flex-col gap-4 bg-zinc-900">
              
              {/* Odds Format Selector */}
              <div className="flex items-center justify-between text-xs font-mono bg-zinc-950 p-2 rounded-lg border border-zinc-800">
                <span className="text-zinc-400">Odds Format:</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setOddsFormat('decimal')}
                    className={`px-2 py-0.5 rounded font-bold transition-all ${
                      oddsFormat === 'decimal'
                        ? 'bg-brand-green text-brand-black'
                        : 'text-zinc-400 hover:text-brand-white'
                    }`}
                  >
                    Decimal
                  </button>
                  <button
                    onClick={() => setOddsFormat('american')}
                    className={`px-2 py-0.5 rounded font-bold transition-all ${
                      oddsFormat === 'american'
                        ? 'bg-brand-green text-brand-black'
                        : 'text-zinc-400 hover:text-brand-white'
                    }`}
                  >
                    American
                  </button>
                </div>
              </div>

              {/* Stake input calculator */}
              <div className="flex flex-col gap-2">
                <label className="font-anton text-xs text-zinc-400 uppercase tracking-widest flex items-center justify-between">
                  <span>Your Wager Amount</span>
                  <span className="text-brand-gold font-bold">USD ($)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-anton text-lg text-zinc-400">$</span>
                  <input
                    type="number"
                    value={wager}
                    onChange={(e) => setWager(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-zinc-950 text-brand-white pl-7 pr-12 py-3 brutal-border border-brand-white rounded-xl focus:outline-none focus:border-brand-gold font-anton text-lg"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                    {[10, 25, 50, 100].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setWager(amt)}
                        className={`px-2 py-1 rounded text-[10px] font-bold border transition-all ${
                          wager === amt
                            ? 'bg-brand-gold text-brand-black border-brand-white'
                            : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-brand-white'
                        }`}
                      >
                        {amt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculations panel */}
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col gap-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-400">Total Multiplier:</span>
                  <span className="font-anton text-brand-white">{convertOdds(selectedParlay.totalOdds)}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-400">Profit Margin:</span>
                  <span className="font-anton text-brand-green">
                    +{(selectedParlay.totalOdds - 1 * 100).toFixed(0)}%
                  </span>
                </div>
                <hr className="border-zinc-800 my-1" />
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-anton text-xs text-zinc-400 uppercase tracking-widest">Est. Payout</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Includes wager return</span>
                  </div>
                  <span className="font-anton text-2xl text-brand-green">
                    ${calculatedPayout.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Interactive Copy Stake Button with gold animation */}
              <motion.a
                href={selectedParlay.stakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(255, 184, 0, 0.4), 0px 4px 0px 0px #f4f1ea',
                    '0 0 25px rgba(255, 184, 0, 0.8), 0px 4px 0px 0px #f4f1ea',
                    '0 0 10px rgba(255, 184, 0, 0.4), 0px 4px 0px 0px #f4f1ea'
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-brand-gold text-brand-black font-anton text-lg sm:text-xl uppercase flex items-center justify-center gap-2.5 border-4 border-brand-white cursor-pointer select-none text-center shadow-[0px_4px_0px_0px_#f4f1ea]"
              >
                <TrendingUp size={20} />
                <span>COPY & BET ON STAKE</span>
                <ExternalLink size={16} />
              </motion.a>

            </div>

            {/* Disclaimer block */}
            <div className="bg-zinc-950 p-3 border-t border-zinc-800 text-[9px] text-zinc-500 font-mono leading-tight">
              KnowsBall is an informational platform. Wager levels are for demonstration and calculator purposes only. Play responsibly. 18+.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
