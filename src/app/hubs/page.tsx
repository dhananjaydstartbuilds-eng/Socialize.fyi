"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plus, Search, LayoutGrid, List as ListIcon, MoreVertical, LayoutDashboard, BarChart2, FileText, Calendar, ChevronDown } from "lucide-react";

const mockHubs = [
  {
    id: "1",
    slug: "ai-tools-small-business",
    title: "3 AI Tools Every Small Business Should Know",
    excerpt: "Stop wasting time on manual tasks. Here are 3 tools...",
    platforms: ["LinkedIn", "X", "Newsletter"],
    status: "Active",
    views: "1.2k",
    created_at: "Mar 16, 2026",
    color: "bg-[#254641]"
  },
  {
    id: "2",
    slug: "q2-product-update",
    title: "Q2 Product Update: New Dashboard",
    excerpt: "We're excited to announce the completely redesigned...",
    platforms: ["LinkedIn", "Instagram"],
    status: "Draft",
    views: "-",
    created_at: "Mar 14, 2026",
    color: "bg-[#e2cdc0]"
  },
  {
    id: "3",
    slug: "remote-work-tips",
    title: "How to stay productive when working remotely",
    excerpt: "Remote work is here to stay, but it can be hard to...",
    platforms: ["X", "YouTube Short", "Newsletter"],
    status: "Active",
    views: "8.4k",
    created_at: "Mar 10, 2026",
    color: "bg-[#a5b9ce]"
  },
];

export default function HubsPage() {
  const activeTab = "Hubs";

  return (
    <div className="min-h-screen flex bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      {/* Animated Deep Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-emerald-600/20 blur-[150px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-20" />
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
               { name: "Hubs", href: "/hubs", icon: FileText },
               { name: "Scheduler", href: "/scheduler", icon: Calendar }
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
      </aside>

      <main className="flex-1 overflow-y-auto relative z-10">
        <div className="max-w-[1200px] w-full mx-auto px-6 py-12 md:px-10">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">All Hubs</h1>
              <p className="text-slate-400">Manage and track all your ideas in one central locus.</p>
            </motion.div>
            <Link href="/create">
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                New Hub
              </motion.button>
            </Link>
          </header>

          {/* Toolbar Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-3 flex-grow max-w-xl">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search hubs... (Press ⌘K)"
                  className="w-full rounded-2xl border border-white/5 bg-[#130f1c]/80 backdrop-blur-md py-3.5 pl-12 pr-4 text-sm text-white outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner"
                />
              </div>
              <select className="rounded-2xl border border-white/5 bg-[#130f1c]/80 backdrop-blur-md py-3.5 px-4 text-sm text-slate-300 outline-none focus:border-indigo-500/50 shrink-0">
                <option>All Status</option>
                <option>Active</option>
                <option>Drafts</option>
              </select>
            </div>
            <div className="flex items-center gap-1 rounded-2xl bg-[#130f1c]/50 border border-white/5 p-1.5 hidden md:flex backdrop-blur-md">
              <button className="rounded-xl bg-white/10 p-2.5 text-white shadow-sm">
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button className="rounded-xl p-2.5 text-slate-500 hover:text-white hover:bg-white/5 transition-colors">
                <ListIcon className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Grid Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockHubs.map((hub, i) => (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + (i * 0.1) }}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-white/5 bg-[#0c0814]/80 backdrop-blur-xl p-6 shadow-lg hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)] transition-all overflow-hidden"
              >
                {/* Image top accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-20 blur-3xl rounded-full ${hub.status === 'Active' ? 'bg-indigo-500' : 'bg-amber-500'}`} />
                
                <div className="absolute top-6 right-5 z-10">
                  <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="z-10 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      hub.status === 'Active' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30' : 'bg-slate-500/10 text-slate-400 border border-slate-500/30'
                    }`}>
                      {hub.status}
                    </span>
                    <span className="text-xs text-slate-500 font-mono tracking-wider">{hub.created_at}</span>
                  </div>
                  <Link href={`/p/${hub.slug}`} className="block group-hover:-translate-y-1 transition-transform">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                      {hub.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {hub.excerpt}
                    </p>
                  </Link>
                </div>

                <div className="mt-8 pt-5 flex items-center justify-between border-t border-white/5 z-10 relative">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {hub.platforms.slice(0, 3).map((platform, i) => (
                        <div key={platform} className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1a1423] border border-white/10 text-[10px] font-bold text-slate-300 z-10 hover:-translate-y-1 transition-transform" title={platform}>
                          {platform.substring(0, 1)}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-0.5">Views</p>
                    <p className="text-xl font-bold text-white leading-none">{hub.views}</p>
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
