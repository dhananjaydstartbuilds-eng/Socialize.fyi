"use client";

import { X, Copy, Wand2, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BoostResultsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  boostType: string;
  results: string[]; 
}

export function BoostResultsDrawer({ isOpen, onClose, boostType, results }: BoostResultsDrawerProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end font-sans tracking-wide">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#030104]/80 backdrop-blur-xl" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-md h-full bg-[#0c0814]/95 border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Drawer Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#130f1c]/50 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.15)]">
                  <Wand2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white leading-tight">{boostType}</h2>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-fuchsia-400/80">AI-generated enhancements</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2.5 text-slate-500 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-8 bg-transparent relative z-10 space-y-6">
              <p className="text-sm font-medium text-slate-400 mb-8 leading-relaxed">
                Review the generated options below. Click to copy your favorite variation and paste it into your editor.
              </p>

              {results.length > 0 ? (
                results.map((result, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    key={idx}
                    className="group relative rounded-2xl bg-[#130f1c] border border-white/5 p-6 shadow-lg hover:shadow-[0_0_30px_rgba(217,70,239,0.1)] hover:border-fuchsia-500/30 transition-all duration-300"
                  >
                    <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed pr-8 whitespace-pre-wrap font-medium">
                      {result}
                    </p>
                    <button
                      onClick={() => handleCopy(result, idx)}
                      className={`absolute right-4 top-4 p-2.5 rounded-xl transition-all ${
                        copiedIndex === idx 
                          ? "bg-emerald-500/20 text-emerald-400 scale-100" 
                          : "bg-white/5 text-slate-500 hover:bg-fuchsia-500/20 hover:text-fuchsia-300 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
                      }`}
                      title={copiedIndex === idx ? "Copied!" : "Copy to clipboard"}
                    >
                      {copiedIndex === idx ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider block">Copied</span>
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </motion.div>
                ))
              ) : (
                <div className="space-y-6 opacity-50">
                  {[1, 2, 3].map(i => (
                    <motion.div 
                      key={i} 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="h-28 rounded-2xl bg-[#130f1c] border border-white/5"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            <div className="p-8 border-t border-white/5 bg-[#0c0814] relative z-20">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#130f1c] px-6 py-4 text-sm font-bold text-white shadow-lg hover:bg-white/5 transition-colors uppercase tracking-widest"
              >
                <RefreshCcw className="h-4 w-4 text-fuchsia-400" />
                Regenerate Options
              </motion.button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
