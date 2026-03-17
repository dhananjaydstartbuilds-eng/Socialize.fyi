"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Sparkles, RefreshCw, BarChart2, CheckCircle2,
  Share2, Linkedin, Twitter, Instagram, Youtube, Mail, ChevronRight,
  TrendingUp, MousePointerClick, Bookmark
} from "lucide-react";
import Link from "next/link";

export default function EnginePage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [topic, setTopic] = useState("");
  const [activePlatform, setActivePlatform] = useState("LinkedIn");
  const [selectedHook, setSelectedHook] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(2);
    }, 1500); // Fake load
  };

  return (
    <div className="min-h-screen bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative flex flex-col">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-fuchsia-600/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* Header Pipeline Tracker */}
      <header className="px-8 py-6 border-b border-white/5 relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            CE
          </div>
          <span className="font-bold text-xl text-white tracking-wide">Content Engine</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          <StepBadge num={1} label="Input" active={step >= 1} current={step === 1} />
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <StepBadge num={2} label="Hooks" active={step >= 2} current={step === 2} />
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <StepBadge num={3} label="Content" active={step >= 3} current={step === 3} />
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <StepBadge num={4} label="Performance" active={step >= 4} current={step === 4} />
        </div>
        
        <Link href="/dashboard" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
          Exit
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative z-10">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div 
              key="step-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-3xl flex flex-col items-center"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-8 text-center tracking-tight">
                What do you want to post?
              </h1>
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Drop a core idea, rant, or bullet points here..."
                  className="w-full h-64 bg-[#0a0612] rounded-3xl p-8 text-xl md:text-2xl font-medium text-white placeholder:text-slate-600 border border-white/10 focus:border-indigo-500/50 outline-none resize-none shadow-2xl transition-all relative z-10 block"
                  autoFocus
                />
                <button
                  onClick={handleGenerate}
                  disabled={!topic.trim() || isGenerating}
                  className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isGenerating ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-indigo-600" />
                      Generate Hooks
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-4xl"
            >
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-3xl font-bold text-white">Select Your Best Hook</h2>
                 <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 transition-colors">
                   <RefreshCw className="w-4 h-4" />
                   Improve Hooks
                 </button>
              </div>

              <div className="flex flex-col gap-4">
                <HookCard 
                  id={1} selected={selectedHook} onSelect={setSelectedHook}
                  hook="The SaaS bubble didn't burst. It just stopped rewarding lazy UX."
                  score={92}
                  metrics={{ cur: 9, spe: 8, out: 9, pat: 10, emo: 8 }}
                />
                <HookCard 
                  id={2} selected={selectedHook} onSelect={setSelectedHook}
                  hook="I redesigned 5 B2B dashboards this year. Here's the one pattern they all missed."
                  score={84}
                  metrics={{ cur: 10, spe: 9, out: 8, pat: 7, emo: 6 }}
                />
                <HookCard 
                  id={3} selected={selectedHook} onSelect={setSelectedHook}
                  hook="Why minimalist design is actually destroying your user retention rates."
                  score={78}
                  metrics={{ cur: 8, spe: 6, out: 7, pat: 9, emo: 9 }}
                />
                <HookCard 
                  id={4} selected={selectedHook} onSelect={setSelectedHook}
                  hook="Good UX is invisible. Great UX is a dopamine loop."
                  score={65}
                  metrics={{ cur: 6, spe: 5, out: 5, pat: 8, emo: 7 }}
                />
                <HookCard 
                  id={5} selected={selectedHook} onSelect={setSelectedHook}
                  hook="Here are some tips for making your product better."
                  score={42}
                  metrics={{ cur: 3, spe: 2, out: 4, pat: 2, emo: 1 }}
                />
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedHook}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(79,70,229,0.4)] disabled:shadow-none"
                >
                  Generate Content <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-5xl h-[80vh] flex flex-col"
            >
              <div className="p-6 rounded-2xl bg-[#0c0814] border border-white/5 mb-6 flex items-start gap-4 shadow-lg shrink-0">
                 <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 flex items-center justify-center flex-shrink-0 relative">
                   <span className="text-emerald-400 font-bold text-sm">92</span>
                   <svg className="absolute inset-0 w-full h-full -rotate-90">
                     <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="4" fill="none" className="text-emerald-500" strokeDasharray="138" strokeDashoffset="11" />
                   </svg>
                 </div>
                 <div>
                   <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Winning Hook Selected</p>
                   <h3 className="text-xl font-bold text-white">The SaaS bubble didn't burst. It just stopped rewarding lazy UX.</h3>
                 </div>
              </div>

              <div className="flex-1 rounded-3xl bg-[#0a0612] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl min-h-0">
                
                {/* Platform Tabs */}
                <div className="md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-black/20 flex flex-row md:flex-col overflow-x-auto p-4 gap-2 flex-shrink-0">
                  <PlatformTab icon={Linkedin} name="LinkedIn" active={activePlatform} setActive={setActivePlatform} />
                  <PlatformTab icon={Twitter} name="Twitter/X" active={activePlatform} setActive={setActivePlatform} />
                  <PlatformTab icon={Instagram} name="Instagram" active={activePlatform} setActive={setActivePlatform} />
                  <PlatformTab icon={Youtube} name="YouTube" active={activePlatform} setActive={setActivePlatform} />
                  <PlatformTab icon={Mail} name="Email" active={activePlatform} setActive={setActivePlatform} />
                </div>

                {/* Editor Area */}
                <div className="flex-1 flex flex-col p-6 min-h-0 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{activePlatform} Copy</span>
                    <button className="text-xs font-bold px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white transition-colors">Regenerate</button>
                  </div>
                  <textarea 
                    className="flex-1 w-full bg-transparent border-none outline-none text-slate-300 text-lg leading-relaxed resize-none customize-scroll"
                    defaultValue={`The SaaS bubble didn't burst. It just stopped rewarding lazy UX.\n\nFor the last 5 years, we mapped our entire product strategy around accumulating features. 90% of them go unused. \n\nI dug into the data of 5 massive B2B platforms this quarter. The ones growing at 40% YoY aren't building more. They are stripping down.\n\nClarity > Features.\nSpeed > Complexity.\n\nIf you want retention in 2026, stop making your users think. Reward their actions instantly.\n\nThoughts?`}
                  />
                  
                  {/* Action Footer */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-3">
                    <button className="px-6 py-3 rounded-xl bg-white/5 text-slate-200 font-bold hover:bg-white/10 hover:text-white transition-colors border border-white/5">
                      Save Draft
                    </button>
                    <button 
                      onClick={() => setStep(4)}
                      className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      Publish / Export
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-6xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                    <BarChart2 className="w-8 h-8 text-cyan-400" /> Performance Console
                  </h2>
                  <p className="text-slate-400">Post once. Improve forever.</p>
                </div>
                <button
                  onClick={() => { setStep(1); setTopic(""); setSelectedHook(null); }}
                  className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all flex items-center gap-2 border border-white/5"
                >
                  <PlusIcon className="w-4 h-4" /> New Post
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Hero Winner */}
                <div className="col-span-1 md:col-span-2 rounded-3xl bg-gradient-to-br from-[#0c0814] to-[#120a22] border border-indigo-500/30 p-8 shadow-[0_0_40px_rgba(79,70,229,0.1)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/20 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Top Winner
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Last 7 Days</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white max-w-xl mb-6 leading-snug relative z-10">
                    "The SaaS bubble didn't burst. It just stopped rewarding lazy UX."
                  </h3>

                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                     <Stat label="ENGAGEMENT" value="14.2K" percent="+24%" active />
                     <Stat label="CLICKS" value="3,492" percent="+8%" />
                     <Stat label="SAVES" value="842" percent="+42%" />
                  </div>
                </div>

                {/* Mutation Block */}
                <div className="col-span-1 border border-emerald-500/30 bg-[#0c0910] rounded-3xl p-6 flex flex-col relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-500" />
                   
                   <h4 className="text-lg font-bold text-white mb-1">AI Hook Mutations</h4>
                   <p className="text-xs text-slate-400 mb-6">Generated from your winning post.</p>

                   <div className="flex-1 flex flex-col gap-3">
                     <MutationCard text="Lazy UX killed the SaaS bubble. Here's how to survive." score={95} />
                     <MutationCard text="Are you building features, or are you building friction? The SaaS reality check." score={91} />
                     <MutationCard text="The 5 B2B platforms dominating 2026 all share one trait." score={88} />
                   </div>

                   <button className="w-full mt-6 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 transition-colors">
                     Repost Best Version
                   </button>
                </div>
              </div>

              {/* History Table */}
              <div className="mt-8 rounded-3xl bg-[#0a0612] border border-white/5 overflow-hidden">
                <div className="p-6 border-b border-white/5">
                  <h4 className="font-bold text-white">Recent Posts</h4>
                </div>
                <div className="p-0">
                  <HistoryRow hook="Why minimalist design is actually destroying your user retention rates." platform="Twitter" score="Green" views="4.2K" />
                  <HistoryRow hook="I redesigned 5 B2B dashboards this year. Here's the one pattern..." platform="LinkedIn" score="Yellow" views="8.1K" />
                  <HistoryRow hook="Good UX is invisible. Great UX is a dopamine loop." platform="Instagram" score="Red" views="1.2K" />
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}

