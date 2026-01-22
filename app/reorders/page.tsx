"use client"

import ReorderStats from "@/components/reorders/ReorderStats"
import ReorderTabs from "@/components/reorders/ReorderTabs"

export default function ReordersPage() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Reorder Management
        </h1>
        <p className="text-slate-600 mt-1">
          Automated reordering system with predictive analytics and supplier integration
        </p>
      </div>

      {/* STATS */}
      <ReorderStats />

      {/* TABS + LIST */}
      <ReorderTabs />
    </div>
  )
}
