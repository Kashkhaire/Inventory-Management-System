"use client"

import { useState } from "react"
import CategoryTreePanel from "./CategoryTreePanel"
import CategoryEmptyState from "./CategoryEmptyState"
import CategoryAnalytics from "./CategoryAnalytics"

export default function CategoryTabs() {
  const [tab, setTab] = useState<"tree" | "analytics">("tree")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[28px] font-bold leading-tight">Category Management</h1>
          <p className="text-slate-500 mt-0.5 text-[15px]">
            Organize inventory with hierarchical categories and custom attributes
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <button className="border border-slate-300 px-4 py-2 rounded-xl text-sm">
            Bulk Assign
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">
            + New Category
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={() => setTab("tree")}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            tab === "tree"
              ? "bg-blue-600 text-white"
              : "border text-slate-600"
          }`}
        >
          Category Tree
        </button>

        <button
          onClick={() => setTab("analytics")}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium ${
            tab === "analytics"
              ? "bg-blue-600 text-white"
              : "border text-slate-600"
          }`}
        >
          Analytics
        </button>
      </div>

      {/* CONTENT */}
      {tab === "tree" ? (
        <div className="grid grid-cols-12 gap-6 min-h-[400px]">
          {/* LEFT */}
          <div className="col-span-4">
            <CategoryTreePanel
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          {/* RIGHT */}
          <div className="col-span-8">
            <CategoryEmptyState selected={selectedCategory} />
          </div>
        </div>
      ) : (
        <CategoryAnalytics />
      )}
    </div>
  )
}
