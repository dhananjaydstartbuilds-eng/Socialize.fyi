"use client";

import { X, Check } from "lucide-react";
import { useState } from "react";

interface AddLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  platforms: string[]; // e.g., ['LinkedIn', 'X', 'Newsletter']
}

export function AddLinkModal({ isOpen, onClose, platforms }: AddLinkModalProps) {
  const [url, setUrl] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0] || "");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!url || !url.includes("://")) {
      setError("Please enter a valid URL (including http:// or https://)");
      return;
    }
    setError("");
    // Handle saving the link to the DB here...
    console.log("Saving:", { platform: selectedPlatform, url });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl scale-100 animate-in zoom-in-95 duration-200 border border-slate-100">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 tracking-tight">Add Live Post Link</h2>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            Paste the published URL so you can easily track its engagement later.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Select Platform</label>
            <div className="grid grid-cols-2 gap-2">
              {platforms.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPlatform(p)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl border transition-all ${
                    selectedPlatform === p 
                      ? "bg-violet-50 border-violet-500 text-violet-700 ring-1 ring-violet-500" 
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Post URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError("");
              }}
              placeholder="https://linkedin.com/post/..."
              className={`w-full rounded-xl border py-3 px-4 text-sm shadow-sm transition-all focus:outline-none focus:ring-1 ${
                error 
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500 text-slate-900" 
                  : "border-slate-200 focus:border-violet-500 focus:ring-violet-500"
              }`}
            />
            {error && <p className="mt-2 text-xs font-medium text-red-500 animate-in slide-in-from-top-1">{error}</p>}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg ring-1 ring-slate-900/10 transition"
          >
            <Check className="h-4 w-4" />
            Save Link
          </button>
        </div>
      </div>
    </div>
  );
}
