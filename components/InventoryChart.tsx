"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { month: "Jan", inStock: 2650, low: 180, out: 15 },
  { month: "Feb", inStock: 2750, low: 160, out: 12 },
  { month: "Mar", inStock: 2800, low: 140, out: 10 },
  { month: "Apr", inStock: 2850, low: 170, out: 14 },
  { month: "May", inStock: 2820, low: 190, out: 16 },
  { month: "Jun", inStock: 2900, low: 200, out: 18 },
]

export default function InventoryChart() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-8">
      <h3 className="text-lg font-semibold mb-6">
        Inventory Status Trends
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
              }}
              formatter={(value: any, name: any) => {
                const label =
                  name === "inStock"
                    ? "In Stock"
                    : name === "low"
                      ? "Low Stock"
                      : "Out of Stock"
                return [value, label]
              }}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="square"
              wrapperStyle={{ marginTop: 12 }}
              formatter={(value) => {
                if (value === "inStock") return "In Stock"
                if (value === "low") return "Low Stock"
                if (value === "out") return "Out of Stock"
                return value
              }}
            />
            <Bar dataKey="inStock" fill="#059669" radius={[6, 6, 0, 0]} />
            <Bar dataKey="low" fill="#f59e0b" radius={[6, 6, 0, 0]} />
            <Bar dataKey="out" fill="#dc2626" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
