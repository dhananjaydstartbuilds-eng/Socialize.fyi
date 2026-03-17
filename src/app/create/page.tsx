"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Send } from "lucide-react";
import Link from "next/link";

export default function CreatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState("");
  const [framework, setFramework] = useState("Contrarian");

  const FRAMEWORKS = [
    "Contrarian", "Curiosity gap", "Outcome-driven", 
    "Mistake/warning", "Authority/tested insight"
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!idea.trim()) return;
    
    setLoading(true);
    // Simulate generation delay
    setTimeout(() => {
      setLoading(false);
      // Navigate to the Hook Engine screen with parameters
      const params = new URLSearchParams();
      params.set("idea", idea);
      params.set("framework", framework);
      router.push(`/p/new-post-id?${params.toString()}`);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-[#030104] text-slate-200 font-sans selection:bg-fuchsia-500/30 overflow-hidden relative flex flex-col justify-center items-center">
      
      {/* Deep Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] bg-indigo-600/30 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 20, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] bg-fuchsia-600/20 blur-[150px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="w-full max-w-3xl px-6 relative z-10 flex flex-col min-h-screen py-10 justify-between">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors group text-sm font-bold tracking-widest uppercase">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center my-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/10 border border-white/10 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(217,70,239,0.3)]">
                <Sparkles className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                The Engine.
              </h1>
            </div>
            <p className="text-lg text-slate-400 max-w-xl mb-10">
              Plant a single raw idea. We'll extract the hooks, predict performance, and adapt it everywhere. 
            </p>
          </motion.div>

          {/* Framework Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mb-8 space-y-3"
          >
            <label className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-slate-700" /> Optional Target Framework
            </label>
            <div className="flex flex-wrap gap-3">
               {FRAMEWORKS.map(fw => (
                 <button
                   key={fw}
                   type="button"
                   onClick={() => setFramework(fw)}
                   className={`px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest border transition-all ${
                     framework === fw 
                       ? 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/50 shadow-[0_0_20px_rgba(217,70,239,0.2)]' 
                       : 'bg-transparent text-slate-400 hover:text-white border-white/10 hover:border-white/30'
                   }`}
                 >
                   {fw}
                 </button>
               ))}
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="relative group w-full"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-focus-within:opacity-50 transition duration-500" />
            
            <div className="relative bg-[#0c0814]/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-2 flex flex-col md:flex-row items-center gap-4 focus-within:border-fuchsia-500/50 transition-colors shadow-2xl">
              <textarea
                required
                disabled={loading}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="What exactly do you want to talk about today?"
                className="w-full bg-transparent p-6 outline-none text-white text-lg placeholder:text-slate-600 resize-none min-h-[80px] md:min-h-[60px] flex-1 block overflow-hidden leading-relaxed"
                rows={1}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'px';
                  target.style.height = Math.max(60, target.scrollHeight) + 'px';
                }}
              />
              
              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className="w-full md:w-auto self-end md:self-center mr-2 px-8 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed group/btn hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-slate-800/30 border-t-slate-800 rounded-full animate-spin" />
                ) : (
                  <>
                    Build Engine <Send className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex items-center justify-center gap-6 text-[11px] font-bold tracking-[0.2em] text-slate-600 uppercase"
          >
            <span>5 Hooks</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>AI Scoring</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Format Matrix</span>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
