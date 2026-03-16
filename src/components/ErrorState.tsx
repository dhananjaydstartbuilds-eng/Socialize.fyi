import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

interface ErrorStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  fullPage?: boolean;
}

export function ErrorState({ title, description, actionText, onAction, fullPage = false }: ErrorStateProps) {
  const content = (
    <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 mb-6 shadow-sm border border-red-100">
        <AlertTriangle className="h-10 w-10 text-red-500" />
      </div>
      <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
        {title || "Something went wrong"}
      </h2>
      <p className="mt-3 mb-8 text-base text-slate-500 leading-relaxed">
        {description || "We encountered an unexpected error. Don't worry, your previous data is safe. Please try again."}
      </p>
      
      <div className="flex items-center gap-3">
        {onAction ? (
          <button 
            onClick={onAction}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:-translate-y-0.5 transition-all active:translate-y-0"
          >
            <RefreshCw className="h-4 w-4" />
            {actionText || "Try Again"}
          </button>
        ) : null}
        
        <Link 
          href="/dashboard"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
      </div>
    </div>
  );

  if (fullPage) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        {content}
      </main>
    );
  }

  return (
    <div className="rounded-3xl border border-red-100 bg-red-50/30 p-12 w-full flex items-center justify-center">
      {content}
    </div>
  );
}
