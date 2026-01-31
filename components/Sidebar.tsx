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
  Folder,
  ChevronLeft,
  Home,
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
    name: "Categories",
    desc: "Organize products",
    href: "/categories",
    icon: Folder,
  },
  {
    name: "Settings",
    desc: "System configuration",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar({
  onNavigate,
}: {
  onNavigate?: () => void
}) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-full bg-white border-r border-slate-100 flex flex-col transition-all duration-300`}
    >
      {/* HEADER */}
      <div className="px-4 pt-4 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-2 font-bold text-lg whitespace-nowrap">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Home size={18} />
            </div>

            {/* Brand text — ONLY when expanded */}
            {!collapsed && (
              <span className="transition-opacity duration-200">
                InventoryPro
              </span>
            )}
          </div>

          {/* Collapse / Close */}
          <button
            onClick={() => {
              if (onNavigate) {
                // 📱 Mobile → close sidebar
                onNavigate()
              } else {
                // 💻 Desktop → collapse sidebar
                setCollapsed(!collapsed)
              }
            }}
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
              onClick={onNavigate}
              className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition
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

              {active && !collapsed && (
                <span className="absolute right-3 h-5 w-1 rounded-full bg-white" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* USER FOOTER */}
      <div className="p-4 border-t border-slate-100">
        <div
          className={`flex items-center gap-3 bg-slate-50 p-3 rounded-xl ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            A
          </div>

          {!collapsed && (
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-slate-500">
                admin@inventorypro.com
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