// ----------------------------------------
// SubComponents
// ----------------------------------------

function StepBadge({ num, label, active, current }: { num: number, label: string, active: boolean, current: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
      current ? "bg-white/10 text-white" : active ? "text-indigo-300" : "text-slate-600"
    }`}>
      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
        current ? "bg-white text-black" : active ? "bg-indigo-500/20 text-indigo-300" : "bg-white/5 text-slate-500"
      }`}>
        {active && !current ? <CheckCircle2 className="w-3 h-3" /> : num}
      </span>
      {label}
    </div>
  );
}

function HookCard({ id, hook, score, metrics, selected, onSelect }: any) {
  const isSelected = selected === id;
  const isGreen = score >= 75;
  const isYellow = score >= 60 && score < 75;
  
  const ringColor = isGreen ? "border-emerald-500/50" : isYellow ? "border-amber-500/50" : "border-rose-500/50";
  const textColor = isGreen ? "text-emerald-400" : isYellow ? "text-amber-400" : "text-rose-400";
  const glowStroke = isGreen ? "text-emerald-500" : isYellow ? "text-amber-500" : "text-rose-500";

  return (
    <motion.div 
      onClick={() => onSelect(id)}
      className={`relative p-5 rounded-2xl border cursor-pointer transition-all flex flex-col md:flex-row items-start md:items-center gap-6 ${
        isSelected ? 'bg-white/[0.05] border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'bg-[#0a0612] border-white/5 hover:border-white/20'
      }`}
    >
       <div className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center flex-shrink-0 relative ${ringColor}`}>
         <span className={`font-bold text-lg ${textColor}`}>{score}</span>
         {/* Fake SVG Circle to look active */}
         <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="25" cy="25" r="25" stroke="currentColor" strokeWidth="2" fill="none" className={glowStroke} strokeDasharray="157" strokeDashoffset={`${157 - (157 * score) / 100}`} strokeLinecap="round" />
         </svg>
       </div>
       
       <div className="flex-1 w-full">
         <h3 className={`text-[17px] sm:text-[19px] font-bold transition-colors mb-4 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
           {hook}
         </h3>
         
         <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
           <MetricBar label="Curiosity" value={metrics.cur} color="bg-indigo-400" />
           <MetricBar label="Specificity" value={metrics.spe} color="bg-cyan-400" />
           <MetricBar label="Outcome" value={metrics.out} color="bg-emerald-400" />
           <MetricBar label="Pattern" value={metrics.pat} color="bg-fuchsia-400" />
           <MetricBar label="Emotion" value={metrics.emo} color="bg-rose-400" />
         </div>
       </div>

       {isSelected && (
         <div className="absolute right-6 top-6 md:top-1/2 md:-translate-y-1/2">
           <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg">
             <CheckCircle2 className="w-5 h-5" />
           </div>
         </div>
       )}
    </motion.div>
  );
}

