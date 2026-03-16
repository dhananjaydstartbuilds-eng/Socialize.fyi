"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Share2, BarChart3, Zap, Layers } from "lucide-react";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden text-slate-100 font-sans selection:bg-purple-500/30"
      style={{ background: "linear-gradient(135deg, #0f001f, #0a021a)" }}
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: yBg }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen"
        />
        <motion.div 
          style={{ y: yBg }}
          className="absolute top-[40%] -right-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-blue-900/10 blur-[100px] mix-blend-screen"
        />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-50" />
      </div>

      {/* Floating Header */}
      <header className="fixed top-0 inset-x-0 z-50 p-6 flex justify-center pointer-events-none">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl pointer-events-auto"
        >
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Socialize<span className="text-purple-400">.fyi</span></span>
          </div>
          <div className="h-4 w-px bg-white/20 hidden md:block" />
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          </div>
          <Link 
            href="/dashboard"
            className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
          >
            Dashboard
          </Link>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-32 px-6 flex flex-col items-center justify-center min-h-[90vh] text-center">
        <motion.div 
          style={{ opacity: opacityHero, scale: scaleHero }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            Next-Gen Content Hub 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-8"
          >
            Give every idea a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
              permanent home.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed"
          >
            Stop letting your posts disappear into platform silos. Socialize.fyi is the living engine that distributes, tracks, and compounds your content.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <Link href="/create">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-semibold text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-shadow"
              >
                Create Master Post
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/dashboard">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 font-medium text-lg text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Enter Dashboard
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Abstract Dashboard Preview UI */}
      <section className="relative z-10 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2.5rem] p-2 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_100px_-20px_rgba(120,0,255,0.3)] ring-1 ring-white/10"
          >
            {/* Inner Dashboard Mockup */}
            <div className="rounded-[2rem] bg-[#0c0418] border border-white/5 p-6 md:p-10 overflow-hidden relative">
              {/* Glossy highlight over the dashboard */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-500/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-10">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="h-8 w-48 bg-white/5 rounded-full border border-white/5" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                  {/* Master Post Card Mock */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="space-y-2">
                        <div className="h-6 w-64 bg-slate-700/50 rounded-lg animate-pulse" />
                        <div className="h-4 w-40 bg-slate-800/50 rounded-lg" />
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Active</div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mt-8">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-20 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center items-center gap-2">
                          <div className="h-3 w-8 bg-slate-700/50 rounded" />
                          <div className="h-5 w-12 bg-slate-600/50 rounded" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Variants List Mock */}
                  <div className="space-y-3">
                     {[1, 2].map(i => (
                        <motion.div 
                          key={i}
                          whileHover={{ x: 5 }}
                          className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-80" />
                            <div className="space-y-2">
                              <div className="h-4 w-24 bg-slate-700 rounded" />
                              <div className="h-3 w-48 bg-slate-800 rounded" />
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </motion.div>
                     ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Generation Tools Mock */}
                  <motion.div className="p-6 rounded-3xl bg-gradient-to-b from-purple-900/40 to-indigo-900/10 border border-purple-500/20 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/30 blur-3xl" />
                    <Sparkles className="w-6 h-6 text-purple-300 mb-4" />
                    <div className="space-y-4">
                      <div className="h-5 w-32 bg-purple-300/40 rounded mb-6" />
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-12 w-full bg-white/5 rounded-xl border border-white/10" />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grids */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for the <br /> <span className="text-purple-400">ambient web.</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">One core idea mapped across the digital spectrum, converging back to a single source of truth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              delay={0.1}
              icon={<Layers className="w-8 h-8 text-fuchsia-400" />}
              title="One Master Post"
              desc="Draft your concept once. We handle distilling it into the optimal format for every major platform natively."
            />
            <FeatureCard 
              delay={0.2}
              icon={<Share2 className="w-8 h-8 text-indigo-400" />}
              title="Infinite Distribution"
              desc="Generate contextual variants for LinkedIn, X, Instagram, YouTube Shorts, and Newsletters in seconds."
            />
            <FeatureCard 
              delay={0.3}
              icon={<BarChart3 className="w-8 h-8 text-cyan-400" />}
              title="Unified Analytics"
              desc="All engagement—impressions, likes, comments, and clicks—returns to one central living hub for your post."
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative z-10 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#02000a] to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop scattering your ideas. <br /> Start building hubs.</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
              Join the future of content distribution. Turn a passing thought into a compounding asset.
            </p>
            <Link href="/create">
              <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-bold text-lg text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] transition-shadow">
                <span className="relative z-10 flex items-center gap-2">
                  Launch Master Post <Zap className="w-5 h-5 group-hover:fill-white/20" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ title, desc, icon, delay }: { title: string, desc: string, icon: React.ReactNode, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-colors"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
