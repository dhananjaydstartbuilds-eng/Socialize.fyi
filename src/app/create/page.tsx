"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Type, Users, Target, Volume2, Wand2 } from "lucide-react";
import Link from "next/link";

export default function CreatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    originalIdea: "",
    audience: "",
    tone: "Bold and clear",
    cta: "Drive engagement and clicks",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);

    setLoading(false);
    router.push("/dashboard");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <div 
      className="min-h-screen text-slate-100 font-sans selection:bg-purple-500/30 overflow-x-hidden relative"
      style={{ background: "linear-gradient(135deg, #0f001f, #0a021a)" }}
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute top-[0%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[0%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/10 blur-[140px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-medium">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </Link>
        </motion.div>

        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/20 flex items-center justify-center mb-8 shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)]"
          >
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Create Master Post
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl leading-relaxed"
          >
            Plant a single seed idea here. We&apos;ll automatically orchestrate its expansion across the entire digital ecosystem using context-aware AI.
          </motion.p>
        </header>

        <form onSubmit={handleSubmit}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 relative"
          >
            {/* Ambient glow behind form */}
            <div className="absolute inset-0 bg-fuchsia-500/5 blur-[100px] rounded-full pointer-events-none" />

            <FormBlock variants={itemVariants} title="Post Title" icon={<Type className="w-4 h-4 text-purple-400" />}>
              <input
                type="text"
                required
                className="w-full bg-transparent p-4 text-xl outline-none placeholder:text-slate-600 text-white font-medium focus:ring-0"
                placeholder="e.g. My Next Big Product Announcement..."
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </FormBlock>

            <FormBlock variants={itemVariants} title="Core Idea / Master Content" icon={<Wand2 className="w-4 h-4 text-indigo-400" />}>
               <textarea
                required
                className="w-full min-h-[220px] bg-transparent p-4 outline-none placeholder:text-slate-600 text-white resize-y text-lg leading-relaxed focus:ring-0"
                placeholder="Write the raw concept. Don't worry about formatting for platforms—just write what you want to say..."
                value={form.originalIdea}
                onChange={(e) => setForm({ ...form, originalIdea: e.target.value })}
              />
            </FormBlock>

            <div className="grid md:grid-cols-2 gap-8">
              <FormBlock variants={itemVariants} title="Target Audience" icon={<Users className="w-4 h-4 text-cyan-400" />}>
                <input
                  type="text"
                  className="w-full bg-transparent p-4 outline-none placeholder:text-slate-600 text-white focus:ring-0"
                  placeholder="e.g. SaaS Founders, Designers"
                  value={form.audience}
                  onChange={(e) => setForm({ ...form, audience: e.target.value })}
                />
              </FormBlock>

              <FormBlock variants={itemVariants} title="Content Tone" icon={<Volume2 className="w-4 h-4 text-emerald-400" />}>
                <input
                  type="text"
                  className="w-full bg-transparent p-4 outline-none placeholder:text-slate-600 text-white focus:ring-0"
                  placeholder="e.g. Bold, Authoritative, Minimal"
                  value={form.tone}
                  onChange={(e) => setForm({ ...form, tone: e.target.value })}
                />
              </FormBlock>
            </div>

            <FormBlock variants={itemVariants} title="Call to Action (CTA)" icon={<Target className="w-4 h-4 text-rose-400" />}>
              <input
                type="text"
                className="w-full bg-transparent p-4 outline-none placeholder:text-slate-600 text-white focus:ring-0"
                placeholder="e.g. Click the link to join the waitlist"
                value={form.cta}
                onChange={(e) => setForm({ ...form, cta: e.target.value })}
              />
            </FormBlock>

            <motion.div variants={itemVariants} className="pt-8 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-[2rem] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 font-bold text-lg text-white shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"
              >
                {!loading && <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 mix-blend-overlay blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />}
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Generating Ecosystem...
                    </span>
                  ) : (
                    <>Generate Distribution Pack <Sparkles className="w-5 h-5" /></>
                  )}
                </span>
              </button>
            </motion.div>

          </motion.div>
        </form>

      </div>
    </div>
  );
}

// Wrapper component to give each form field that Apple-level premium glassmorphic feel
function FormBlock({ title, children, variants, icon }: { title: string, children: React.ReactNode, variants: any, icon: React.ReactNode }) {
  return (
    <motion.div 
      variants={variants}
      className="group"
    >
      <div className="flex items-center gap-2 mb-3 px-2">
        {icon}
        <h3 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">{title}</h3>
      </div>
      <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-300 focus-within:bg-white/[0.05] focus-within:border-purple-500/50 focus-within:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] overflow-hidden">
        {/* Subtle inner top highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
        
        {children}
      </div>
    </motion.div>
  );
}
