"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { name: "Electronics", value: 25, color: "#2563eb" },
  { name: "Furniture", value: 18, color: "#0ea5e9" },
  { name: "Clothing", value: 43, color: "#10b981" },
  { name: "Sports Equipment", value: 14, color: "#f59e0b" },
]

export default function ProductDistributionPie() {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h3 className="font-semibold mb-4">Product Distribution</h3>
      <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center">
        Pie chart here
      </div>
    </div>
  )
}

