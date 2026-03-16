"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  Plus, LayoutDashboard, BarChart2, FileText, Calendar, ChevronDown, 
  Eye, Share2, Edit2, Trash2, ArrowUpRight
} from "lucide-react";
import { useState, useRef } from "react";

const posts = [
  {
    id: "1",
    slug: "test",
    title: "The Neural Web Transition: 2026 Strategy",
    desc: "Exploring the intersections of decentralized AI and creative workflows...",
    status: "Published",
    date: "OCT 24, 2026",
    views: "421.4K",
    color: "bg-[#254641]"
  },
  {
    id: "2",
    slug: "test",
    title: "Micro-Interaction Trends for Vision Pro 2",
    desc: "How spatial computing is reshaping social engagement dynamics...",
    status: "Draft",
    date: "OCT 22, 2026",
    views: "0",
    color: "bg-[#e2cdc0]"
  },
  {
    id: "3",
    slug: "test",
    title: "Minimalism is Dead: The Rise of Data-Rich UI",
    desc: "Analyzing the shift towards hyper-informative and aesthetically dense design...",
    status: "Published",
    date: "OCT 18, 2026",
    views: "89.2K",
    color: "bg-[#a5b9ce]"
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ container: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen flex bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      
      {/* Animated Deep Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] bg-fuchsia-600/10 blur-[150px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-30" />
      </div>

      {/* Sidebar Navigation */}
      <aside className="w-[280px] flex-shrink-0 border-r border-white/5 bg-[#030104]/80 backdrop-blur-3xl flex flex-col hidden lg:flex z-20">
        <div className="flex items-center gap-4 px-6 py-8">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          >
            S
          </motion.div>
          <span className="font-bold text-xl text-white tracking-wide">Socialize.fyi</span>
        </div>

        <nav className="flex-1 mt-4">
          <div className="space-y-2 px-3">
             {[ 
               { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
               { name: "Analytics", href: "/analytics", icon: BarChart2 },
               { name: "Master Posts", href: "/master-posts", icon: FileText },
               { name: "Scheduler", href: "/scheduler", icon: Calendar },
               {name:"Living Post Hub", href: "/p/test", icon: Calendar}
             ].map((item) => {
               const isActive = activeTab === item.name;
               return (
                 <Link
                   key={item.name}
                   href={item.href}
                   className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold relative group ${
                     isActive 
                       ? "text-white bg-white/5 shadow-inner" 
                       : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
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

        {/* User Card */}
        <div className="p-4 mb-4">
          <motion.button 
            whileHover={{ y: -2 }}
            className="w-full flex items-center gap-3 p-3 rounded-2xl bg-[#0e0a16] border border-white/5 hover:border-white/10 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.05)] transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-200 to-rose-200 flex-shrink-0 ring-2 ring-white/10 group-hover:ring-white/20 transition-all" />
            <div className="flex-1">
              <p className="text-sm font-bold text-white leading-tight">Jordan Doe</p>
              <p className="text-[11px] text-fuchsia-400/80 font-mono mt-0.5">PRO ACCOUNT</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </motion.button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 scroll-smooth">
        <div className="max-w-[1200px] w-full mx-auto px-6 py-12 md:px-10 relative">
          
          <header className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                Workspace Overview
              </h1>
              <p className="text-slate-400 text-sm md:text-base font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                Real-time performance metrics for your 2026 digital footprint.
              </p>
            </motion.div>

            <Link href="/create">
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Create New Post
              </motion.button>
            </Link>
          </header>

          {/* Metrics Row Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <MetricCard title="IMPRESSIONS" value="1.2M" trend="+12.4%" chartColor="text-indigo-400" delay={0.1} />
            <MetricCard title="TOTAL REACH" value="842K" trend="+5.2%" chartColor="text-cyan-400" delay={0.2} />
            <MetricCard title="ENGAGEMENT" value="42.5K" trend="+18.1%" chartColor="text-emerald-400" delay={0.3} />
            <MetricCard title="CONVERSION" value="3.1%" trend="0.0%" chartColor="text-slate-500" delay={0.4} isFlat />
          </div>

          {/* Master Posts List section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <FileText className="w-5 h-5 text-indigo-400" />
              Recent Master Posts
            </h2>
            <button className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
              VIEW ALL <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          <div className="space-y-4">
             {posts.map((post, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.02)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  key={post.id} 
                  className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 p-5 rounded-[2rem] bg-[#0c0814]/80 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all shadow-lg hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)]"
                >
                  <Link href={`/dashboard/p/${post.slug}`} className="absolute inset-0 z-0" />
                  
                  <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
                    {/* Square Image Mockup */}
                    <div className={`w-[72px] h-[72px] rounded-2xl bg-slate-800 flex-shrink-0 flex items-center justify-center p-3 relative overflow-hidden ${post.color} shadow-inner`}>
                       <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                       <div className="w-8 h-10 bg-white/20 rounded-md shadow-lg backdrop-blur-md border border-white/30" />
                    </div>
                    
                    <div>
                      <h3 className="text-[17px] font-bold text-slate-200 group-hover:text-white transition-colors mb-1.5 flex items-center gap-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-1 mb-3 max-w-xl">
                        {post.desc}
                      </p>
                      <div className="flex items-center gap-4">
                         <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${post.status === 'Published' ? 'border-indigo-500/30 bg-indigo-500/10' : 'border-amber-500/30 bg-amber-500/10'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${post.status === 'Published' ? 'bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]' : 'bg-amber-400'}`} />
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${post.status === 'Published' ? 'text-indigo-300' : 'text-amber-300'}`}>{post.status}</span>
                         </div>
                         <span className="text-[11px] text-slate-600 font-mono tracking-wider">{post.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 relative z-10 w-full md:w-auto md:justify-end pr-2">
                     <div className="text-right flex-1 md:flex-initial">
                        <p className="text-lg font-bold text-white tracking-tight">{post.views}</p>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-0.5">Total Views</p>
                     </div>

                     <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                       {post.status === "Published" ? (
                          <>
                             <Link href={`/dashboard/p/${post.slug}`} className="relative z-20">
                               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-colors border border-transparent">
                                 <Eye className="w-4 h-4" />
                               </motion.div>
                             </Link>
                             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors border border-transparent relative z-20">
                               <Share2 className="w-4 h-4" />
                             </motion.button>
                          </>
                       ) : (
                          <>
                             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent relative z-20">
                               <Edit2 className="w-4 h-4" />
                             </motion.button>
                             <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/30 transition-colors border border-transparent relative z-20">
                               <Trash2 className="w-4 h-4" />
                             </motion.button>
                          </>
                       )}
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

function MetricCard({ title, value, trend, chartColor, delay, isFlat = false }: any) {
  const isPositive = trend.includes('+') && !isFlat;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="py-6 px-8 rounded-[2rem] bg-[#0c0814] border border-white/5 flex flex-col justify-between h-[160px] relative overflow-hidden group shadow-lg"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex justify-between items-start relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">{title}</p>
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-md ${isPositive ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 bg-white/5'}`}>
          {trend}
        </span>
      </div>
      
      <div className="flex items-end justify-between mt-auto relative z-10">
        <p className="text-4xl font-bold tracking-tight text-white leading-none">{value}</p>
        
        <div className="w-16 h-10 relative opacity-80 mb-1">
          {!isFlat ? (
             <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
               <motion.path 
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeInOut" }}
                 d="M0,40 Q25,30 40,35 T70,10 T100,5" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="3"
                 strokeLinecap="round"
                 className={chartColor}
                 style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }}
               />
               <motion.path 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.2 }}
                 transition={{ duration: 1, delay: delay + 1.2 }}
                 d="M0,40 Q25,30 40,35 T70,10 T100,5 L100,40 L0,40 Z" 
                 fill="currentColor" 
                 stroke="none"
                 className={chartColor}
               />
             </svg>
          ) : (
             <div className="w-full h-0.5 border-t-2 border-dashed border-slate-700 mt-auto opacity-50" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
