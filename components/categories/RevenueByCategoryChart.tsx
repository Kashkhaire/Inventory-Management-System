"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Electronics", value: 480000 },
  { name: "Furniture", value: 310000 },
  { name: "Clothing", value: 190000 },
  { name: "Sports Equipment", value: 90000 },
]

export default function RevenueByCategoryChart() {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h3 className="font-semibold mb-4">Revenue by Category</h3>
      <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center">
        Chart here
      </div>
    </div>
  )
}

