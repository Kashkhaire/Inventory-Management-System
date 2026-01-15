import {
  Package,
  AlertTriangle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

type StatType = "success" | "warning" | "danger" | "info"
type IconType = "box" | "alert" | "error" | "clock"

type Props = {
  title: string
  value: string
  trend: string // "+12.5%" | "-8.3%" | "0%"
  type?: StatType
  icon?: IconType
}

const ICONS: Record<IconType, any> = {
  box: Package,
  alert: AlertTriangle,
  error: XCircle,
  clock: Clock,
}

const COLORS: Record<StatType, string> = {
  success: "text-green-600 bg-green-50",
  warning: "text-orange-500 bg-orange-50",
  danger: "text-red-600 bg-red-50",
  info: "text-blue-600 bg-blue-50",
}

export default function StatCard({
  title,
  value,
  trend,
  type = "info",
  icon = "box",
}: Props) {
  const Icon = ICONS[icon]

  const isPositive = trend.startsWith("+")
  const isNegative = trend.startsWith("-")

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 transition hover:shadow-md">
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${COLORS[type]}`}>
          <Icon size={20} />
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isPositive
              ? "text-green-600"
              : isNegative
              ? "text-red-500"
              : "text-slate-500"
          }`}
        >
          {isPositive && <TrendingUp size={16} />}
          {isNegative && <TrendingDown size={16} />}
          {trend}
        </div>
      </div>

      {/* Value */}
      <div className="text-3xl font-bold text-slate-900">
        {value}
      </div>

      {/* Title */}
      <div className="text-sm text-slate-600 mt-1">
        {title}
      </div>

      {/* Progress line */}
      <div
        className={`h-1 rounded-full mt-4 ${
          isPositive
            ? "bg-green-500"
            : isNegative
            ? "bg-red-500"
            : "bg-slate-300"
        }`}
      />
    </div>
  )
}
