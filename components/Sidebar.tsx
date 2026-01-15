"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Package,
  BarChart3,
  RefreshCcw,
  Folder,
  Settings,
  User,
  ChevronLeft,
} from "lucide-react"

const menu = [
  {
    key: "dashboard",
    label: "Dashboard",
    sub: "Overview & metrics",
    icon: LayoutDashboard,
  },
  {
    key: "inventory",
    label: "Inventory",
    sub: "Product catalog",
    icon: Package,
  },
  {
    key: "analytics",
    label: "Analytics",
    sub: "Insights & reports",
    icon: BarChart3,
  },
  {
    key: "reorders",
    label: "Reorders",
    sub: "Automated reordering",
    icon: RefreshCcw,
  },
  {
    key: "categories",
    label: "Categories",
    sub: "Organize products",
    icon: Folder,
  },
  {
    key: "settings",
    label: "Settings",
    sub: "System configuration",
    icon: Settings,
  },
]

export default function Sidebar() {
  const [active, setActive] = useState("dashboard")
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`h-full bg-white border-r border-slate-200 flex flex-col
      transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Navigation header */}
      <div className="px-6 pt-4 pb-3 border-b border-slate-200">
        <div className="flex items-center justify-between">
          {/* Hide text when collapsed */}
          {!collapsed && (
            <span className="text-sm font-semibold text-slate-600 tracking-wide">
              NAVIGATION
            </span>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-md hover:bg-slate-100 transition"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft
              size={16}
              className={`text-slate-500 transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* SPACE AFTER DIVIDER */}
      <div className="mt-3" />

      {/* Menu */}
      <nav className="flex-1 px-2 space-y-1">
        {menu.map(({ key, label, sub, icon: Icon }) => {
          const isActive = active === key

          return (
            <div
              key={key}
              onClick={() => setActive(key)}
              className={`
                group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                transition-colors duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }
              `}
            >
              <Icon
                size={20}
                className={`
                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 group-hover:text-blue-600"
                  }
                `}
              />

              {!collapsed && (
                <div className="flex-1">
                  <div className="text-sm font-medium">{label}</div>
                  <div
                    className={`text-xs ${
                      isActive
                        ? "text-white/90"
                        : "text-slate-400 group-hover:text-blue-600"
                    }`}
                  >
                    {sub}
                  </div>
                </div>
              )}

              {/* Active indicator */}
              {isActive && !collapsed && (
                <div className="w-1 h-6 bg-white rounded-full ml-auto" />
              )}
            </div>
          )
        })}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-slate-200">
        <div
          className={`flex items-center gap-3 rounded-xl px-3 py-3
          ${collapsed ? "justify-center" : "bg-slate-100"}`}
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <User size={16} />
          </div>

          {!collapsed && (
            <div>
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-slate-500">
                admin@inventorypro.com
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
