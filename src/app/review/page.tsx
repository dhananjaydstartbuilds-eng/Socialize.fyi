"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Edit3, Trash2, ArrowLeft, RefreshCw, Sparkles } from "lucide-react";
import { VariantEditor } from "@/components/VariantEditor";

const mockPack = {
  originalIdea: "We're launching our new dashboard next week. It's faster, has a dark mode, and connects to 5 new platforms.",
  variants: [
    {
      platform: "LinkedIn",
      content: "Stop wasting time on slow, disconnected dashboards.\n\nNext week, we're changing the game. Our completely rebuilt dashboard is faster, features a sleek Dark Mode, and natively integrates with 5 new platforms.\n\nReady for a smoother workflow? Let me know in the comments.",
      charLimit: 3000,
      color: "text-blue-400 group-hover:text-blue-300",
      bg: "bg-blue-500/10 border-blue-500/20"
    },
    {
      platform: "X Thread",
      content: "It's finally here.\n\nNext week we drop the new Dashboard. What's inside?\n\n⚡️ 2x Faster load times\n🌙 Dark Mode (by popular demand)\n🔌 5 New Platform Integrations\n\nDrop a 🚀 if you want early access.",
      charLimit: 280,
      color: "text-slate-200 group-hover:text-white",
      bg: "bg-slate-500/10 border-slate-500/20"
    },
    {
      platform: "Newsletter",
      content: "Hey team, this is the big one.\n\nNext week we are officially rolling out the new entirely redesigned dashboard you've been asking for.\n\n- It's demonstrably faster\n- We finally added Dark Mode\n- You can link 5 new data sources instantly\n\nLogin on Tuesday to check it out.",
      color: "text-pink-400 group-hover:text-pink-300",
      bg: "bg-pink-500/10 border-pink-500/20"
    }
  ]
};

export default function ReviewPackPage() {
  const [variants, setVariants] = useState(mockPack.variants);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingVariant, setEditingVariant] = useState(null as any);
  const [saving, setSaving] = useState(false);
  const [copyStates, setCopyStates] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    setCopyStates({ ...copyStates, [platform]: true });
    setTimeout(() => {
      setCopyStates((prev) => ({ ...prev, [platform]: false }));
    }, 2000);
  };

  const openEditor = (variant: any) => {
    setEditingVariant(variant);
    setEditorOpen(true);
  };

  const handleSaveVariant = (newContent: string) => {
    setVariants(prev => prev.map(v => 
      v.platform === editingVariant.platform ? { ...v, content: newContent } : v
    ));
  };

  const saveToHub = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      window.location.href = '/dashboard';
    }, 1500); // Simulate API save
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      
      {/* Animated Deep Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/30 blur-[150px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-20" />
      </div>

      {/* Top Banner Navigation */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0c0814]/80 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-20 shadow-lg"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/create" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group tracking-tight">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO GENERATOR
          </Link>
          <div className="flex items-center gap-6">
            <button className="text-sm font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-widest text-[11px]">
              Discard
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={saveToHub}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all disabled:opacity-50"
            >
              {saving ? "SAVING..." : "SAVE ALL TO HUB"}
              {!saving && <ArrowRight className="h-4 w-4" />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <main className="flex-1 overflow-y-auto relative z-10 w-full py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Context Reference */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="sticky top-28 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-fuchsia-400" /> Review Pack
                </h1>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Generated versions for 3 platforms. Tweak them, copy them, or save directly to your Hub.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/5 bg-[#130f1c]/50 p-6 backdrop-blur-md shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/10 blur-2xl rounded-full pointer-events-none" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                  Original Context
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-300 italic relative z-10 font-serif">
                  "{mockPack.originalIdea}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Variant Cards Grid */}
          <div className="flex-1 space-y-6">
            {variants.map((variant, idx) => (
              <motion.div 
                key={variant.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="group rounded-[2rem] border border-white/5 bg-[#0c0814]/80 backdrop-blur-xl p-8 shadow-xl hover:border-white/20 transition-all overflow-hidden relative"
              >
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`flex w-12 h-12 items-center justify-center rounded-2xl font-bold text-lg border ${variant.bg || 'bg-white/5 border-white/10 text-white'} ${variant.color || 'text-white'}`}>
                      {variant.platform[0]}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold leading-tight ${variant.color || 'text-white'}`}>{variant.platform}</h3>
                      <p className="mt-1 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{variant.content.length} chars</p>
                    </div>
                  </div>

                  {/* Inline Action Toolbar */}
                  <div className="flex items-center gap-2 bg-[#130f1c] border border-white/10 rounded-xl p-1.5 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all shadow-lg transform lg:translate-y-2 lg:group-hover:translate-y-0">
                    <button 
                      onClick={() => handleCopy(variant.content, variant.platform)}
                      className="p-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center relative"
                      title="Copy"
                    >
                      {copyStates[variant.platform] ? (
                        <span className="text-xs font-bold text-emerald-400 absolute w-max">COPIED</span>
                      ) : (
                        <Copy className={`h-4 w-4 ${copyStates[variant.platform] ? 'opacity-0' : 'opacity-100'}`} />
                      )}
                    </button>
                    <button 
                      onClick={() => openEditor(variant)}
                      className="p-2.5 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 rounded-lg transition-colors"
                      title="Edit Variant"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <div className="h-4 w-px bg-white/10 mx-1"></div>
                    <button 
                      className="p-2.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Regenerate"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                    <button 
                      className="p-2.5 text-slate-600 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Text Output */}
                <div className="bg-[#130f1c]/50 border border-white/[0.02] rounded-2xl p-6 relative z-10 group-hover:bg-[#130f1c]/80 transition-colors">
                  <p className="text-[15px] sm:text-base text-slate-300 leading-relaxed whitespace-pre-wrap font-medium">
                    {variant.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      {editingVariant && (
        <VariantEditor
          isOpen={editorOpen}
          onClose={() => setEditorOpen(false)}
          platform={editingVariant.platform}
          initialContent={editingVariant.content}
          charLimit={editingVariant.charLimit}
          onSave={handleSaveVariant}
        />
      )}

    </div>
  );
}
