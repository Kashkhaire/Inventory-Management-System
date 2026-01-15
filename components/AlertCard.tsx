import { AlertTriangle, AlertCircle, Truck } from "lucide-react"

type Props = {
  type?: "critical" | "warning" | "info"
  title: string
  description: string
  time: string
  action?: string
}

const ICONS = {
  critical: <AlertTriangle className="text-red-600" size={18} />,
  warning: <AlertCircle className="text-orange-500" size={18} />,
  info: <Truck className="text-blue-500" size={18} />,
}

export default function AlertCard({
  type = "info",
  title,
  description,
  time,
  action,
}: Props) {
  return (
    <div className="border border-slate-200 rounded-xl p-5 flex items-start justify-between hover:border-slate-300 transition">
      <div className="flex gap-3">
        <div className="mt-1">{ICONS[type]}</div>

        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
          <p className="text-xs text-slate-500 mt-2">{time}</p>
        </div>
      </div>

      {action && (
        <button className="text-sm text-blue-600 hover:underline whitespace-nowrap">
          {action}
        </button>
      )}
    </div>
  )
}
