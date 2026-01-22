import RevenueByCategoryChart from "./RevenueByCategoryChart"
import ProductDistributionPie from "./ProductDistributionPie"

export default function CategoryAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Stat title="Total Products" value="969" />
        <Stat title="Total Revenue" value="$1,087,700" />
        <Stat title="Avg Turnover" value="4.3x" />
      </div>

      <RevenueByCategoryChart />
      <ProductDistributionPie />
    </div>
  )
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}
