import {
  Package,
  AlertTriangle,
  XCircle,
  DollarSign,
} from "lucide-react"

const stats = [
  {
    label: "Total Products",
    value: 8,
    icon: <Package className="text-blue-600" />,
  },
  {
    label: "Low Stock Items",
    value: 3,
    icon: <AlertTriangle className="text-orange-500" />,
  },
  {
    label: "Out of Stock",
    value: 1,
    icon: <XCircle className="text-red-500" />,
  },
  {
    label: "Total Inventory Value",
    value: "$34,798.78",
    icon: <DollarSign className="text-green-600" />,
  },
]

export default function InventoryStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-slate-100">
            {s.icon}
          </div>

          <div>
            <p className="text-sm text-slate-600">{s.label}</p>
            <p className="text-xl font-bold text-slate-900">
              {s.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
