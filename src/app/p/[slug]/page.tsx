"use client";

import React, { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, RefreshCw, Send, CheckCircle2, Maximize2, Layers } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

// --- Mock Data ---
const MOCK_HOOKS = [
  { id: 1, text: "I analyzed 500 SaaS landing pages. 90% fail for this exact reason.", score: 88, breakdown: { curiosity: 18, specificity: 19, outcome: 15, pattern: 18, emotion: 18 }, type: "Curiosity gap", reason: "Hits the curiosity trigger perfectly by hiding the specific reason but providing a high failure percentage." },
  { id: 2, text: "Stop using minimal UI. It's killing your conversion rates.", score: 72, breakdown: { curiosity: 14, specificity: 12, outcome: 15, pattern: 16, emotion: 15 }, type: "Mistake/warning", reason: "Direct negative outcome warning. Creates immediate urgency to change behavior." },
  { id: 3, text: "5 design systems that will save you 100+ hours a month.", score: 81, breakdown: { curiosity: 15, specificity: 18, outcome: 20, pattern: 14, emotion: 14 }, type: "Authority/tested insight", reason: "Highly specific outcome paired with a tangible, quantifiable benefit format." },
  { id: 4, text: "If you don't rebuild your app for spatial computing by 2026, you're dead.", score: 65, breakdown: { curiosity: 16, specificity: 10, outcome: 10, pattern: 15, emotion: 14 }, type: "Contrarian", reason: "Strong polarizing statement that challenges the current dominant paradigm." },
  { id: 5, text: "Good design is invisible. Great design makes you money.", score: 55, breakdown: { curiosity: 10, specificity: 8, outcome: 15, pattern: 12, emotion: 10 }, type: "Outcome-driven", reason: "Focuses strictly on the end resulting value of the action." }
];

const PLATFORMS = ["LinkedIn", "Twitter/X", "Instagram", "Facebook", "Email"];

