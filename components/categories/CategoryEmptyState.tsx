"use client"

import { useState } from "react"
import AddSubcategoryModal from "./AddSubcategoryModal"

type Props = {
  selected: string | null
}

const attributes = ["Warranty Period", "Power Rating"]

const subcategories = [
  { id: "computers", name: "Computers", products: 89 },
  { id: "mobile", name: "Mobile Devices", products: 156 },
]

export default function CategoryEmptyState({ selected }: Props) {
  const [openSubModal, setOpenSubModal] = useState(false)

  if (!selected) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl h-full flex flex-col items-center justify-center text-center px-6">
        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-600">
          📁
        </div>
        <h3 className="font-semibold text-slate-900">
          No Category Selected
        </h3>
        <p className="text-sm text-slate-500 mt-2 max-w-sm">
          Select a category from the tree to view details, manage attributes,
          and organize products.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full overflow-y-auto">
        {/* HEADER */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              📁
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Electronics
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Electronic devices and accessories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-slate-100">
              ✏️
            </button>
            <button className="p-2 rounded-lg hover:bg-red-50 text-red-500">
              🗑️
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 my-6">
          <StatCard label="Products" value="245" icon="📦" />
          <StatCard label="Subcategories" value="2" icon="📂" />
          <StatCard label="Attributes" value="4" icon="🏷️" />
        </div>

        {/* CUSTOM ATTRIBUTES */}
        <SectionHeader title="CUSTOM ATTRIBUTES" action="+ Add Attribute" />
        {attributes.map((attr) => (
          <Row key={attr} label={attr} />
        ))}

        {/* SUBCATEGORIES */}
        <SectionHeader
          title="SUBCATEGORIES"
          action="+ Add Subcategory"
          onClick={() => setOpenSubModal(true)}
        />

        {subcategories.map((sub) => (
          <div
            key={sub.id}
            className="flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3 mb-3 hover:bg-slate-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              📁
              <div>
                <p className="font-medium text-slate-900">
                  {sub.name}
                </p>
                <p className="text-xs text-slate-500">
                  {sub.products} products
                </p>
              </div>
            </div>
            <span className="text-slate-400">›</span>
          </div>
        ))}
      </div>

      {/* ADD SUBCATEGORY MODAL */}
      {openSubModal && (
        <AddSubcategoryModal
          parent="Electronics"
          onClose={() => setOpenSubModal(false)}
        />
      )}
    </>
  )
}

/* ---------- SMALL REUSABLE UI ---------- */

function SectionHeader({
  title,
  action,
  onClick,
}: {
  title: string
  action?: string
  onClick?: () => void
}) {
  return (
    <div className="flex items-center justify-between mt-8 mb-4">
      <h4 className="text-sm font-semibold tracking-wide text-slate-500">
        {title}
      </h4>
      {action && (
        <button
          onClick={onClick}
          className="text-sm text-blue-600 hover:underline"
        >
          {action}
        </button>
      )}
    </div>
  )
}

function Row({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3 mb-3 hover:bg-slate-50">
      <div className="flex items-center gap-3">
        🏷️
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-slate-400">✕</span>
    </div>
  )
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon: string
}) {
  return (
    <div className="bg-slate-50 rounded-xl p-5 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <p className="text-2xl font-bold text-slate-900 mt-1">
          {value}
        </p>
      </div>
    </div>
  )
}
