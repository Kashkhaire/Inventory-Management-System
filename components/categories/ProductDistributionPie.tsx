"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"

const data = [
  { name: "Electronics", value: 25, color: "#2563eb" },
  { name: "Furniture", value: 18, color: "#0ea5e9" },
  { name: "Clothing", value: 43, color: "#10b981" },
  { name: "Sports Equipment", value: 14, color: "#f59e0b" },
]

/* ✅ Custom tooltip (clean, same style as bar chart) */
function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg">
        <p className="text-sm font-medium text-slate-900">
          {payload[0].name}
        </p>
        <p
          className="text-sm mt-1"
          style={{ color: payload[0].payload.color }}
        >
          {payload[0].value}%
        </p>
      </div>
    )
  }
  return null
}

/* ✅ Label renderer → "Category: XX%" */
const RADIAN = Math.PI / 180

const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  value,
  fill,
}: any) => {
  const radius = outerRadius + 18
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={13}
      fontWeight={500}
    >
      {name}: {value}%
    </text>
  )
}

export default function ProductDistributionPie() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-6">
        Product Distribution
      </h3>

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine
              label={renderLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />

            {/* Legend */}
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="square"
              formatter={(value) => (
                <span className="text-sm text-slate-700">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
