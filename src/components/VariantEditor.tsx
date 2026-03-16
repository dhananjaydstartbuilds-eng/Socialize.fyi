"use client";

import { X, Check } from "lucide-react";
import { useState } from "react";

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

  if (!isOpen) return null;

  const count = content.length;
  const isOverLimit = charLimit ? count > charLimit : false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-200 p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Editor Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className={`flex w-8 h-8 items-center justify-center rounded-lg font-bold text-xs ${
              platform === 'LinkedIn' ? 'bg-blue-100 text-blue-700' : 
              platform === 'X Thread' ? 'bg-slate-100 text-slate-800' :
              platform === 'Instagram' ? 'bg-pink-100 text-pink-700' :
              'bg-slate-100 text-slate-700'
            }`}>
              {platform[0]}
            </div>
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Edit {platform} Variant</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Editor Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50 p-6 relative">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full min-h-[300px] bg-transparent resize-none outline-none text-slate-800 text-base leading-relaxed font-sans placeholder:text-slate-400"
            placeholder="Write your variant..."
            autoFocus
          />
        </div>

        {/* Editor Footer / Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-t border-slate-100 bg-white z-10">
          
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className={`flex items-center gap-1.5 ${isOverLimit ? 'text-red-500' : 'text-slate-500'}`}>
              <span className={`h-2 w-2 rounded-full ${isOverLimit ? 'bg-red-500' : count > 0 ? 'bg-emerald-400' : 'bg-slate-300'}`}></span>
              {count} {charLimit ? `/ ${charLimit}` : ''} chars
            </div>
            
            <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
            
            <div className="flex items-center gap-2 hidden sm:flex">
                <button className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 px-2 py-1 rounded-md transition text-xs font-semibold">Make it punchier</button>
                <button className="text-violet-600 hover:text-violet-700 hover:bg-violet-50 px-2 py-1 rounded-md transition text-xs font-semibold">Shorten</button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition"
            >
              Cancel
            </button>
            <button 
              onClick={() => { onSave(content); onClose(); }}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-xl shadow-md ring-1 ring-violet-700/50 transition whitespace-nowrap"
            >
              <Check className="h-4 w-4" />
              Save Variant
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
