"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  Plus, LayoutDashboard, BarChart2, FileText, Calendar, ChevronDown, 
  Search, Filter, MoreHorizontal, ExternalLink, Edit2, Trash2,
  Linkedin, Twitter, Instagram
} from "lucide-react";
import { useRef } from "react";

const masterPosts = [
  {
    id: "1",
    slug: "post-1",
    title: "The Neural Web Transition: 2026 Strategy",
    desc: "Exploring the intersections of decentralized AI and creative workflows...",
    status: "Published",
    date: "OCT 24, 2026",
    views: "421.4K",
    engagement: "18.2K",
    color: "bg-[#254641]",
    platforms: ['linkedin', 'twitter']
  },
  {
    id: "2",
    slug: "post-2",
    title: "Micro-Interaction Trends for Vision Pro 2",
    desc: "How spatial computing is reshaping social engagement dynamics...",
    status: "Draft",
    date: "OCT 22, 2026",
    views: "-",
    engagement: "-",
    color: "bg-[#e2cdc0]",
    platforms: ['linkedin']
  },
  {
    id: "3",
    slug: "post-3",
    title: "Minimalism is Dead: The Rise of Data-Rich UI",
    desc: "Analyzing the shift towards hyper-informative and aesthetically dense design...",
    status: "Scheduled",
    date: "OCT 30, 2026",
    views: "-",
    engagement: "-",
    color: "bg-[#a5b9ce]",
    platforms: ['twitter', 'instagram']
  },
  {
    id: "4",
    slug: "post-4",
    title: "Founders Strategy: Open Source AI",
    desc: "Why building in public with open source models is the only remaining moat.",
    status: "Published",
    date: "OCT 12, 2026",
    views: "1.2M",
    engagement: "54.1K",
    color: "bg-fuchsia-900",
    platforms: ['linkedin', 'twitter', 'instagram']
  },
];

const tabs = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Analytics", icon: BarChart2, href: "/analytics" },
  { name: "Master Posts", icon: FileText, href: "/master-posts" },
  { name: "Scheduler", icon: Calendar, href: "/scheduler" }
];

export default function MasterPostsPage() {
  const activeTab = "Master Posts";
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen flex bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] bg-cyan-600/10 blur-[150px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-30" />
      </div>

      <aside className="w-[280px] flex-shrink-0 border-r border-white/5 bg-[#030104]/80 backdrop-blur-3xl flex flex-col hidden lg:flex z-20">
        <div className="flex items-center gap-4 px-6 py-8">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          >S</motion.div>
          <span className="font-bold text-xl text-white tracking-wide">Socialize.fyi</span>
        </div>

        <nav className="flex-1 mt-4">
          <div className="space-y-2 px-3">
             {tabs.map((item) => {
               const isActive = activeTab === item.name;
               return (
                 <Link
                   key={item.name}
                   href={item.href}
                   className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold relative group ${
                     isActive ? "text-white bg-white/5 shadow-inner" : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                   }`}
                 >
                   {isActive && (
                      <motion.div 
                        layoutId="active-nav"
                        className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-cyan-400 border border-cyan-400 rounded-r-md shadow-[0_0_12px_rgba(34,211,238,0.8)]" 
                      />
                   )}
                   <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   {item.name}
                 </Link>
               )
             })}
          </div>
        </nav>
      </aside>

      <main ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 scroll-smooth">
        <div className="max-w-[1200px] w-full mx-auto px-6 py-12 md:px-10 relative">
          
          <header className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">Master Posts</h1>
              <p className="text-slate-400 text-sm md:text-base font-medium flex items-center gap-2">
                Unified repository for all your core post concepts and variations.
              </p>
            </motion.div>

            <Link href="/create">
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Create Master Post
              </motion.button>
            </Link>
          </header>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#0c0814]/80 backdrop-blur-xl p-4 rounded-3xl border border-white/5 shadow-lg">
             <div className="flex items-center w-full md:w-auto flex-1 gap-4">
                <div className="relative w-full max-w-sm">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                   <input type="text" placeholder="Search master posts..." className="w-full bg-[#130f1c] border border-white/5 rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" />
                </div>
                <button className="h-[46px] px-4 rounded-2xl bg-[#130f1c] border border-white/5 text-slate-300 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                   <Filter className="w-4 h-4" /> Filter
                </button>
             </div>
             
             <div className="flex items-center gap-2 w-full md:w-auto p-1 bg-[#130f1c] rounded-2xl border border-white/5">
                {['All', 'Published', 'Scheduled', 'Drafts'].map((f, i) => (
                   <button key={f} className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all ${i === 0 ? 'bg-white/10 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}>
                      {f}
                   </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {masterPosts.map((post, i) => (
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 key={post.id}
                 className="group flex flex-col rounded-[2rem] bg-[#0c0814]/80 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all shadow-lg hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] overflow-hidden"
               >
                  <div className={`h-32 w-full relative ${post.color} p-6 flex items-end relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-50 mix-blend-overlay z-0" />
                     
                     <div className="relative z-20 flex items-center justify-between w-full">
                        <div className={`px-2.5 py-1 rounded-md mb-2 backdrop-blur-md border ${
                          post.status === 'Published' ? 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300' :
                          post.status === 'Scheduled' ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300' :
                          'bg-amber-500/20 border-amber-400/30 text-amber-300'
                        }`}>
                           <span className="text-[10px] font-bold uppercase tracking-wider">{post.status}</span>
                        </div>
                        <div className="flex -space-x-2">
                           {post.platforms.map((p, idx) => (
                             <div key={idx} className="w-7 h-7 rounded-full bg-slate-900 border-2 border-[#0c0814] flex items-center justify-center relative z-20 shadow-md">
                               {p === 'linkedin' && <Linkedin className="w-3 h-3 text-blue-400" />}
                               {p === 'twitter' && <Twitter className="w-3 h-3 text-slate-200" />}
                               {p === 'instagram' && <Instagram className="w-3 h-3 text-pink-500" />}
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                     <div>
                        <Link href={`/p/${post.slug}`}>
                           <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                             {post.title}
                           </h3>
                        </Link>
                        <p className="text-sm text-slate-400 line-clamp-2 mb-6">{post.desc}</p>
                     </div>

                     <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/5">
                        <div>
                           <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Views</p>
                           <p className="text-xl font-mono text-slate-200">{post.views}</p>
                        </div>
                        <div>
                           <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Engagement</p>
                           <p className="text-xl font-mono text-slate-200">{post.engagement}</p>
                        </div>
                     </div>

                     <div className="flex items-center justify-between pt-4">
                        <span className="text-[11px] text-slate-500 font-mono tracking-wider">{post.date}</span>
                        <div className="flex items-center gap-1">
                           <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors" title="Edit">
                              <Edit2 className="w-4 h-4" />
                           </button>
                           <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors" title="Open Hub">
                              <ExternalLink className="w-4 h-4" />
                           </button>
                           <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-rose-500/20 hover:text-rose-400 transition-colors" title="Delete">
                              <Trash2 className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </main>
    </div>
  );
}
