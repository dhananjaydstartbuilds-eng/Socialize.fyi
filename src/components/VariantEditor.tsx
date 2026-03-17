"use client";

import { X, Check, Sparkles, Zap, Minimize2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VariantEditorProps {
  isOpen: boolean;
  onClose: () => void;
  platform: string;
  initialContent: string;
  charLimit?: number;
  onSave: (content: string) => void;
}

export function VariantEditor({ isOpen, onClose, platform, initialContent, charLimit, onSave }: VariantEditorProps) {
  const [content, setContent] = useState(initialContent);

  const count = content.length;
  const isOverLimit = charLimit ? count > charLimit : false;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans tracking-wide">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#030104]/80 backdrop-blur-xl" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#0c0814]/95 rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] border border-white/10 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Editor Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#130f1c]/50 backdrop-blur-md z-20">
              <div className="flex items-center gap-4">
                <div className="flex w-10 h-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                  {platform[0]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight leading-tight">Edit {platform}</h2>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-slate-500">Variant fine-tuning</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2.5 text-slate-500 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Editor Area */}
            <div className="flex-1 overflow-y-auto p-8 relative z-10 bg-transparent">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-full min-h-[300px] bg-transparent resize-none outline-none text-slate-200 text-base sm:text-lg leading-relaxed font-medium placeholder:text-slate-600 selection:bg-indigo-500/30"
                placeholder="Compose your variant..."
                autoFocus
              />
            </div>

            {/* Editor Footer / Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-8 py-5 border-t border-white/5 bg-[#0c0814] z-20">
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest ${isOverLimit ? 'text-red-400' : 'text-slate-500'}`}>
                  <span className={`h-2 w-2 rounded-full ${isOverLimit ? 'bg-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : count > 0 ? 'bg-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-slate-600'}`}></span>
                  {count} {charLimit ? `/ ${charLimit}` : ''} chars
                </div>
                
                <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
                
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                    <button className="flex items-center gap-1.5 text-indigo-400 hover:text-white hover:bg-indigo-500/20 px-3 py-1.5 rounded-lg transition-colors border border-indigo-500/20 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                      <Zap className="w-3 h-3" /> Punchier
                    </button>
                    <button className="flex items-center gap-1.5 text-fuchsia-400 hover:text-white hover:bg-fuchsia-500/20 px-3 py-1.5 rounded-lg transition-colors border border-fuchsia-500/20 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                      <Minimize2 className="w-3 h-3" /> Shorten
                    </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-white/5 sm:border-0">
                <button 
                  onClick={onClose}
                  className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => { onSave(content); onClose(); }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#030104] bg-white hover:bg-slate-200 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all whitespace-nowrap"
                >
                  <Check className="h-4 w-4" />
                  Save
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
