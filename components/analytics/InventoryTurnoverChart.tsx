"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", actual: 7, target: 8 },
  { month: "Feb", actual: 7.5, target: 8 },
  { month: "Mar", actual: 8, target: 8 },
  { month: "Apr", actual: 8.2, target: 8 },
  { month: "May", actual: 9, target: 8 },
]

export default function InventoryTurnoverChart() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-4">Inventory Turnover Rate</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="actual" fill="#2563eb" radius={[6, 6, 0, 0]} />
            <Bar dataKey="target" fill="#38bdf8" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
