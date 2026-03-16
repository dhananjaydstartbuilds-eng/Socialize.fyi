"use client";

import { X, Copy, Wand2, RefreshCcw } from "lucide-react";
import { useState } from "react";

interface BoostResultsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  boostType: string;
  results: string[]; // e.g., ["Tired of generic AI content? Try this instead.", "I analyzed 100 posts..."]
}

export function BoostResultsDrawer({ isOpen, onClose, boostType, results }: BoostResultsDrawerProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl animate-in slide-in-from-right-full duration-300 flex flex-col border-l border-slate-100">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
              <Wand2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 leading-none">{boostType}</h2>
              <p className="mt-1 text-xs text-slate-500">AI-generated enhancements</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
          <p className="text-sm font-medium text-slate-600 mb-6">
            Review the generated options below. Click to copy your favorite.
          </p>

          {results.length > 0 ? (
            results.map((result, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-200"
              >
                <p className="text-sm text-slate-800 leading-relaxed pr-8 whitespace-pre-wrap">
                  {result}
                </p>
                <button
                  onClick={() => handleCopy(result, idx)}
                  className={`absolute right-3 top-3 p-2 rounded-lg transition-all ${
                    copiedIndex === idx 
                      ? "bg-emerald-100 text-emerald-600 opacity-100 scale-100" 
                      : "bg-slate-50 text-slate-400 hover:bg-violet-50 hover:text-violet-600 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100"
                  }`}
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
                {copiedIndex === idx && (
                  <span className="absolute bottom-3 right-4 text-xs font-medium text-emerald-600 animate-in fade-in slide-in-from-bottom-1">
                    Copied!
                  </span>
                )}
              </div>
            ))
          ) : (
            <div className="space-y-4 opacity-50">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 rounded-2xl bg-slate-200 animate-pulse border border-slate-100"></div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-slate-100 bg-white">
          <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition">
            <RefreshCcw className="h-4 w-4" />
            Regenerate Options
          </button>
        </div>

      </div>
    </div>
  );
}
