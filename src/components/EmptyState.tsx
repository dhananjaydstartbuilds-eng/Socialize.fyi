"use client";

import { FolderKanban, AlertCircle, Link as LinkIcon, BarChart3 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface EmptyStateProps {
  type: "hubs" | "variants" | "metrics" | "links";
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  onAction?: () => void;
}

export function EmptyState({ type, title, description, actionText, actionHref, onAction }: EmptyStateProps) {
  const configs = {
    hubs: {
      icon: FolderKanban,
      title: title || "No hubs active",
      description: description || "Initialize a new idea to deploy across the neural network.",
      action: actionText || "INITIALIZE MASTER POST",
      href: actionHref || "/create",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
      glow: "bg-indigo-500/20"
    },
    variants: {
      icon: AlertCircle,
      title: title || "Awaiting Generation",
      description: description || "Compile your distribution pack to render platform variants.",
      action: actionText || "GENERATE PACK",
      color: "text-slate-400",
      bg: "bg-white/5 border-white/10",
      glow: "bg-white/5"
    },
    metrics: {
      icon: BarChart3,
      title: title || "Telemetry Offline",
      description: description || "Route live URLs to begin aggregating engagement data.",
      action: actionText || "ATTACH TELEMETRY",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
      glow: "bg-cyan-500/20"
    },
    links: {
      icon: LinkIcon,
      title: title || "No Outbound Nodes",
      description: description || "Distribution sequence incomplete. Publish natively and link the nodes here.",
      action: actionText || "ATTACH LINK",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      glow: "bg-emerald-500/20"
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center rounded-[2rem] border border-white/5 border-dashed bg-[#0c0814]/50 backdrop-blur-sm py-20 px-6 text-center relative overflow-hidden group hover:border-white/10 transition-colors"
    >
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 blur-3xl rounded-full pointer-events-none ${config.glow} opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />
      
      <motion.div 
        animate={{ y: [0, -5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${config.bg} mb-6 shadow-inner relative z-10`}
      >
        <Icon className={`h-8 w-8 ${config.color}`} />
      </motion.div>
      
      <h3 className="text-xl font-bold text-white mb-2 relative z-10">{config.title}</h3>
      <p className="max-w-sm text-sm text-slate-400 leading-relaxed mb-8 relative z-10">{config.description}</p>
      
      {actionHref ? (
        <Link 
          href={actionHref}
          className="relative z-10 rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#030104] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all"
        >
          {config.action}
        </Link>
      ) : onAction ? (
        <button 
          onClick={onAction}
          className="relative z-10 rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#030104] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all"
        >
          {config.action}
        </button>
      ) : null}
    </motion.div>
  );
}
