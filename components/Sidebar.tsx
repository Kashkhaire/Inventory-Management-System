"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  LayoutDashboard,
  Package,
  BarChart3,
  RefreshCcw,
  Settings,
  ChevronLeft,
} from "lucide-react"

const menu = [
  {
    name: "Dashboard",
    desc: "Overview & metrics",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Inventory",
    desc: "Product catalog",
    href: "/inventory",
    icon: Package,
  },
  {
    name: "Analytics",
    desc: "Insights & reports",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Reorders",
    desc: "Automated reordering",
    href: "/reorders",
    icon: RefreshCcw,
  },
  {
    name: "Settings",
    desc: "System configuration",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white border-r border-slate-200 flex flex-col transition-all duration-300`}
    >
      {/* NAVIGATION HEADER */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <span className="text-xs font-semibold tracking-wider text-slate-500">
              NAVIGATION
            </span>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-slate-100"
          >
            <ChevronLeft
              size={18}
              className={`transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Divider */}
        <div className="mt-3 border-b border-slate-200" />
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 py-4 space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition
                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
            >
              <Icon size={20} />

              {!collapsed && (
                <div className="leading-tight">
                  <div className="font-medium">{item.name}</div>
                  <div
                    className={`text-xs ${
                      active ? "text-blue-100" : "text-slate-400"
                    }`}
                  >
                    {item.desc}
                  </div>
                </div>
              )}

              {/* Active indicator bar */}
              {active && (
                <span className="ml-auto h-5 w-1 rounded-full bg-white" />
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
