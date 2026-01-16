"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts"

const data = [
  { month: "Jan", y2024: 42000, y2025: 45000, forecast: 47000 },
  { month: "Feb", y2024: 44000, y2025: 48000, forecast: 50000 },
  { month: "Mar", y2024: 48000, y2025: 52000, forecast: 54000 },
  { month: "Apr", y2024: 51000, y2025: 55000, forecast: 57000 },
  { month: "May", y2024: 54000, y2025: 58000, forecast: 60000 },
  { month: "Jun", y2024: 57000, y2025: 62000, forecast: 64000 },
]

export default function SeasonalDemandChart() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-1">
        Seasonal Demand Trends
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Year-over-year comparison with forecast
      </p>

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* GRID */}
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e5e7eb"
            />

            {/* AXES */}
            <XAxis
              dataKey="month"
              tick={{ fill: "#64748b", fontSize: 12 }}
            />
            <YAxis
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickFormatter={(v) => `${v / 1000}k`}
            />

            {/* TOOLTIP – FIXED */}
            <Tooltip
              formatter={(value) =>
                value?.toLocaleString() ?? ""
              }
            />

            {/* LEGEND */}
            <Legend />

            {/* 2024 */}
            <Line
              type="monotone"
              dataKey="y2024"
              name="2024"
              stroke="#64748b"
              strokeWidth={2}
              dot={{ r: 4 }}
            />

            {/* 2025 */}
            <Line
              type="monotone"
              dataKey="y2025"
              name="2025"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ r: 4 }}
            />

            {/* FORECAST */}
            <Line
              type="monotone"
              dataKey="forecast"
              name="Forecast"
              stroke="#22c55e"
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
