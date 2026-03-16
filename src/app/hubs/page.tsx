import Link from "next/link";
import { Plus, Search, LayoutGrid, List as ListIcon, MoreVertical } from "lucide-react";

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
  },
];

export default function HubsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">All Hubs</h1>
            <p className="mt-1 text-slate-500">Manage and track all your ideas in one place.</p>
          </div>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-violet-700 transition"
          >
            <Plus className="h-4 w-4" />
            New Hub
          </Link>
        </div>

        {/* Toolbar Section */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-grow max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search hubs... (Press ⌘K)"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition shadow-sm"
              />
            </div>
            <select className="rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-sm outline-none shadow-sm focus:border-violet-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Drafts</option>
            </select>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 p-1 shadow-sm hidden md:flex">
            <button className="rounded-lg bg-slate-100 p-2 text-slate-700 shadow-sm">
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button className="rounded-lg p-2 text-slate-400 hover:text-slate-700">
              <ListIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockHubs.map((hub) => (
            <div
              key={hub.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all hover:border-slate-300"
            >
              <div className="absolute top-6 right-5">
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    hub.status === 'Active' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20' : 'bg-slate-100 text-slate-600 ring-1 ring-slate-500/20'
                  }`}>
                    {hub.status}
                  </span>
                  <span className="text-xs text-slate-400">{hub.created_at}</span>
                </div>
                <Link href={`/p/${hub.slug}`} className="block">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-600 transition-colors line-clamp-2">
                    {hub.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                    {hub.excerpt}
                  </p>
                </Link>
              </div>

              <div className="mt-6 pt-5 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-medium text-slate-500">Variants:</span>
                  <div className="flex -space-x-1">
                    {/* Placeholder for platform icons */}
                    {hub.platforms.slice(0, 3).map((platform, i) => (
                      <div key={platform} className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 border border-white text-[10px] font-bold text-slate-600 z-10" title={platform}>
                        {platform.substring(0, 1)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">{hub.views}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">Total Engagements</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
