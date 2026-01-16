"use client"

import AnalyticsStats from "@/components/analytics/AnalyticsStats"
import InventoryTurnoverChart from "@/components/analytics/InventoryTurnoverChart"
import AnalyticsAlerts from "@/components/analytics/AnalyticsAlerts"
import SeasonalDemandChart from "@/components/analytics/SeasonalDemandChart"
import InventoryCategoryPie from "@/components/analytics/InventoryCategoryPie"
import SupplierPerformanceTable from "@/components/analytics/SupplierPerformanceTable"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Analytics Dashboard
          </h1>
          <p className="text-slate-600 mt-1">
            Comprehensive insights and performance metrics for strategic decision-making
          </p>
        </div>

        <div className="flex gap-3">
          <button className="border border-slate-200 rounded-xl px-4 py-2 bg-white">
            📅 Last 30 Days
          </button>
          <button className="bg-blue-600 text-white rounded-xl px-4 py-2">
            ⬇ Export Report
          </button>
        </div>
      </div>

      {/* STATS */}
      <AnalyticsStats />

      {/* TURNOVER + ALERTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InventoryTurnoverChart />
        </div>
        <AnalyticsAlerts />
      </div>

      {/* SEASONAL + CATEGORY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SeasonalDemandChart />
        <InventoryCategoryPie />
      </div>

      {/* SUPPLIER TABLE */}
      <SupplierPerformanceTable />
    </div>
  )
}
