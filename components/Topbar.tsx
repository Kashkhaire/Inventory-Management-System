"use client"

import {
  LayoutDashboard,
  Package,
  BarChart3,
  RefreshCcw,
  Bell,
  Search,
  MoreHorizontal,
  Home,
} from "lucide-react"

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Home size={18} />
          </div>
          InventoryPro
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {[
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Inventory", icon: Package },
            { label: "Analytics", icon: BarChart3 },
            { label: "Reorders", icon: RefreshCcw },
            { label: "More", icon: MoreHorizontal },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="
                group flex items-center gap-2 px-3 py-2 rounded-lg
                text-slate-700 cursor-pointer
                hover:bg-blue-50 hover:text-blue-600
                transition-colors duration-200
              "
            >
              <Icon
                size={16}
                className="text-slate-500 group-hover:text-blue-600"
              />
              {label}
            </div>
          ))}
        </nav>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-slate-100">
          <Bell size={18} />
        </button>
        <button className="p-2 rounded-md hover:bg-slate-100">
          <Search size={18} />
        </button>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Account
        </button>
      </div>
    </header>
  )
}
