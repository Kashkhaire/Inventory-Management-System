"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  BarChart3,
  RefreshCcw,
  Bell,
  Search,
  Home,
  Folder,
  Settings,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Inventory", href: "/inventory", icon: Package },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Reorders", href: "/reorders", icon: RefreshCcw },
  { label: "Categories", href: "/categories", icon: Folder },
  { label: "Settings", href: "/settings", icon: Settings },
]

export default function Topbar({
  onMenuClick,
}: {
  onMenuClick?: () => void
}) {
  const pathname = usePathname()

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-8">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="md:hidden w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center"
        >
          <Home size={18} />
        </button>

        {/* Desktop logo */}
        <div className="hidden md:flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Home size={18} />
          </div>
          InventoryPro
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href

            return (
              <Link
                key={label}
                href={href}
                className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                <Icon
                  size={16}
                  className={
                    active
                      ? "text-white"
                      : "text-slate-500 group-hover:text-blue-600"
                  }
                />
                {label}
              </Link>
            )
          })}
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
        <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Account
        </button>
      </div>
    </header>
  )
}
