"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import ReorderList from "./ReorderList"

export default function ReorderTabs() {
  const [tab, setTab] = useState<"pending" | "history">("pending")

  return (
    <div className="bg-white rounded-2xl border border-slate-200">
      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 border-b border-slate-200">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("pending")}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              tab === "pending"
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Pending Reorders (5)
          </button>

          <button
            onClick={() => setTab("history")}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            Order History
          </button>
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              placeholder="Search products or SKU..."
              className="pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl"
            />
          </div>

          <button className="flex items-center gap-2 border border-slate-200 px-4 py-2.5 rounded-xl">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="p-4">
        {tab === "pending" && <ReorderList />}
      </div>
    </div>
  )
}
