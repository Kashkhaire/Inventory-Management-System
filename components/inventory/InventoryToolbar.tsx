"use client"

import { Search, LayoutGrid, List, Plus, QrCode } from "lucide-react"

export default function InventoryToolbar({
  view,
  setView,
  filtersOpen,
  setFiltersOpen,
}: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4">
      {/* Search */}
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          placeholder="Search by name, SKU, or category..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* QR */}
      <button className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50">
        <QrCode size={18} />
      </button>

      {/* View Toggle */}
      <div className="flex bg-slate-100 rounded-xl p-1">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded-lg ${view === "grid" ? "bg-white shadow" : ""}`}
        >
          <LayoutGrid size={18} />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded-lg ${view === "list" ? "bg-white shadow" : ""}`}
        >
          <List size={18} />
        </button>
      </div>

      {/* Add Product */}
      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl">
        <Plus size={18} />
        Add Product
      </button>
    </div>
  )
}
