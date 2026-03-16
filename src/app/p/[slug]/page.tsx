"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { Zap, BarChart2, Shuffle, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const mockVariants = [
  { platform: "LINKEDIN", status: "Active", brand: "in", brandColor: "bg-blue-600", content: "The era of centralized social is ending. In 2026, we're seeing the \"Great On-Chain Migration.\" Every professional interaction is becoming a verifiable asset...\n\n#Web3 #FutureOfWork", impressions: "42.8k", ctr: "4.2%", stat1Label: "IMPRESSIONS", stat2Label: "CTR" },
  { platform: "X ENGINE", status: "Draft", brand: "X", brandColor: "bg-white text-black", content: "\"2026 is the year social media actually becomes yours. Decentralized protocols > Algorithms. The shift is already here. 🧵 \"", impressions: "1.1k", ctr: "HOT", stat1Label: "REPOSTS", stat2Label: "HYPE", isDraft: true },
  { platform: "INSTAGRAM", status: "Active", brand: "IG", brandColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500", content: "Aesthetic capture of the decentralized world. #Ownership #CreatorEconomy2026", impressions: "RE-GENERATE VISUAL", isVisual: true },
];

export default function PostHubPage({ params }: Props) {
  const { slug } = use(params);

  return (
    <div className="min-h-screen flex flex-col bg-[#08050d] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Top Header */}
      <header className="w-full px-8 py-6 flex flex-col sm:flex-row items-center justify-between z-20 relative">
        <div className="flex flex-col mb-4 sm:mb-0">
           <h1 className="text-2xl font-bold tracking-[0.2em] uppercase text-white font-mono flex items-center gap-3">
             <span className="bg-white text-black w-2 h-6 inline-block" />
             LIVING POST HUB
           </h1>
           <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1 ml-5">
             Unified Orchestration Engine v4.2.0
           </span>
        </div>
        
        <div className="flex items-center gap-4">
           <button className="px-6 py-2 rounded-full border border-white/20 text-[11px] text-white tracking-[0.1em] hover:bg-white/10 transition-colors uppercase font-bold">
             RE-SYNC ALL
           </button>
           <div className="w-10 h-10 rounded-full border-2 border-cyan-500 overflow-hidden cursor-pointer">
             <div className="w-full h-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center">
                <div className="w-full h-full bg-slate-800" />
             </div>
           </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 pb-12 z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 relative">
        
        {/* Dynamic Abstract Background inside main container */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-indigo-900/10 via-purple-900/5 to-transparent blur-[100px] pointer-events-none" />

         {/* Left Sidebar - Boost Tools & Vitals */}
         <aside className="space-y-6 order-2 lg:order-1 mt-6">
            
            {/* Boost Panel */}
            <div className="p-1 rounded-[1.5rem] bg-[#0c0814] border border-white/5 space-y-4 pt-6">
               <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-fuchsia-500 mb-4 px-6">Boost Tools</h3>
               
               <div className="space-y-2 px-4 pb-4">
                 <BoostCard 
                   icon={<Zap className="w-4 h-4 text-fuchsia-400" />} 
                   title="Viral Resonance" 
                   desc="Predictive trend injection"
                   iconBg="bg-fuchsia-500/10"
                 />
                 <BoostCard 
                   icon={<BarChart2 className="w-4 h-4 text-cyan-400" />} 
                   title="Sentiment Shift" 
                   desc="Real-time audience mood"
                   iconBg="bg-cyan-500/10"
                 />
                 <BoostCard 
                   icon={<Shuffle className="w-4 h-4 text-cyan-400" />} 
                   title="Smart Adapt" 
                   desc="Auto-variant generation"
                   iconBg="bg-cyan-500/20"
                   containerBg="bg-cyan-500/10 border-cyan-500/30"
                   titleCol="text-cyan-400"
                   descCol="text-cyan-400/70"
                 />
               </div>
            </div>

            {/* Network Vitals panel */}
            <div className="p-6 rounded-[1.5rem] bg-[#0c0814] border border-white/5 space-y-6">
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">Network Vitals</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#130f1c] border border-white/5">
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Latency</p>
                     <p className="text-xl font-mono text-white">12ms</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#130f1c] border border-white/5">
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Nodes</p>
                     <p className="text-xl font-mono text-white">418</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#130f1c] border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Global Reach</p>
                  <p className="text-2xl font-bold text-cyan-400 mb-3">1.2M+</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "80%" }}
                       transition={{ duration: 1.5, ease: "easeOut" }}
                       className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                     />
                  </div>
                </div>
            </div>
         </aside>

         {/* Right Main Content */}
         <div className="order-1 lg:order-2 flex flex-col">
            
            {/* Master Concept Header Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative p-10 rounded-[1.5rem] mb-6 overflow-hidden border border-white/5"
            >
               {/* Gradients */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#172535] to-[#25122b]" />
               
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                 <div className="max-w-2xl">
                    <div className="inline-block px-3 py-1 bg-transparent border border-[#16606a] text-[#4ed9db] tracking-[0.1em] text-[10px] uppercase font-bold rounded mb-6">
                       MASTER CONCEPT
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                       Decentralized Social Ecosystems: The 2026 Shift in Creator Ownership
                    </h2>
                    <p className="text-[#a5abb6] text-sm leading-relaxed max-w-[90%]">
                       Exploring the convergence of sovereign identity and community-owned platforms. How creators are moving away from centralized algorithms to direct-to-onchain engagement models.
                    </p>
                 </div>

                 <div className="flex items-center gap-6 flex-shrink-0 mt-4 md:mt-0">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center min-w-[100px] backdrop-blur-md">
                       <span className="text-[10px] tracking-widest text-[#a5abb6] uppercase mb-1">AI SCORE</span>
                       <span className="text-3xl font-bold text-white tracking-widest leading-none">98.4</span>
                    </div>

                    <button className="h-full bg-white text-black rounded-xl px-6 py-4 flex items-center justify-center gap-3 font-bold text-[13px] tracking-widest hover:bg-slate-200 transition-colors whitespace-nowrap">
                       EDIT MASTER <span className="text-lg leading-none">→</span>
                    </button>
                 </div>
               </div>
            </motion.div>

            {/* Platform Variants Grid (The "Engines") */}
            <div className="grid md:grid-cols-3 gap-6 flex-1 items-stretch">
               {mockVariants.map((variant, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    key={variant.platform}
                    className="flex flex-col rounded-[1.5rem] bg-[#0c0814] border border-white/5 relative overflow-hidden h-full group pb-6"
                  >
                     {/* Platform Header */}
                     <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-white text-[10px] tracking-wide ${variant.brandColor}`}>
                             {variant.brand}
                           </div>
                           <span className="font-mono text-[11px] text-slate-300 tracking-[0.1em]">{variant.platform}</span>
                        </div>
                        
                        {/* Status Pulse Indicator */}
                        <div className="relative flex items-center justify-center w-2 h-2">
                           <span className={`w-1.5 h-1.5 rounded-full ${variant.status === 'Active' ? 'bg-[#2dd4bf]' : 'bg-[#eab308]'}`} />
                        </div>
                     </div>

                     {/* Content Body */}
                     <div className="p-6 flex-1 flex flex-col justify-between">
                        <div className="mb-6">
                           {variant.isVisual ? (
                              <div className="w-full h-32 rounded-lg bg-[#536B73] border border-white/10 flex items-center justify-center relative overflow-hidden mt-6 mb-4 relative cursor-pointer group-hover:border-cyan-500/30 transition-colors">
                                 <div className="w-16 h-20 border-2 border-[#b59868] absolute shadow-lg" />
                                 <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-[#4ed9db] z-10 px-3 py-2 bg-[#2a3c42] border border-[#4ed9db] shadow-[0_0_15px_rgba(78,217,219,0.3)]">
                                   {variant.impressions}
                                 </span>
                              </div>
                           ) : (
                              <p className={`text-[13px] leading-relaxed mb-6 font-medium ${variant.isDraft ? 'text-[#a5abb6] italic' : 'text-slate-200'} whitespace-pre-wrap`}>
                                 {variant.content.split('\n').map((line, idx) => {
                                    if (line.includes('#')) {
                                       return <span key={idx} className="block text-[#4ed9db] mt-2">{line}</span>
                                    }
                                    return <span key={idx}>{line}<br/></span>
                                 })}
                              </p>
                           )}
                           
                           {variant.isVisual && (
                              <p className="text-[12px] text-[#a5abb6] font-medium leading-relaxed">{variant.content}</p>
                           )}
                        </div>

                        {/* Cards logic */}
                        {!variant.isVisual && (
                           <div className="grid grid-cols-2 gap-4 mt-auto">
                              <div className="p-4 rounded-[1.2rem] bg-[#141018] border border-white/[0.02] flex flex-col items-center justify-center">
                                 <span className="text-[9px] uppercase tracking-[0.15em] text-[#6b7280] mb-2">{variant.stat1Label}</span>
                                 <span className="text-xl font-bold tracking-tight text-[#d1d5db]">{variant.impressions}</span>
                              </div>
                               <div className="p-4 rounded-[1.2rem] bg-[#141018] border border-white/[0.02] flex flex-col items-center justify-center">
                                 <span className="text-[9px] uppercase tracking-[0.15em] text-[#6b7280] mb-2">{variant.stat2Label}</span>
                                 <span className="text-xl font-bold tracking-tight text-[#d1d5db]">{variant.ctr}</span>
                              </div>
                           </div>
                        )}
                     </div>

                     {/* Footer Actions */}
                     <div className="px-6 flex gap-3 mt-auto w-full">
                        <button className="flex-1 py-3.5 rounded-xl bg-transparent border border-white/5 text-[10px] font-bold tracking-[0.1em] uppercase text-[#a5abb6] hover:text-white transition-colors">
                           PREVIEW
                        </button>
                        <button className="flex-1 py-3.5 rounded-xl bg-[#0d3439] border border-transparent text-[10px] font-bold tracking-[0.1em] uppercase text-[#4ed9db] hover:bg-[#134950] transition-colors">
                           UPDATE
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* NEW: Hub Activity Feed */}
            <div className="mt-12 p-8 rounded-[1.5rem] bg-[#0c0814] border border-white/5 w-full">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500">Activity Ledger</h3>
                  <button className="text-[10px] text-cyan-400 tracking-widest uppercase hover:underline">View Full Logs</button>
               </div>
               
               <div className="relative border-l border-white/10 ml-4 space-y-10 pb-4">
                  
                  {/* Item 1 */}
                  <div className="relative pl-8">
                     <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                     </span>
                     <p className="text-[10px] font-mono text-slate-500 tracking-wider mb-1">OCT 24, 14:32</p>
                     <p className="text-sm font-semibold text-slate-200">Outbound linked confirmed</p>
                     <p className="text-xs text-slate-400 mt-1">Status changed to <span className="text-emerald-400">Active</span> for LinkedIn variant.</p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative pl-8">
                     <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/50">
                        <Zap className="w-3 h-3 text-fuchsia-400" />
                     </span>
                     <p className="text-[10px] font-mono text-slate-500 tracking-wider mb-1">OCT 24, 09:12</p>
                     <p className="text-sm font-semibold text-slate-200">Boost Action Generated</p>
                     <p className="text-xs text-slate-400 mt-1 italic">"Viral Resonance" hooks generated by AI and saved to draft.</p>
                  </div>

                  {/* Item 3 */}
                  <div className="relative pl-8">
                     <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1e293b] border border-[#334155]">
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                     </span>
                     <p className="text-[10px] font-mono text-slate-500 tracking-wider mb-1">OCT 22, 18:05</p>
                     <p className="text-sm font-semibold text-slate-200">Master Concept Finalized</p>
                     <p className="text-xs text-slate-400 mt-1">Initial variants orchestrated and awaiting review.</p>
                  </div>

               </div>
            </div>

         </div>
      </main>
    </div>
  );
}

function BoostCard({ icon, title, desc, iconBg, containerBg = "bg-transparent border border-transparent", titleCol = "text-white", descCol = "text-[#6b7280]" }: any) {
  return (
    <motion.div 
      whileHover={{ x: 3 }}
      className={`p-3 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/[0.03] transition-all ${containerBg}`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div>
        <h4 className={`text-[13px] font-bold ${titleCol}`}>{title}</h4>
        <p className={`text-[10px] ${descCol}`}>{desc}</p>
      </div>
    </motion.div>
  );
}
