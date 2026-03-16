"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calendar, LayoutDashboard, BarChart2, FileText, ChevronLeft, ChevronRight, Clock, Plus, ArrowUpRight
} from "lucide-react";
import { useState } from "react";

const tabs = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Analytics", icon: BarChart2, href: "/analytics" },
  { name: "Master Posts", icon: FileText, href: "/master-posts" },
  { name: "Scheduler", icon: Calendar, href: "/scheduler" }
];

const scheduleItems = [
  { time: "09:00 AM", title: "Micro-Interaction Trends for Vision Pro 2", platform: "LinkedIn", status: "Scheduled", color: "bg-blue-600" },
  { time: "01:30 PM", title: "Zero Trust Social Architecture", platform: "X", status: "Scheduled", color: "bg-slate-800" },
  { time: "05:00 PM", title: "Minimalism is Dead: The Rise of Data-Rich UI", platform: "Instagram", status: "Draft", color: "bg-pink-600" }
];

export default function SchedulerPage() {
  const activeTab = "Scheduler";
  const [view, setView] = useState("Week");

  return (
    <div className="min-h-screen flex bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-30" />
      </div>

      <aside className="w-[280px] flex-shrink-0 border-r border-white/5 bg-[#030104]/80 backdrop-blur-3xl flex flex-col hidden lg:flex z-20">
        <div className="flex items-center gap-4 px-6 py-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(99,102,241,0.5)]">S</div>
          <span className="font-bold text-xl text-white tracking-wide">Socialize.fyi</span>
        </div>
        <nav className="flex-1 mt-4">
          <div className="space-y-2 px-3">
             {tabs.map((item) => {
               const isActive = activeTab === item.name;
               return (
                 <Link key={item.name} href={item.href}
                   className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-semibold relative group ${isActive ? "text-white bg-white/5 shadow-inner" : "text-slate-400 hover:text-white hover:bg-white/[0.03]"}`}>
                   {isActive && <motion.div layoutId="active-nav" className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-cyan-400 border border-cyan-400 rounded-r-md shadow-[0_0_12px_rgba(34,211,238,0.8)]" />}
                   <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   {item.name}
                 </Link>
               )
             })}
          </div>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 scroll-smooth">
        <div className="max-w-[1300px] w-full mx-auto px-6 py-12 md:px-10 relative">
          
          <header className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">Scheduler Engine</h1>
              <p className="text-slate-400 text-sm md:text-base font-medium">Orchestrate and automate cross-platform publication.</p>
            </div>
            <div className="flex items-center gap-4 p-1 bg-[#130f1c] rounded-2xl border border-white/5">
                {['Day', 'Week', 'Month'].map(v => (
                   <button key={v} onClick={() => setView(v)} className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${view === v ? 'bg-white/10 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}>
                      {v}
                   </button>
                ))}
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
             
             {/* Main Calendar Section */}
             <div className="xl:col-span-2 p-8 rounded-[2rem] bg-[#0c0814]/80 backdrop-blur-xl border border-white/5 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="text-2xl font-bold text-white tracking-tight">October 24 - 30, 2026</h2>
                   <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5"/></button>
                      <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5"/></button>
                   </div>
                </div>

                {/* Day columns wrapper */}
                <div className="grid grid-cols-7 gap-4 min-h-[500px]">
                   {['Mon 24', 'Tue 25', 'Wed 26', 'Thu 27', 'Fri 28', 'Sat 29', 'Sun 30'].map((day, dIdx) => (
                      <div key={day} className="flex flex-col border-r border-white/5 last:border-0 pr-4">
                         <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center mb-6">{day}</h4>
                         
                         <div className="flex-1 relative space-y-4">
                            {/* Dummy rendering a post on specific days for UX demo */}
                            {dIdx === 1 && (
                               <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl cursor-pointer hover:-translate-y-1 transition-transform relative group">
                                  <div className="absolute top-0 right-0 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight className="w-3 h-3 text-white"/></div>
                                  <p className="text-[10px] text-blue-300 font-mono mb-1 flex items-center gap-1"><Clock className="w-3 h-3"/> 09:00</p>
                                  <p className="text-xs font-bold text-white line-clamp-3">Master: Neural Web Transition...</p>
                               </motion.div>
                            )}
                            {dIdx === 3 && (
                               <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="p-3 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl cursor-pointer hover:-translate-y-1 transition-transform">
                                  <p className="text-[10px] text-fuchsia-300 font-mono mb-1 flex items-center gap-1"><Clock className="w-3 h-3"/> 14:00</p>
                                  <p className="text-xs font-bold text-white line-clamp-3">X Thread: Micro-Interactions...</p>
                               </motion.div>
                            )}
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Quick Schedule Panel */}
             <div className="p-6 rounded-[2rem] bg-[#110c1a]/90 backdrop-blur-3xl border border-white/5 shadow-xl sticky top-8">
                <h3 className="text-xl font-bold text-white mb-6">Quick Schedule</h3>
                
                <div className="space-y-6">
                   <div>
                      <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">Select Target Concept</label>
                      <select className="w-full bg-[#08050d] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-200 outline-none focus:border-indigo-500/50 appearance-none">
                         <option>Micro-Interaction Trends for V2</option>
                         <option>The Neural Web Transition</option>
                      </select>
                   </div>
                   
                   <div>
                      <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">Distribution Platform</label>
                      <div className="grid grid-cols-2 gap-3">
                         <button className="py-2.5 rounded-xl border border-blue-500/50 bg-blue-500/10 text-xs font-bold text-blue-300 tracking-wide">LinkedIn</button>
                         <button className="py-2.5 rounded-xl border border-white/10 bg-[#08050d] text-xs font-bold text-slate-400 hover:text-white transition-colors">X Thread</button>
                         <button className="py-2.5 rounded-xl border border-white/10 bg-[#08050d] text-xs font-bold text-slate-400 hover:text-white transition-colors">Instagram</button>
                         <button className="py-2.5 rounded-xl border border-white/10 bg-[#08050d] text-xs font-bold text-slate-400 hover:text-white transition-colors">Newsletter</button>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">Date</label>
                         <input type="date" className="w-full bg-[#08050d] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none" defaultValue="2026-10-25" />
                      </div>
                      <div>
                         <label className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">Time</label>
                         <input type="time" className="w-full bg-[#08050d] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none" defaultValue="09:00" />
                      </div>
                   </div>

                   <button className="w-full mt-4 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 transition-all">
                      <Plus className="w-4 h-4"/> Schedule Distribution
                   </button>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                   <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">Upcoming Executions</h4>
                   <div className="space-y-3">
                      {scheduleItems.map((item, i) => (
                         <div key={i} className="flex gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 items-center">
                            <span className="text-xs font-mono text-slate-400 whitespace-nowrap">{item.time}</span>
                            <div className="w-1 h-8 rounded-full bg-slate-700 overflow-hidden relative"><div className={`absolute inset-0 ${item.color}`}></div></div>
                            <div className="flex-1">
                               <p className="text-xs font-bold text-white line-clamp-1">{item.title}</p>
                               <span className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 block">{item.platform}</span>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
