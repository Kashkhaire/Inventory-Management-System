"use client"

import { useRouter } from "next/navigation"
import {
  Plus,
  RefreshCcw,
  BarChart3,
  QrCode,
  ChevronRight,
} from "lucide-react"

const actions = [
  {
    title: "Add New Product",
    desc: "Register new inventory items",
    color: "bg-blue-600",
    iconBg: "bg-blue-500",
    icon: <Plus size={22} />,
    route: "/inventory",
  },
  {
    title: "Process Reorder",
    desc: "Approve pending reorder requests",
    color: "bg-green-600",
    iconBg: "bg-green-500",
    icon: <RefreshCcw size={22} />,
    route: "/reorders",
  },
  {
    title: "Generate Report",
    desc: "Create inventory analytics report",
    color: "bg-sky-500",
    iconBg: "bg-sky-400",
    icon: <BarChart3 size={22} />,
    route: "/analytics",
  },
  {
    title: "Scan Barcode",
    desc: "Quick product lookup and update",
    color: "bg-orange-500",
    iconBg: "bg-orange-400",
    icon: <QrCode size={22} />,
    route: "/inventory", // or /scanner if you add later
  },
]

export default function QuickActions() {
  const router = useRouter()

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

      <div className="space-y-4">
        {actions.map((a, i) => (
          <div
            key={i}
            onClick={() => router.push(a.route)}
            className={`${a.color} text-white rounded-xl p-5 flex items-center justify-between cursor-pointer hover:opacity-95 transition`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`${a.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                {a.icon}
              </div>

              <div>
                <div className="font-semibold text-lg">{a.title}</div>
                <div className="text-sm opacity-90">{a.desc}</div>
              </div>
            </div>

            <ChevronRight size={22} />
          </div>
        ))}
      </div>
    </div>
  )
}
