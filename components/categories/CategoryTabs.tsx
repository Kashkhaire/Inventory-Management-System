"use client"

import { useState } from "react"
import CategoryTreePanel from "./CategoryTreePanel"
import CategoryEmptyState from "./CategoryEmptyState"
import CategoryAnalytics from "./CategoryAnalytics"
import BulkAssignModal from "./BulkAssignModal"
import CreateCategoryModal from "./CreateCategoryModal"

const FolderIcon = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={active ? "text-white" : "text-blue-600"}
  >
    <path d="M3 7h5l2 3h11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
)

const ChartIcon = ({ active }: { active: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={active ? "text-white" : "text-blue-600"}
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

export default function CategoryTabs() {
  const [bulkOpen, setBulkOpen] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)
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
          {/* BULK ASSIGN */}
          <button
            onClick={() => setBulkOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 text-sm text-slate-700 hover:bg-slate-50 transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
            Bulk Assign
          </button>

          {/* NEW CATEGORY */}
          <button onClick={() => setCreateOpen(true)} className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
            <span className="text-lg leading-none">+</span>
            New Category
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-3 mt-4">
        {/* CATEGORY TREE */}
        <button
          onClick={() => setTab("tree")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
            tab === "tree"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
          }`}
        >
          <FolderIcon active={tab === "tree"} />
          Category Tree
        </button>

        {/* ANALYTICS */}
        <button
          onClick={() => setTab("analytics")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
            tab === "analytics"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
          }`}
        >
          <ChartIcon active={tab === "analytics"} />
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
      {/* 👇 ADD THIS LINE EXACTLY HERE */}
      <BulkAssignModal
        open={bulkOpen}
        onClose={() => setBulkOpen(false)}
      />
      <CreateCategoryModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />
    </div>
  )
}