function MetricBar({ label, value, color }: any) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] uppercase font-bold text-slate-500 w-16">{label}</span>
      <div className="w-[60px] h-[6px] bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${(value / 10) * 100}%` }} />
      </div>
    </div>
  )
}

function PlatformTab({ icon: Icon, name, active, setActive }: any) {
  const isActive = active === name;
  return (
    <button 
      onClick={() => setActive(name)}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all text-sm font-bold w-full md:w-auto ${
        isActive ? 'bg-white/10 text-white shadow-inner border border-white/10' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
      }`}
    >
      <Icon className="w-4 h-4" />
      {name}
    </button>
  );
}

function Stat({ label, value, percent, active }: any) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</span>
      <div className="flex items-end gap-2">
        <span className={`text-2xl font-black ${active ? 'text-white' : 'text-slate-300'}`}>{value}</span>
        <span className={`text-xs font-bold mb-1 ${percent.includes('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{percent}</span>
      </div>
    </div>
  )
}

function MutationCard({ text, score }: any) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors group cursor-pointer flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        {score}
      </div>
      <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
        {text}
      </p>
    </div>
  )
}

function HistoryRow({ hook, platform, score, views }: any) {
  const isGreen = score === "Green";
  const isYellow = score === "Yellow";
  
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <div className={`w-2 h-2 flex-shrink-0 rounded-full ${isGreen ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : isYellow ? 'bg-amber-400' : 'bg-rose-400'}`} />
        <p className="text-sm font-medium text-slate-300 truncate max-w-[200px] md:max-w-md lg:max-w-xl">{hook}</p>
      </div>
      <div className="flex items-center gap-6 w-32 justify-end">
        <span className="hidden md:inline-block text-xs font-bold text-slate-500 uppercase">{platform}</span>
        <span className="text-sm font-bold text-white">{views}</span>
      </div>
    </div>
  )
}

function PlusIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="M12 5v14"/></svg>;
}
