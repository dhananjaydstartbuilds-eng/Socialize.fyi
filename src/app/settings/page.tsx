"use client";

import { useState } from "react";
import { User, Bell, Shield, Moon, Monitor, Sun } from "lucide-react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("system");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="mt-1 text-slate-500">Manage your account and preferences.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Navigation Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="flex flex-col space-y-1">
              <a href="#profile" className="flex items-center gap-3 rounded-lg bg-slate-200/50 px-3 py-2 text-sm font-medium text-slate-900">
                <User className="h-4 w-4" />
                Profile
              </a>
              <a href="#appearance" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                <Monitor className="h-4 w-4" />
                Appearance
              </a>
              <a href="#notifications" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                <Bell className="h-4 w-4" />
                Notifications
              </a>
              <a href="#security" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                <Shield className="h-4 w-4" />
                Security
              </a>
            </nav>
          </aside>

          {/* Settings Content */}
          <div className="flex-1 space-y-8">
            {/* Profile Section */}
            <section id="profile" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold border-b border-slate-100 pb-4 mb-6">Profile Information</h2>
              <form className="space-y-6 max-w-xl">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Jane Doe"
                    className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    defaultValue="jane@socialize.fyi"
                    disabled
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm text-slate-500"
                  />
                  <p className="mt-1.5 text-xs text-slate-500">Your email is managed by your authentication provider.</p>
                </div>
                
                <div className="pt-2">
                  <button type="button" className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-violet-700">
                    Save Changes
                  </button>
                </div>
              </form>
            </section>

            {/* Appearance Section */}
            <section id="appearance" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold border-b border-slate-100 pb-4 mb-6">Appearance</h2>
              <div className="space-y-6 max-w-xl">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Theme</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button 
                      onClick={() => setTheme('light')}
                      className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${theme === 'light' ? 'border-violet-500 ring-1 ring-violet-500 bg-violet-50' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      <Sun className="h-6 w-6 text-slate-600" />
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    <button 
                      onClick={() => setTheme('dark')}
                      className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${theme === 'dark' ? 'border-violet-500 ring-1 ring-violet-500 bg-violet-50' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      <Moon className="h-6 w-6 text-slate-600" />
                      <span className="text-sm font-medium">Dark</span>
                    </button>
                    <button 
                      onClick={() => setTheme('system')}
                      className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${theme === 'system' ? 'border-violet-500 ring-1 ring-violet-500 bg-violet-50' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      <Monitor className="h-6 w-6 text-slate-600" />
                      <span className="text-sm font-medium">System</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <section id="security" className="rounded-2xl border border-red-200 bg-red-50/30 p-6">
              <h2 className="text-lg font-semibold text-red-700 pb-4">Danger Zone</h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 border-t border-red-100">
                <div>
                  <p className="font-medium text-slate-900 text-sm">Delete Account</p>
                  <p className="text-sm text-slate-500 mt-0.5">Permanently delete your account and all associated hubs.</p>
                </div>
                <button className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 shrink-0">
                  Delete Account...
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
