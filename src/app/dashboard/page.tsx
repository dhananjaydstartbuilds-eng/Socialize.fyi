"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Plus, LayoutDashboard, Send, RefreshCw, BarChart2,
  TrendingUp, Activity, CheckCircle2, ChevronDown, Zap
} from "lucide-react";
import { useState } from "react";

const PERFORMANCE_METRICS = [
  { title: "Avg. Engagement Rate", value: "8.4%", trend: "+2.1%", color: "text-emerald-400" },
  { title: "Total Clicks (30d)", value: "12,405", trend: "+14.3%", color: "text-cyan-400" },
  { title: "Hook Win Rate", value: "64%", trend: "+5.0%", color: "text-fuchsia-400" },
];

const WINNING_HOOK = {
  text: "I analyzed 500 SaaS landing pages. 90% fail for this exact reason.",
  score: 88,
  engagement: "11.2%",
  clicks: 1405,
  date: "OCT 24, 2026",
};

const MUTATED_VERSIONS = [
  { id: 1, text: "I analyzed 500 elite SaaS landing pages. 90% are losing money because of one invisible pixel.", score: 95, type: "Curiosity Gap" },
  { id: 2, text: "Your landing page is bleeding revenue. I analyzed 500 SaaS companies to find the single reason why.", score: 92, type: "Warning / Mistake" },
  { id: 3, text: "The $10M SaaS playbook: What the top 10% of 500 analyzed landing pages do differently.", score: 89, type: "Outcome / Transformation" },
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Performance Loop");
  const [activeFilter, setActiveFilter] = useState("All");

  const FILTER_OPTIONS = [
    "All", "Contrarian", "Curiosity gap", "Outcome-driven", 
    "Mistake/warning", "Authority/tested insight"
  ];

  const HOOKS_DB = [
    { hook: "Good design is invisible. Great design makes you money.", score: 94, type: "Contrarian", en: "15.4%", clicks: 4022, breakdown: { curiosity: 85, specificity: 80, outcome: 95, pattern: 90, emotion: 88 } },
    { hook: "Stop using minimal UI. It's killing your conversion rates.", score: 91, type: "Mistake/warning", en: "12.2%", clicks: 3105, breakdown: { curiosity: 90, specificity: 85, outcome: 80, pattern: 95, emotion: 92 } },
    { hook: "I analyzed 500 SaaS landing pages. 90% fail for this exact reason.", score: 88, type: "Curiosity gap", en: "11.2%", clicks: 1405, breakdown: { curiosity: 98, specificity: 90, outcome: 85, pattern: 88, emotion: 75 } },
    { hook: "5 design systems that will save you 100+ hours a month.", score: 81, type: "Outcome-driven", en: "9.8%", clicks: 2040, breakdown: { curiosity: 80, specificity: 95, outcome: 90, pattern: 70, emotion: 60 } },
    { hook: "If you don't rebuild your app for spatial computing by 2026, you're dead.", score: 75, type: "Mistake/warning", en: "8.1%", clicks: 1200, breakdown: { curiosity: 85, specificity: 75, outcome: 70, pattern: 90, emotion: 95 } },
    { hook: "How to increase your MRR by 20% using button placement.", score: 72, type: "Outcome-driven", en: "6.5%", clicks: 800, breakdown: { curiosity: 75, specificity: 85, outcome: 95, pattern: 60, emotion: 65 } },
    { hook: "The exact 3-step utility to scale to $1M without raising capital.", score: 89, type: "Authority/tested insight", en: "11.8%", clicks: 2800, breakdown: { curiosity: 88, specificity: 98, outcome: 92, pattern: 75, emotion: 70 } }
  ];

  const filteredHooks = activeFilter === "All" ? HOOKS_DB : HOOKS_DB.filter(h => h.type === activeFilter);

  return (
    <div className="min-h-screen flex bg-[#030104] text-slate-200 font-sans selection:bg-fuchsia-500/30 overflow-hidden relative">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 blur-[150px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* Sidebar */}
      <aside className="w-[280px] flex-shrink-0 border-r border-white/5 bg-[#030104]/80 backdrop-blur-3xl flex flex-col hidden lg:flex z-20">
        <div className="flex items-center gap-4 px-6 py-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-indigo-500 flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(217,70,239,0.5)]">
            S
          </div>
          <div>
             <span className="font-bold text-xl text-white tracking-wide block">Socialize</span>
             <span className="text-[10px] font-mono tracking-widest text-[#a5abb6] uppercase">Feedback Engine</span>
          </div>
        </div>

        <nav className="flex-1 mt-4 px-3 space-y-2">
           {[ 
             { name: "Performance Loop", icon: RefreshCw },
             { name: "Hook Library", icon: LayoutDashboard },
             { name: "Analytics", icon: BarChart2 }
           ].map((item) => (
             <button
               key={item.name}
               onClick={() => setActiveNav(item.name)}
               className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold relative group ${
                 activeNav === item.name 
                   ? "text-white bg-white/5 shadow-inner" 
                   : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
               }`}
             >
               {activeNav === item.name && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-fuchsia-400 border border-fuchsia-400 rounded-r-md shadow-[0_0_12px_rgba(217,70,239,0.8)]" 
                  />
               )}
               <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
               <span className="tracking-wide">{item.name}</span>
             </button>
           ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10 scroll-smooth px-6 md:px-10 py-12">
        <div className="max-w-[1100px] mx-auto">
          
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                {activeNav === "Performance Loop" && <Activity className="w-8 h-8 text-fuchsia-400" />}
                {activeNav === "Hook Library" && <LayoutDashboard className="w-8 h-8 text-indigo-400" />}
                {activeNav === "Analytics" && <BarChart2 className="w-8 h-8 text-cyan-400" />}
                {activeNav}
              </h1>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                {activeNav === "Performance Loop" && "System tracking hook deltas & mutations."}
                {activeNav === "Hook Library" && "Your compounding repository of past winners."}
                {activeNav === "Analytics" && "High-level performance metrics & conversion data."}
              </p>
            </div>

            <Link href="/create">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-[13px] uppercase tracking-widest hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Idea &rarr; Content
              </motion.button>
            </Link>
          </header>

          {activeNav === "Performance Loop" && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Core Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {PERFORMANCE_METRICS.map((m, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      key={m.title}
                      className="p-6 rounded-[2rem] bg-[#0c0814] border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors shadow-lg"
                    >
                      <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-bold">{m.title}</span>
                      <div className="mt-4 flex items-end justify-between">
                        <span className={`text-3xl font-bold tracking-tight ${m.color}`}>{m.value}</span>
                        <span className="text-[11px] font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
                          {m.trend}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* The Moat: Hook Winner & Mutations */}
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-fuchsia-500/30 via-indigo-500/10 to-transparent overflow-hidden mb-12"
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/5 blur-3xl pointer-events-none" />
                   
                   <div className="relative bg-[#0c0814]/90 backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-12 overflow-hidden border border-white/5">
                      
                      {/* Winner Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
                         <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="px-3 py-1 bg-emerald-500 text-black text-[10px] font-bold tracking-[0.15em] uppercase rounded shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3" /> Winning Hook
                              </span>
                              <span className="text-[10px] uppercase tracking-widest text-[#a5abb6] font-mono">
                                {WINNING_HOOK.date}
                              </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl leading-tight">
                              "{WINNING_HOOK.text}"
                            </h2>
                         </div>
                         
                         <div className="flex gap-4">
                           <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5">
                             <span className="text-[10px] font-bold text-slate-500 tracking-widest mb-1 uppercase">Eng Rate</span>
                             <span className="text-xl font-bold text-emerald-400">{WINNING_HOOK.engagement}</span>
                           </div>
                           <div className="flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5">
                             <span className="text-[10px] font-bold text-slate-500 tracking-widest mb-1 uppercase">Score</span>
                             <span className="text-xl font-bold text-white">{WINNING_HOOK.score}<span className="text-[10px] text-slate-600">/100</span></span>
                           </div>
                         </div>
                      </div>

                      {/* AI Mutations */}
                      <div>
                         <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-fuchsia-400 mb-6 flex items-center gap-2">
                           <RefreshCw className="w-4 h-4" /> System Mutated Variations
                         </h3>

                         <div className="grid md:grid-cols-3 gap-6">
                           {MUTATED_VERSIONS.map((v) => (
                             <div key={v.id} className="p-6 rounded-[2rem] bg-[#07040a] border border-white/10 hover:border-fuchsia-500/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
                               <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                               <div className="relative z-10">
                                  <div className="flex justify-between items-center mb-4">
                                     <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 font-mono">
                                       {v.type}
                                     </span>
                                     <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest border border-emerald-500/20">
                                       {v.score}/100
                                     </span>
                                  </div>
                                  <p className="text-slate-300 font-semibold text-[14px] leading-relaxed mb-6 group-hover:text-white transition-colors">
                                    "{v.text}"
                                  </p>
                               </div>
                               <Link 
                                 href={`/p/mutated-${v.id}?idea=${encodeURIComponent(WINNING_HOOK.text)}&framework=${encodeURIComponent(v.type)}`}
                                 className="w-full relative z-10 py-3 rounded-xl bg-white/[0.04] text-[#a5abb6] border border-white/5 font-bold uppercase text-[10px] tracking-widest hover:bg-white text-white hover:text-black transition-all flex justify-center items-center gap-2 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                               >
                                 Generate Content <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                               </Link>
                             </div>
                           ))}
                         </div>
                      </div>

                   </div>
                </motion.div>
             </motion.div>
          )}

          {activeNav === "Hook Library" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
               
               <div className="flex flex-wrap gap-3 mb-8">
                 {FILTER_OPTIONS.map(opt => (
                   <button 
                     key={opt}
                     onClick={() => setActiveFilter(opt)}
                     className={`px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest border transition-colors ${
                       activeFilter === opt 
                         ? 'bg-white/10 text-white border-white/10 shadow-lg' 
                         : 'bg-transparent text-slate-500 hover:text-white border-transparent hover:border-white/10'
                     }`}
                   >
                     {opt}
                   </button>
                 ))}
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredHooks.map((h, i) => (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }} 
                     animate={{ opacity: 1, scale: 1 }} 
                     transition={{ delay: i * 0.05 }}
                     key={i} 
                     className="p-6 rounded-[2rem] bg-[#0c0814] border border-white/5 hover:border-white/20 transition-all group flex flex-col justify-between h-full relative overflow-hidden"
                   >
                     {h.score >= 90 && (
                       <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />
                     )}
                     <div>
                       <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-300 font-bold bg-white/5 border border-white/10 px-2 py-1 rounded-md">{h.type}</span>
                          </div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${h.score >= 90 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : h.score >= 80 ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                            {h.score}
                          </div>
                       </div>
                       <p className="text-slate-200 text-lg font-bold leading-snug group-hover:text-white transition-colors mb-6 group-hover:-translate-y-1 transform duration-300">
                         "{h.hook}"
                       </p>
                       
                       {/* Ultra Pro Breakdown Meters */}
                       <div className="space-y-2 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                          {Object.entries(h.breakdown).map(([key, val]) => (
                             <div key={key} className="flex items-center gap-3">
                                <span className="text-[8px] uppercase tracking-widest text-slate-500 w-16 text-right font-bold">{key}</span>
                                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                  <div className="h-full bg-slate-400 rounded-full" style={{ width: `${val}%` }} />
                                </div>
                             </div>
                          ))}
                       </div>
                     </div>
                     <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                        <div className="flex flex-col">
                           <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1">Engagement</span>
                           <span className="text-white font-bold">{h.en}</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex flex-col">
                           <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1">Clicks</span>
                           <span className="text-white font-bold">{h.clicks}</span>
                        </div>
                        <div className="flex-1 flex justify-end">
                           <Link 
                             href={`/p/reused?idea=${encodeURIComponent(h.hook)}&framework=${encodeURIComponent(h.type)}`}
                             className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors group/repost relative"
                           >
                             <Send className="w-3.5 h-3.5 group-hover/repost:translate-x-0.5 group-hover/repost:-translate-y-0.5 transition-transform" />
                             <span className="absolute -top-8 right-0 bg-[#0c0814] border border-white/10 px-2 py-1 rounded text-[9px] font-bold text-slate-300 opacity-0 group-hover/repost:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                               Generate Content
                             </span>
                           </Link>
                        </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          )}

          {activeNav === "Analytics" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
               
               {/* High level charts */}
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Engagement Graph */}
                  <div className="col-span-2 p-8 rounded-[2.5rem] bg-[#0c0814] border border-white/5 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
                     <div className="flex items-center justify-between mb-8 relative z-10">
                        <div>
                           <h3 className="text-white font-bold text-lg">Engagement vs Hook Quality</h3>
                           <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mt-1">30 DAY CROSS-PLATFORM ANALYSIS</p>
                        </div>
                        <div className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold text-[11px] uppercase tracking-widest border border-cyan-500/30">
                           +42.5% Delta
                        </div>
                     </div>
                     
                     <div className="h-[250px] w-full flex items-end justify-between gap-2 relative z-10">
                        {/* Mock graph bars representing engagement correlated with hook scores over time */}
                        {[30, 45, 20, 60, 80, 55, 90, 75, 40, 85, 95, 88].map((val, i) => (
                           <div key={i} className="w-full flex flex-col justify-end group cursor-crosshair">
                              <motion.div 
                                initial={{ height: 0 }} 
                                animate={{ height: `${val}%` }} 
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className={`w-full rounded-t-lg mx-auto max-w-[24px] transition-all group-hover:opacity-100 ${val >= 80 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 opacity-80' : val >= 50 ? 'bg-gradient-to-t from-cyan-600 to-cyan-400 opacity-60' : 'bg-gradient-to-t from-slate-700 to-slate-500 opacity-40'}`}
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Hook Type Distribution */}
                  <div className="col-span-1 p-8 rounded-[2.5rem] bg-[#0c0814] border border-white/5 flex flex-col">
                     <h3 className="text-white font-bold text-lg mb-8">Winning Hook Types</h3>
                     
                     <div className="flex-1 flex items-center justify-center relative my-4">
                        <div className="w-48 h-48 rounded-full border-[16px] border-[#0c0814] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] relative overflow-hidden"
                             style={{ background: `conic-gradient(#10b981 0% 45%, #ec4899 45% 75%, #06b6d4 75% 95%, #475569 95% 100%)` }}
                        >
                           <div className="absolute inset-0 m-4 rounded-full bg-[#0c0814] flex flex-col items-center justify-center shadow-inner">
                              <Zap className="w-6 h-6 text-emerald-400 mb-2" />
                              <span className="text-2xl font-bold text-white">45%</span>
                              <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Contrarian</span>
                           </div>
                        </div>
                     </div>
                     
                     <div className="space-y-4 mt-auto">
                        <div className="flex items-center justify-between text-sm">
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" /><span className="text-slate-300 font-semibold">Contrarian</span></div>
                           <span className="text-white font-bold">45%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-fuchsia-500" /><span className="text-slate-300 font-semibold">Curiosity</span></div>
                           <span className="text-white font-bold">30%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                           <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500" /><span className="text-slate-300 font-semibold">Listicle</span></div>
                           <span className="text-white font-bold">20%</span>
                        </div>
                     </div>
                  </div>
               </div>

            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