export default function PostHubPage({ params }: Props) {
  const { slug } = use(params);
  const router = useRouter();
  
  // Parse URL Parameters
  const [ideaParam, setIdeaParam] = useState<string | null>(null);
  const [frameworkParam, setFrameworkParam] = useState<string | null>(null);
  
  useEffect(() => {
    // Basic extraction from window in client component since useSearchParams needs suspense boundary in Next 15 sometimes
    const urlParams = new URLSearchParams(window.location.search);
    setIdeaParam(urlParams.get("idea"));
    setFrameworkParam(urlParams.get("framework") || "Contrarian");
  }, []);

  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Hook generation is handled via the API in the useEffect below

  const [hooks, setHooks] = useState(MOCK_HOOKS);
  const [selectedHookId, setSelectedHookId] = useState<number>(1);
  const [activePlatform, setActivePlatform] = useState(PLATFORMS[0]);
  const [improving, setImproving] = useState(false);
  const [content, setContent] = useState("");
  const [generatingContent, setGeneratingContent] = useState(false);

  const bestHook = [...hooks].sort((a,b) => b.score - a.score)[0];
  const selectedHook = hooks.find(h => h.id === selectedHookId);

  useEffect(() => {
    let active = true;
    if (ideaParam && selectedHook && activePlatform) {
      async function fetchContent() {
        setGeneratingContent(true);
        setContent("Generating AI post...");
        try {
          const res = await fetch("/api/generate-content", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              idea: ideaParam, 
              hookText: selectedHook?.text || "", 
              platform: activePlatform 
            })
          });
          const json = await res.json();
          if (active && json.success && json.data) {
            setContent(json.data);
          } else if (active && !json.success) {
            setContent("Failed to generate content.");
          }
        } catch (err) {
          console.error("Failed to generate content:", err);
          if (active) setContent("Failed to generate content.");
        } finally {
          if (active) setGeneratingContent(false);
        }
      }
      fetchContent();
      return () => { active = false; };
    }
  }, [activePlatform, selectedHookId, ideaParam]);

  useEffect(() => {
    let active = true;
    if (ideaParam && frameworkParam) {
      async function fetchHooks() {
        try {
          const res = await fetch("/api/generate-hooks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idea: ideaParam, framework: frameworkParam, action: "generate" })
          });
          const json = await res.json();
          if (active && json.success && json.data && json.data.length > 0) {
            const formattedHooks = json.data.map((h: any, i: number) => ({ ...h, id: Date.now() + i }));
            // Ensure the top scoring hook is first
            formattedHooks.sort((a: any, b: any) => b.score - a.score);
            setHooks(formattedHooks);
            setSelectedHookId(formattedHooks[0].id);
          }
        } catch (err) {
          console.error("Failed to generate hooks:", err);
        } finally {
          if (active) setIsInitialLoading(false);
        }
      }
      fetchHooks();
      return () => { active = false; };
    } else {
      setIsInitialLoading(false);
    }
  }, [ideaParam, frameworkParam]);

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
    if (score >= 60) return "text-amber-400 bg-amber-500/10 border-amber-500/30";
    return "text-rose-400 bg-rose-500/10 border-rose-500/30";
  };
  
  const getProgressColor = (score: number) => {
    if (score >= 75) return "bg-emerald-400";
    if (score >= 60) return "bg-amber-400";
    return "bg-rose-400";
  };

  const handleImprove = async () => {
    if (!selectedHook) return;
    setImproving(true);
    try {
      const res = await fetch("/api/generate-hooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          idea: ideaParam, 
          framework: frameworkParam, 
          action: "mutate",
          originalHook: selectedHook.text,
          originalScore: selectedHook.breakdown
        })
      });
      const data = await res.json();
      if (data.success && data.data) {
        const improved = {
          ...data.data,
          id: Date.now()
        };
        setHooks([improved, ...hooks.filter(h => h.id !== selectedHookId)]);
        setSelectedHookId(improved.id);
      }
    } catch (err) {
      console.error("Mutation failed:", err);
    } finally {
      setImproving(false);
    }
  };

  const handlePublish = () => {
    // Pass the winning framework and text to the dashboard 
    router.push("/dashboard");
  };

  if (isInitialLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050308] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-fuchsia-900/5 to-transparent blur-[120px] pointer-events-none" />
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32 mb-8"
        >
          <div className="absolute inset-0 rounded-full border-t-2 border-fuchsia-500 opacity-50 shadow-[0_0_30px_rgba(217,70,239,0.5)]" />
          <div className="absolute inset-2 rounded-full border-r-2 border-cyan-500 opacity-70" />
          <div className="absolute inset-4 rounded-full border-b-2 border-indigo-500 opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold tracking-[0.15em] uppercase text-white mb-2"
        >
          Analyzing Data
        </motion.h2>
        
        <motion.div className="flex flex-col items-center gap-2">
          <p className="text-slate-500 text-sm font-mono tracking-widest uppercase animate-pulse">
            Targeting Framework: <span className="text-fuchsia-400">{frameworkParam}</span>
          </p>
          <p className="text-slate-600 text-[10px] font-mono tracking-[0.3em] uppercase">
            Calculating Performance Scores...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#050308] text-slate-200 font-sans selection:bg-fuchsia-500/30 overflow-x-hidden">
      
      {/* Background Abstract */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-indigo-900/20 via-fuchsia-900/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Top Header */}
      <header className="w-full px-8 py-5 flex items-center justify-between z-20 border-b border-white/5 bg-[#050308]/80 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 group">
             <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </Link>
          <div>
            <h1 className="text-[14px] font-bold tracking-[0.15em] uppercase text-white font-mono flex items-center gap-2">
              Draft Space <span className="px-2 py-0.5 rounded bg-fuchsia-500/10 text-fuchsia-400 text-[9px] border border-fuchsia-500/20">Target: {frameworkParam}</span>
            </h1>
            <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1 truncate max-w-[300px]">
              IDEA: {ideaParam || slug}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           {selectedHook && (
             <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500">Active Score</span>
                <span className={`text-[13px] font-bold ${getScoreColor(selectedHook.score).split(' ')[0]}`}>
                  {selectedHook.score}/100
                </span>
             </div>
           )}
           <button 
             onClick={handlePublish}
             className="px-8 py-3 rounded-full bg-white text-black font-bold text-[12px] tracking-[0.1em] hover:bg-slate-200 transition-colors uppercase shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2"
           >
             Publish & Track <Send className="w-4 h-4 ml-1" />
           </button>
        </div>
      </header>

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-6 py-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
        
        {/* LEFT PANEL: HOOK ENGINE */}
        <section className="flex flex-col h-full">
           <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-3 tracking-tight">
                 <Sparkles className="w-5 h-5 text-fuchsia-400" />
                 Hook Engine
              </h2>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-slate-500 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse shadow-[0_0_8px_rgba(217,70,239,0.6)]" />
                 Live Analysis
              </span>
           </div>

           <div className="space-y-4 overflow-y-auto pr-2 pb-10" style={{ maxHeight: 'calc(100vh - 180px)' }}>
              <AnimatePresence>
                {hooks.map((hook, i) => {
                  const isSelected = selectedHookId === hook.id;
                  const isBest = hook.id === bestHook.id;
                  
                  return (
                    <motion.div 
                      key={hook.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      onClick={() => setSelectedHookId(hook.id)}
                      className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        isSelected 
                          ? 'border-fuchsia-500/50 bg-fuchsia-500/[0.03] shadow-[0_0_30px_-5px_rgba(217,70,239,0.15)]' 
                          : 'border-white/5 bg-[#0a0710] hover:border-white/20'
                      }`}
                    >
                       {isBest && !isSelected && (
                         <div className="absolute -top-3 -right-2 px-3 py-1 bg-emerald-500 text-black text-[9px] font-bold tracking-widest uppercase rounded shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                           Top Performer
                         </div>
                       )}
                       
                       {isSelected && (
                         <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-transparent pointer-events-none rounded-2xl" />
                       )}

                       <div className="flex gap-4 relative z-10">
                          {/* Score Badge */}
                          <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 border ${getScoreColor(hook.score)}`}>
                             <span className="text-xl font-bold leading-none">{hook.score}</span>
                             <span className="text-[8px] uppercase tracking-widest opacity-80 mt-0.5">/100</span>
                          </div>

                          <div className="flex-1">
                             <div className="flex items-center justify-between mb-1.5">
                               <span className="text-[10px] tracking-widest uppercase font-mono text-slate-500">
                                 {hook.type}
                               </span>
                               {isSelected && <CheckCircle2 className="w-4 h-4 text-fuchsia-400" />}
                             </div>
                             <p className={`text-sm md:text-base font-semibold leading-relaxed ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                               "{hook.text}"
                             </p>
                          </div>
                       </div>

                       {/* Expanded Breakdown for Selected Hook */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div 
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: 'auto' }}
                             exit={{ opacity: 0, height: 0 }}
                             className="overflow-hidden"
                           >
                              <div className="mt-6 pt-5 border-t border-white/5 space-y-3">
                                <div className="flex items-end justify-between mb-4">
                                  <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400">Score Breakdown</h4>
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); handleImprove(); }}
                                    disabled={improving}
                                    className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:to-purple-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all disabled:opacity-50"
                                  >
                                    {improving ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Maximize2 className="w-3 h-3" />}
                                    Mutate Hook
                                  </button>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                  {Object.entries(hook.breakdown).map(([key, val]) => (
                                    <div key={key}>
                                      <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                                        <span>{key}</span>
                                        <span className="text-white">{val}/20</span>
                                      </div>
                                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full ${getProgressColor(hook.score)}`} style={{ width: `${(val/20)*100}%` }} />
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/5">
                                  <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-2">Reason (AI Analysis)</h4>
                                  <p className="text-xs text-slate-300 leading-relaxed font-medium bg-white/[0.02] p-3 rounded-lg border border-white/5">
                                    {(hook as any).reason || "High completion of intended criteria. Connects deeply with outcome-based triggers and demands attention through specific data points."}
                                  </p>
                                </div>
                              </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
           </div>
        </section>

        {/* RIGHT PANEL: CONTENT ENGINE */}
        <section className="flex flex-col h-full mt-8 lg:mt-0">
           <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-3 tracking-tight">
                 <Layers className="w-5 h-5 text-indigo-400" />
                 Content Matrix
              </h2>
           </div>

           <div className="flex flex-col flex-1 bg-[#0a0710] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative">
              
              {/* Tabs */}
              <div className="flex overflow-x-auto no-scrollbar border-b border-white/5 hide-scrollbar">
                 {PLATFORMS.map(platform => (
                    <button
                      key={platform}
                      onClick={() => setActivePlatform(platform)}
                      className={`px-6 py-5 text-[11px] font-bold tracking-[0.1em] uppercase whitespace-nowrap border-b-2 transition-all ${
                        activePlatform === platform 
                          ? 'text-white border-indigo-500 bg-white/[0.02]' 
                          : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-white/[0.01]'
                      }`}
                    >
                      {platform}
                    </button>
                 ))}
              </div>

              {/* Editor Area */}
              <div className="flex-1 p-6 lg:p-8 flex flex-col relative group">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity" />
                 
                 {/* Hook preview pinned to top */}
                 <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-[#a5abb6] mb-2 flex items-center justify-between">
                     Selected Hook <span className="text-fuchsia-400">LOCKED</span>
                   </p>
                   <p className="text-slate-200 font-semibold leading-relaxed">
                     "{selectedHook?.text}"
                   </p>
                 </div>

                 <textarea
                   value={content}
                   onChange={(e) => setContent(e.target.value)}
                   className="flex-1 w-full bg-transparent resize-none outline-none text-[15px] leading-[1.8] text-slate-300 font-medium placeholder:text-slate-600 focus:ring-0 relative z-10"
                   placeholder={`AI rewrites for ${activePlatform} will appear here...`}
                 />

                 <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500">
                      {content.length} / 2200 Chars
                    </span>
                    <button className="px-6 py-2 rounded-lg bg-white/5 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-white/10 hover:text-white transition-colors border border-white/10">
                      Copy Content
                    </button>
                 </div>
              </div>

           </div>
        </section>

      </main>
    </div>
  );
}
