"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Copy, Edit3, Trash2, ArrowLeft } from "lucide-react";
import { VariantEditor } from "@/components/VariantEditor";

const mockPack = {
  originalIdea: "We're launching our new dashboard next week. It's faster, has a dark mode, and connects to 5 new platforms.",
  variants: [
    {
      platform: "LinkedIn",
      content: "Stop wasting time on slow, disconnected dashboards.\n\nNext week, we're changing the game. Our completely rebuilt dashboard is faster, features a sleek Dark Mode, and natively integrates with 5 new platforms.\n\nReady for a smoother workflow? Let me know in the comments.",
      charLimit: 3000,
    },
    {
      platform: "X Thread",
      content: "It's finally here.\n\nNext week we drop the new Dashboard. What's inside?\n\n⚡️ 2x Faster load times\n🌙 Dark Mode (by popular demand)\n🔌 5 New Platform Integrations\n\nDrop a 🚀 if you want early access.",
      charLimit: 280,
    },
    {
      platform: "Newsletter",
      content: "Hey team, this is the big one.\n\nNext week we are officially rolling out the new entirely redesigned dashboard you've been asking for.\n\n- It's demonstrably faster\n- We finally added Dark Mode\n- You can link 5 new data sources instantly\n\nLogin on Tuesday to check it out.",
    }
  ]
};

export default function ReviewPackPage() {
  const [variants, setVariants] = useState(mockPack.variants);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingVariant, setEditingVariant] = useState(null as any);
  const [saving, setSaving] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
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
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-32">
      
      {/* Top Banner Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Generator
          </button>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-red-600 transition">
              Discard
            </button>
            <button 
              onClick={saveToHub}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-violet-700/50 hover:bg-violet-700 transition disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save All to Hub"}
              {!saving && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col lg:flex-row gap-10">
        
        {/* Left Column: Context Reference */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-28 space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Review Pack</h1>
              <p className="mt-2 text-sm text-slate-500">
                Generated 3 platforms successfully. Review and tweak them below before saving.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 mt-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-3">Original Context</h3>
              <p className="text-sm leading-relaxed text-indigo-900/80 italic border-l-2 border-indigo-300 pl-3">
                "{mockPack.originalIdea}"
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Variant Cards Grid */}
        <div className="flex-1 space-y-8">
          {variants.map((variant) => (
            <div key={variant.platform} className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`flex w-10 h-10 items-center justify-center rounded-xl font-bold text-sm ${
                    variant.platform === 'LinkedIn' ? 'bg-blue-100 text-blue-700' : 
                    variant.platform === 'X Thread' ? 'bg-slate-100 text-slate-800' :
                    'bg-pink-100 text-pink-700'
                  }`}>
                    {variant.platform[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 leading-none">{variant.platform}</h3>
                    <p className="mt-1 text-xs font-medium text-slate-400 uppercase tracking-widest">{variant.content.length} chars</p>
                  </div>
                </div>

                {/* Inline Action Toolbar */}
                <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-xl p-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleCopy(variant.content)}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg transition tooltip"
                    title="Copy"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => openEditor(variant)}
                    className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition"
                    title="Edit Variant"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <div className="h-4 w-px bg-slate-200 mx-1"></div>
                  <button 
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Text Output */}
              <p className="text-base text-slate-800 leading-relaxed whitespace-pre-wrap font-sans">
                {variant.content}
              </p>
            </div>
          ))}
        </div>

      </div>

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

    </main>
  );
}
