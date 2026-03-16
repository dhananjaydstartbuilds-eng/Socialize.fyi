import { FolderKanban, AlertCircle, Link as LinkIcon, BarChart3 } from "lucide-react";
import Link from "next/link";

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
      title: title || "No hubs created yet",
      description: description || "Start a new idea to bring it to life across multiple platforms.",
      action: actionText || "Create Master Post",
      href: actionHref || "/create",
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
    variants: {
      icon: AlertCircle,
      title: title || "No variants generated",
      description: description || "Generate your distribution pack to see platform-specific variants here.",
      action: actionText || "Generate Pack",
      color: "text-slate-500",
      bg: "bg-slate-100",
    },
    metrics: {
      icon: BarChart3,
      title: title || "No engagement tracked yet",
      description: description || "Add your live links to start compounding your data centrally.",
      action: actionText || "Add Link",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    links: {
      icon: LinkIcon,
      title: title || "No outbound links",
      description: description || "You haven't posted this anywhere yet. Get it out there and paste the links here.",
      action: actionText || "Add Live Link",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50/50 py-16 px-6 text-center animate-in fade-in duration-500">
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${config.bg} mb-5`}>
        <Icon className={`h-8 w-8 ${config.color}`} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{config.title}</h3>
      <p className="mt-2 mb-6 max-w-sm text-sm text-slate-500">{config.description}</p>
      
      {actionHref ? (
        <Link 
          href={actionHref}
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
        >
          {config.action}
        </Link>
      ) : onAction ? (
        <button 
          onClick={onAction}
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
        >
          {config.action}
        </button>
      ) : null}
    </div>
  );
}
