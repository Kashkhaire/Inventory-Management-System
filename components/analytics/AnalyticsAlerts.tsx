"use client"

import {
  AlertTriangle,
  AlertCircle,
  Info,
} from "lucide-react"
import React from "react"

/* ---------- TYPES ---------- */
type AlertType = "critical" | "warning" | "info"

interface Alert {
  type: AlertType
  title: string
  description: string
  time: string
}

/* ---------- DATA ---------- */
const alerts: Alert[] = [
  {
    type: "critical",
    title: "Critical Stock Level",
    description:
      "Electronics category has 15 items below minimum threshold requiring immediate reorder.",
    time: "2 hours ago",
  },
  {
    type: "warning",
    title: "Supplier Performance Drop",
    description:
      "Budget Suppliers Ltd. on-time delivery rate dropped to 82% this month.",
    time: "5 hours ago",
  },
  {
    type: "info",
    title: "Seasonal Trend Alert",
    description:
      "Furniture category showing 18% increase compared to last year - consider increasing stock.",
    time: "1 day ago",
  },
  {
    type: "warning",
    title: "Turnover Rate Below Target",
    description:
      "Home Goods category turnover rate is 6.2x, below target of 8.0x.",
    time: "1 day ago",
  },
  {
    type: "info",
    title: "Forecast Update Available",
    description:
      "Q1 2026 demand forecast has been updated based on recent trends.",
    time: "2 days ago",
  },
]

/* ---------- STYLES ---------- */
const styles: Record<
  AlertType,
  {
    border: string
    text: string
    iconBg: string
    icon: React.ElementType
  }
> = {
  critical: {
    border: "border-red-500",
    text: "text-red-600",
    iconBg: "bg-red-100",
    icon: AlertTriangle,
  },
  warning: {
    border: "border-orange-400",
    text: "text-orange-600",
    iconBg: "bg-orange-100",
    icon: AlertCircle,
  },
  info: {
    border: "border-blue-500",
    text: "text-blue-600",
    iconBg: "bg-blue-100",
    icon: Info,
  },
}

/* ---------- COMPONENT ---------- */
export default function AnalyticsAlerts() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 h-[420px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          Analytics Alerts
        </h3>

        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          1 Critical
        </span>
      </div>

      {/* Alerts list */}
      <div className="space-y-4 overflow-y-auto pr-2">
        {alerts.map((alert, index) => {
          const style = styles[alert.type]
          const Icon = style.icon

          return (
            <div
              key={index}
              className={`border ${style.border} rounded-xl p-4`}
            >
              <div className="flex gap-3">
                {/* Icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${style.iconBg}`}
                >
                  <Icon
                    size={16}
                    className={style.text}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className={`font-semibold ${style.text}`}>
                    {alert.title}
                  </h4>

                  <p className="text-sm text-slate-600 mt-1">
                    {alert.description}
                  </p>

                  <p className="text-xs text-slate-400 mt-2">
                    {alert.time}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
