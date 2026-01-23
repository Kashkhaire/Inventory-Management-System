"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Electronics", revenue: 487500 },
  { name: "Furniture", revenue: 312400 },
  { name: "Clothing", revenue: 198200 },
  { name: "Sports Equipment", revenue: 93400 },
]

/* ✅ Custom Tooltip (exact UI match) */
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg">
        <p className="text-sm font-medium text-slate-900">
          {label}
        </p>
        <p className="text-sm text-blue-600 mt-1">
          revenue : {payload[0].value}
        </p>
      </div>
    )
  }
  return null
}

export default function RevenueByCategoryChart() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-6">
        Revenue by Category
      </h3>

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={56}
          >
            {/* GRID */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            {/* X AXIS */}
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 13 }}
            />

            {/* Y AXIS */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 13 }}
            />

            {/* HOVER TOOLTIP */}
            <Tooltip
              cursor={{
                fill: "#e5e7eb",
                opacity: 0.8,
              }}
              content={<CustomTooltip />}
            />

            {/* BAR */}
            <Bar
              dataKey="revenue"
              fill="#2563eb"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
