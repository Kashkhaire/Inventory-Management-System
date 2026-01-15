"use client"

import { ChevronDown, Filter } from "lucide-react"
import React from "react"

/* ================= TYPES ================= */

type Filters = {
  category: string
  stock: string
  price: string
  supplier: string
}

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  count: number
}

type SelectProps = {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
}

/* ================= COMPONENT ================= */

export default function AdvancedFilters({
  open,
  setOpen,
  filters,
  setFilters,
  count,
}: Props) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      {/* HEADER */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-blue-600" />
          <span className="font-medium">Advanced Filters</span>

          {count > 0 && (
            <span className="ml-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              {count}
            </span>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && <div className="border-t border-slate-200" />}

      {open && (
        <div className="p-4 space-y-4">
          <Select
            label="Category"
            value={filters.category}
            onChange={(v) => setFilters({ ...filters, category: v })}
            options={[
              "All Categories",
              "Electronics",
              "Furniture",
              "Clothing",
              "Food & Beverages",
            ]}
          />

          <Select
            label="Stock Level"
            value={filters.stock}
            onChange={(v) => setFilters({ ...filters, stock: v })}
            options={[
              "All Levels",
              "In Stock",
              "Low Stock",
              "Out of Stock",
              "Overstocked",
            ]}
          />

          <Select
            label="Price Range"
            value={filters.price}
            onChange={(v) => setFilters({ ...filters, price: v })}
            options={[
              "All Prices",
              "$0 - $50",
              "$50 - $200",
              "$200 - $500",
              "$500+",
            ]}
          />

          <Select
            label="Supplier"
            value={filters.supplier}
            onChange={(v) => setFilters({ ...filters, supplier: v })}
            options={[
              "All Suppliers",
              "TechSupply Co.",
              "Global Parts Inc.",
              "Premium Goods Ltd.",
              "FastShip Distributors",
            ]}
          />

          <button
            onClick={() =>
              setFilters({
                category: "",
                stock: "",
                price: "",
                supplier: "",
              })
            }
            className="w-full bg-slate-100 hover:bg-slate-200 rounded-xl py-2 text-sm transition"
          >
            ✕ Clear All Filters
          </button>
        </div>
      )}
    </div>
  )
}

/* ================= SELECT ================= */

function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="text-sm text-slate-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
