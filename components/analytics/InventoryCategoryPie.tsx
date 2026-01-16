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
  { name: "Electronics", value: 30, color: "#2563eb" },
  { name: "Furniture", value: 22, color: "#0ea5e9" },
  { name: "Clothing", value: 17, color: "#10b981" },
  { name: "Home Goods", value: 15, color: "#f59e0b" },
  { name: "Sports Equipment", value: 10, color: "#ef4444" },
  { name: "Other", value: 7, color: "#64748b" },
]

/* 🔹 Pie labels (NO lines, exact text) */
const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  value,
  fill,
}: any) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius + 22
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {name} {value}%
    </text>
  )
}

/* 🔹 Small bottom legend */
const CustomLegend = ({ payload }: any) => (
  <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
    {payload.map((entry: any, index: number) => (
      <li key={index} className="flex items-center gap-1.5">
        <span
          className="w-3 h-3 rounded-sm"
          style={{ backgroundColor: entry.color }}
        />
        <span className="text-[11px] text-slate-600">
          {entry.value}
        </span>
      </li>
    ))}
  </ul>
)

export default function InventoryCategoryPie() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-1">
        Inventory by Category
      </h3>

      <p className="text-sm text-slate-500 mb-6">
        Distribution of stock value across categories
      </p>

      {/* ✅ Increased height */}
      <div className="h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={renderLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip formatter={(v) => `${v}%`} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
