"use client";

import { X, Check, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AddLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  platforms: string[];
}

export function AddLinkModal({ isOpen, onClose, platforms }: AddLinkModalProps) {
  const [url, setUrl] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0] || "");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!url || !url.includes("://")) {
      setError("Please enter a valid URL (including http:// or https://)");
      return;
    }
    setError("");
    console.log("Saving:", { platform: selectedPlatform, url });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center font-sans tracking-wide">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#030104]/60 backdrop-blur-xl" 
            onClick={onClose} 
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#0c0814]/90 rounded-[2rem] p-8 shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

            <button 
              onClick={onClose}
              className="absolute right-6 top-6 p-2 text-slate-500 hover:text-white rounded-full hover:bg-white/10 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <LinkIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Add Live Link</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Paste the published URL so you can automatically track its engagement inside this Hub.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Select Platform</label>
                  <div className="grid grid-cols-2 gap-3">
                    {platforms.map(p => (
                      <button
                        key={p}
                        onClick={() => setSelectedPlatform(p)}
                        className={`px-4 py-3 text-sm font-bold rounded-xl border transition-all ${
                          selectedPlatform === p 
                            ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-300 ring-1 ring-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                            : "bg-[#130f1c] border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Post URL</label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="https://linkedin.com/post/..."
                    className={`w-full rounded-xl border py-3.5 px-4 text-sm bg-[#130f1c] text-white shadow-inner transition-all focus:outline-none focus:ring-1 ${
                      error 
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50" 
                        : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/50"
                    }`}
                  />
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-[11px] font-bold tracking-wide text-red-400 uppercase"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-end gap-3 pt-6 border-t border-white/5">
                <button 
                  onClick={onClose}
                  className="px-6 py-3 text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#030104] bg-white hover:bg-slate-200 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
                >
                  <Check className="h-4 w-4" />
                  Save Link
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
