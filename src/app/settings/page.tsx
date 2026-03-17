"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, Moon, Monitor, Sun, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex bg-[#030104] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      {/* Animated Deep Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-violet-600/20 blur-[150px] rounded-full mix-blend-screen"
         />
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHRvPSIwLjA1IiAvPjxwb2x5bGluZSBwb2ludHM9IjQwIDAgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] opacity-20" />
      </div>

      <main className="flex-1 overflow-y-auto relative z-10">
        <div className="max-w-[1000px] w-full mx-auto px-6 py-12 md:px-10">
          
          <div className="mb-10">
            <Link href="/dashboard" className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 mb-6 group w-max transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2"
            >
              Profile Settings
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              Manage your personal details, preferences, and integrations.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Sidebar Navigation */}
            <aside className="md:w-64 flex-shrink-0">
              <nav className="flex flex-col space-y-2">
                {[
                  { id: "profile", label: "Account Information", icon: User },
                  { id: "appearance", label: "Preferences", icon: Monitor },
                  { id: "integrations", label: "Integrations", icon: Bell },
                  { id: "security", label: "Danger Zone", icon: Shield, danger: true }
                ].map((item, idx) => {
                  const isActive = activeTab === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-semibold text-sm ${
                        isActive 
                          ? item.danger ? "bg-red-500/10 text-red-400" : "bg-white/10 text-white shadow-inner" 
                          : item.danger ? "text-red-400/70 hover:bg-red-500/5" : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 opacity-50" />}
                    </motion.button>
                  );
                })}
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1">
              {activeTab === "profile" && (
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[2rem] border border-white/5 bg-[#0c0814]/80 backdrop-blur-xl p-8 shadow-xl"
                >
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-indigo-400" /> Account Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="Jordan Doe"
                        className="w-full rounded-xl border border-white/10 bg-[#130f1c] py-3 px-4 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue="jordan@socialize.fyi"
                        disabled
                        className="w-full rounded-xl border border-white/5 bg-[#0a0710] py-3 px-4 text-sm text-slate-500 cursor-not-allowed"
                      />
                      <p className="mt-2 text-[11px] text-indigo-400 font-mono tracking-wide">Managed by your SSO provider.</p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </motion.section>
              )}

              {activeTab === "appearance" && (
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[2rem] border border-white/5 bg-[#0c0814]/80 backdrop-blur-xl p-8 shadow-xl"
                >
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-cyan-400" /> Preferences
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">Theme</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { id: 'light', icon: Sun, label: 'Light' },
                          { id: 'dark', icon: Moon, label: 'Dark' },
                          { id: 'system', icon: Monitor, label: 'System' }
                        ].map((themeOpt) => (
                           <button 
                             key={themeOpt.id}
                             className={`flex flex-col items-center gap-3 rounded-xl border p-5 transition-all ${
                               themeOpt.id === 'dark' ? 'border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500' : 'border-white/10 bg-[#130f1c] hover:border-white/20 hover:bg-white/5'
                             }`}
                           >
                             <themeOpt.icon className={`h-6 w-6 ${themeOpt.id === 'dark' ? 'text-indigo-400' : 'text-slate-400'}`} />
                             <span className="text-sm font-semibold text-white">{themeOpt.label}</span>
                           </button>
                        ))}
                      </div>
                      <p className="mt-4 text-xs text-slate-500">Dark mode is currently locked for premium vibe checks.</p>
                    </div>
                  </div>
                </motion.section>
              )}

              {activeTab === "security" && (
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[2rem] border border-red-500/20 bg-red-950/10 backdrop-blur-xl p-8 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
                  <h2 className="text-xl font-bold text-red-500 mb-2 flex items-center gap-2 relative z-10">
                    <LogOut className="w-5 h-5" /> Danger Zone
                  </h2>
                  <p className="text-sm text-red-400/80 mb-6 relative z-10">Irreversible actions that affect your entire workspace.</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-t border-red-500/20 relative z-10">
                    <div>
                      <p className="font-bold text-white mb-1">Delete Account</p>
                      <p className="text-xs text-slate-400">Permanently remove all your hubs, data, and active variants.</p>
                    </div>
                    <button className="rounded-full bg-red-600/20 border border-red-500/50 px-6 py-2.5 text-sm font-bold text-red-400 hover:bg-red-600 hover:text-white transition-colors shrink-0">
                      Delete Account...
                    </button>
                  </div>
                </motion.section>
              )}

              {activeTab === "integrations" && (
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[2rem] border border-white/5 bg-[#0c0814]/80 backdrop-blur-xl p-8 shadow-xl"
                >
                  <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-fuchsia-400" /> Integrations
                  </h2>
                  <p className="text-sm text-slate-400 mb-8">Connect your accounts to enable seamless publishing across the neural web.</p>
                  
                  <div className="space-y-4">
                     {[
                       { name: "Twitter / X", connected: true, user: "@jordan_doe", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" },
                       { name: "LinkedIn", connected: false, user: null, style: "bg-white/5 text-slate-400 border-white/10 hover:border-white/30" },
                       { name: "Discord", connected: false, user: null, style: "bg-white/5 text-slate-400 border-white/10 hover:border-white/30" },
                     ].map((int, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-[#130f1c] hover:bg-white/[0.02] transition-colors">
                           <div>
                              <p className="font-bold text-white">{int.name}</p>
                              {int.connected ? (
                                 <p className="text-xs font-mono text-emerald-400 mt-1">Connected as {int.user}</p>
                              ) : (
                                 <p className="text-xs text-slate-500 mt-1">Not connected</p>
                              )}
                           </div>
                           <button className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-colors ${int.style}`}>
                              {int.connected ? 'Disconnect' : 'Connect'}
                           </button>
                        </div>
                     ))}
                  </div>
                </motion.section>
              )}
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
