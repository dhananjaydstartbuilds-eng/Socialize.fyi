"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ErrorStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  fullPage?: boolean;
}

export function ErrorState({ title, description, actionText, onAction, fullPage = false }: ErrorStateProps) {
  const content = (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-center max-w-lg mx-auto relative z-10"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
      
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10 mb-8 shadow-inner border border-red-500/20 relative z-10">
        <AlertTriangle className="h-10 w-10 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
      </div>
      
      <h2 className="text-3xl font-bold text-white tracking-tight relative z-10 mb-4">
        {title || "System Error"}
      </h2>
      <p className="mb-10 text-sm text-red-100/60 leading-relaxed font-mono relative z-10 max-w-md">
        {description || "ERR_UNEXPECTED: We encountered an unexpected fault in the network. Your previous neural vectors are safe."}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
        {onAction ? (
          <button 
            onClick={onAction}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-red-600 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all"
          >
            <RefreshCw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            {actionText || "RETRY CONNECTION"}
          </button>
        ) : null}
        
        <Link 
          href="/dashboard"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#130f1c] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-slate-300 shadow-sm hover:bg-white/5 hover:text-white transition-colors"
        >
          <Home className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          DASHBOARD
        </Link>
      </div>
    </motion.div>
  );

  if (fullPage) {
    return (
      <main className="min-h-screen bg-[#030104] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Deep Mesh Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] right-[20%] w-[50vw] h-[50vw] bg-red-600/20 blur-[150px] rounded-full mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-20" />
        </div>
        {content}
      </main>
    );
  }

  return (
    <div className="rounded-[2rem] border border-red-500/10 bg-[#0c0814]/80 p-16 w-full flex items-center justify-center backdrop-blur-xl relative overflow-hidden">
      {content}
    </div>
  );
}
