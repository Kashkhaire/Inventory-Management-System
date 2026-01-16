import { DollarSign, RotateCw, CheckCircle, AlertTriangle } from "lucide-react"

const stats = [
  {
    title: "Total Inventory Value",
    value: "$2,847,392",
    trend: "+12.5%",
    icon: DollarSign,
    color: "text-blue-600",
  },
  {
    title: "Turnover Rate",
    value: "8.4x",
    trend: "+5.2%",
    icon: RotateCw,
    color: "text-green-600",
  },
  {
    title: "Stock Accuracy",
    value: "97.8%",
    trend: "+2.1%",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    title: "Low Stock Items",
    value: "23",
    trend: "-8.3%",
    icon: AlertTriangle,
    color: "text-orange-500",
  },
]

export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white border border-slate-200 rounded-2xl p-5"
        >
          <div className="flex items-center justify-between">
            <s.icon className={s.color} />
            <span className="text-sm text-green-600">{s.trend}</span>
          </div>
          <p className="text-2xl font-bold mt-4">{s.value}</p>
          <p className="text-sm text-slate-500">{s.title}</p>
        </div>
      ))}
    </div>
  )
}
