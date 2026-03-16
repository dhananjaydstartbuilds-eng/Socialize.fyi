"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  BarChart2, LayoutDashboard, FileText, Calendar, TrendingUp, AlertCircle, Activity, ChevronRight
} from "lucide-react";
import { useRef } from "react";

const tabs = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Analytics", icon: BarChart2, href: "/analytics" },
  { name: "Master Posts", icon: FileText, href: "/master-posts" },
  { name: "Scheduler", icon: Calendar, href: "/scheduler" }
];

export default function AnalyticsPage() {
  const activeTab = "Analytics";
  const containerRef = useRef(null);

  const topPosts = [
    { title: "The Neural Web Transition", platform: "LinkedIn", views: "312K", eng: "12.4K", growth: "+14%" },
    { title: "Founders Strategy: Open Source", platform: "X", views: "840K", eng: "41.2K", growth: "+28%" },
    { title: "Micro-Interaction Trends for V2", platform: "LinkedIn", views: "89K", eng: "4.1K", growth: "+2%" },
    { title: "Zero Trust Social Architecture", platform: "Instagram", views: "56K", eng: "8.9K", growth: "+45%" },
  ];

  return (
    <div className="min-h-screen flex bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-600/10 blur-[150px] rounded-full mix-blend-screen"
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
          
          <header className="mb-12">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Deep Analytics
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-slate-400 text-sm md:text-base font-medium">
              Analyze trajectory and resonance across all interconnected data hubs.
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard title="TOTAL IMPRESSIONS" value="3.4M" trend="+24.1%" chartColor="text-fuchsia-400" />
            <MetricCard title="TOTAL REACH" value="1.2M" trend="+12.5%" chartColor="text-indigo-400" />
            <MetricCard title="ENGAGEMENT RATE" value="4.8%" trend="+0.4%" chartColor="text-emerald-400" />
            <MetricCard title="CONVERSION CTR" value="2.9%" trend="-0.1%" chartColor="text-rose-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
             <div className="lg:col-span-2 p-8 rounded-[2rem] bg-[#0c0814]/80 backdrop-blur-xl border border-white/5 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                   <h3 className="text-lg font-bold text-white flex items-center gap-2"><TrendingUp className="w-5 h-5 text-indigo-400" /> Impressions Over Time</h3>
                   <select className="bg-[#130f1c] border border-white/10 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 outline-none">
                     <option>Last 30 Days</option>
                     <option>Last 90 Days</option>
                   </select>
                </div>
                {/* SVG mock chart */}
                <div className="w-full h-[300px] relative">
                   <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible preserve-3d">
                     <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="rgba(99,102,241,0.5)" />
                           <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                        </linearGradient>
                     </defs>
                     <path d="M0,40 L0,35 Q10,25 20,30 T40,20 T60,25 T80,10 T100,5 L100,40 Z" fill="url(#chartGradient)" />
                     <motion.path 
                       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeOut" }}
                       d="M0,35 Q10,25 20,30 T40,20 T60,25 T80,10 T100,5" fill="none" stroke="#818cf8" strokeWidth="0.5" strokeLinecap="round"
                       style={{ filter: "drop-shadow(0 0 8px rgba(129,140,248,0.8))" }}
                     />
                     <circle cx="80" cy="10" r="1" fill="#fff" className="animate-pulse" />
                     <circle cx="100" cy="5" r="1.5" fill="#fff" className="animate-pulse" />
                   </svg>
                </div>
             </div>

             <div className="p-8 rounded-[2rem] bg-[#0c0814]/80 backdrop-blur-xl border border-white/5 shadow-lg flex flex-col justify-between">
                <div>
                   <h3 className="text-lg font-bold text-white mb-6">Audience Insights</h3>
                   <div className="space-y-6">
                      <InsightCard icon={Activity} title="Peak Engagement Time" value="Tuesdays, 9:00 AM EST" color="text-amber-400" bg="bg-amber-400/10" />
                      <InsightCard icon={AlertCircle} title="Growth Prediction" value="High likelihood of virality on next X thread." color="text-emerald-400" bg="bg-emerald-400/10" />
                      <InsightCard icon={BarChart2} title="Strongest Platform" value="LinkedIn (62% of traffic)" color="text-blue-400" bg="bg-blue-400/10" />
                   </div>
                </div>
                <button className="mt-8 w-full py-4 rounded-xl bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-slate-300 hover:bg-white/10 transition-colors uppercase">
                   Export Report
                </button>
             </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-[#0c0814]/80 backdrop-blur-xl border border-white/5 shadow-lg">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-white">Top Performing Variants</h3>
                <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1">See All <ChevronRight className="w-4 h-4"/></button>
             </div>

             <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="border-b border-white/10 text-xs font-bold tracking-widest uppercase text-slate-500">
                         <th className="pb-4 pl-4">Post Title</th>
                         <th className="pb-4">Platform</th>
                         <th className="pb-4">Views</th>
                         <th className="pb-4">Engagement</th>
                         <th className="pb-4 text-right pr-4">Growth</th>
                      </tr>
                   </thead>
                   <tbody>
                      {topPosts.map((post, idx) => (
                         <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                            <td className="py-5 pl-4 cursor-pointer font-semibold text-slate-200 group-hover:text-white">{post.title}</td>
                            <td className="py-5 text-sm text-slate-400">
                               <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{post.platform}</span>
                            </td>
                            <td className="py-5 font-mono text-white">{post.views}</td>
                            <td className="py-5 font-mono text-slate-300">{post.eng}</td>
                            <td className="py-5 text-right pr-4 font-mono font-bold text-emerald-400">{post.growth}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function MetricCard({ title, value, trend, chartColor }: any) {
  const isPositive = trend.includes('+');
  return (
    <div className="py-6 px-8 rounded-[2rem] bg-[#0c0814] border border-white/5 flex flex-col justify-between h-[150px] shadow-lg hover:-translate-y-1 transition-transform">
      <div className="flex justify-between items-start">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{title}</p>
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-md ${isPositive ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'}`}>
          {trend}
        </span>
      </div>
      <div className="flex items-end justify-between mt-auto">
        <p className="text-4xl font-bold tracking-tight text-white leading-none">{value}</p>
      </div>
    </div>
  );
}

function InsightCard({ icon: Icon, title, value, color, bg }: any) {
  return (
     <div className="flex gap-4 items-start">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>
           <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div>
           <h4 className="text-[11px] tracking-widest uppercase font-bold text-slate-500 mb-1">{title}</h4>
           <p className="text-sm font-semibold text-white leading-tight">{value}</p>
        </div>
     </div>
  );
}
