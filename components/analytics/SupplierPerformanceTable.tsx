"use client"

import { CheckCircle } from "lucide-react"

const suppliers = [
  {
    name: "Global Supply Co.",
    delivery: 98,
    quality: "9.5/10",
    orders: 247,
    leadTime: "5 days",
    status: "Excellent",
  },
  {
    name: "Premier Distributors",
    delivery: 95,
    quality: "9.2/10",
    orders: 189,
    leadTime: "7 days",
    status: "Excellent",
  },
  {
    name: "Reliable Logistics Inc.",
    delivery: 92,
    quality: "8.8/10",
    orders: 156,
    leadTime: "8 days",
    status: "Good",
  },
  {
    name: "Express Wholesale",
    delivery: 88,
    quality: "8.5/10",
    orders: 134,
    leadTime: "10 days",
    status: "Good",
  },
  {
    name: "Budget Suppliers Ltd.",
    delivery: 82,
    quality: "7.8/10",
    orders: 98,
    leadTime: "12 days",
    status: "Needs Improvement",
  },
]

function statusColor(status: string) {
  if (status === "Excellent") return "text-green-600"
  if (status === "Good") return "text-blue-600"
  return "text-orange-600"
}

export default function SupplierPerformanceTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl">
      <div className="p-6">
        <h3 className="text-lg font-semibold">
          Supplier Performance
        </h3>
        <p className="text-sm text-slate-500">
          Key metrics for vendor evaluation
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-t border-b border-slate-200">
            <tr className="text-left text-slate-500">
              <th className="px-6 py-3">SUPPLIER</th>
              <th className="px-6 py-3">ON-TIME DELIVERY</th>
              <th className="px-6 py-3">QUALITY SCORE</th>
              <th className="px-6 py-3">TOTAL ORDERS</th>
              <th className="px-6 py-3">AVG LEAD TIME</th>
              <th className="px-6 py-3">STATUS</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((s, i) => (
              <tr
                key={i}
                className="border-b border-slate-200 last:border-0"
              >
                <td className="px-6 py-4 font-medium">
                  {s.name}
                </td>

                <td className="px-6 py-4 flex items-center gap-2">
                  {s.delivery}%
                  <CheckCircle
                    size={16}
                    className="text-green-600"
                  />
                </td>

                <td className="px-6 py-4">
                  {s.quality}
                </td>

                <td className="px-6 py-4">
                  {s.orders}
                </td>

                <td className="px-6 py-4">
                  {s.leadTime}
                </td>

                <td className={`px-6 py-4 font-medium ${statusColor(s.status)}`}>
                  {s.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
