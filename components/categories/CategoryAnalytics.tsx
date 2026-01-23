import RevenueByCategoryChart from "./RevenueByCategoryChart"
import ProductDistributionPie from "./ProductDistributionPie"

export default function CategoryAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Stat
          title="Total Products"
          value="969"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          }
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <Stat
          title="Total Revenue"
          value="$1,087,700"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
          }
          iconBg="bg-green-50"
          iconColor="text-green-600"
        />

        <Stat
          title="Avg Turnover"
          value="4.3x"
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-3-6.7"/>
              <polyline points="21 3 21 9 15 9"/>
            </svg>
          }
          iconBg="bg-sky-50"
          iconColor="text-sky-600"
        />
      </div>
      <RevenueByCategoryChart />
      <ProductDistributionPie />
    </div>
  )
}

function Stat({
  title,
  value,
  icon,
  iconBg,
  iconColor,
}: {
  title: string
  value: string
  icon: React.ReactNode
  iconBg: string
  iconColor: string
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl px-6 py-5 flex items-center gap-4">
      {/* ICON */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}
      >
        <span className={iconColor}>{icon}</span>
      </div>

      {/* TEXT */}
      <div>
        <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
          {title}
        </p>
        <p className="text-2xl font-bold text-slate-900 mt-1">
          {value}
        </p>
      </div>
    </div>
  )
}

