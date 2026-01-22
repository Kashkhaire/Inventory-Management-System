import { Package, AlertTriangle, Zap, Truck } from "lucide-react"

const stats = [
  {
    icon: Package,
    value: "5",
    label: "Pending Reorders",
    trend: "-12%",
    trendColor: "text-red-500",
  },
  {
    icon: AlertTriangle,
    value: "2",
    label: "Critical Items",
    sub: "Requires immediate attention",
  },
  {
    icon: Zap,
    value: "3",
    label: "Auto-Reorder Active",
    trend: "+8%",
    trendColor: "text-green-600",
  },
  {
    icon: Truck,
    value: "2",
    label: "Active Orders",
    sub: "In transit or processing",
  },
]

export default function ReorderStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => {
        const Icon = s.icon
        return (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-5"
          >
            <div className="flex justify-between items-start">
              <Icon className="text-blue-600" size={22} />
              {s.trend && (
                <span className={`text-sm ${s.trendColor}`}>
                  {s.trend}
                </span>
              )}
            </div>

            <p className="text-3xl font-bold mt-4">{s.value}</p>
            <p className="text-slate-600">{s.label}</p>

            {s.sub && (
              <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
