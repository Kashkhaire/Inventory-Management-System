"use client"

import { useState } from "react"
import AdvancedFilters from "@/components/AdvancedFilters"
import ProductGrid from "@/components/inventory/ProductGrid"
import { Search, LayoutGrid, List, Plus, Package, AlertTriangle, XCircle, DollarSign } from "lucide-react"

export default function InventoryPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [open, setOpen] = useState(false)

  const [filters, setFilters] = useState({
    category: "",
    stock: "",
    price: "",
    supplier: "",
  })

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  return (
    <>
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Inventory Catalog
        </h1>
        <p className="text-slate-600 mt-1">
          Manage your complete product database with advanced search, filtering, and bulk operations
        </p>
      </div>

      {/* INVENTORY STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* TOTAL PRODUCTS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <Package size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Total Products</p>
            <p className="text-xl font-bold text-slate-900">8</p>
          </div>
        </div>

        {/* LOW STOCK */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-50 text-orange-600">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Low Stock Items</p>
            <p className="text-xl font-bold text-slate-900">3</p>
          </div>
        </div>

        {/* OUT OF STOCK */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-red-50 text-red-600">
            <XCircle size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Out of Stock</p>
            <p className="text-xl font-bold text-slate-900">1</p>
          </div>
        </div>

        {/* INVENTORY VALUE */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-50 text-green-600">
            <DollarSign size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500">Total Inventory Value</p>
            <p className="text-xl font-bold text-slate-900">$34,798.78</p>
          </div>
        </div>
      </div>

      {/* SEARCH + FILTER + PRODUCTS */}
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search by name, SKU, or category..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setView("grid")}
                className={`p-2.5 ${
                  view === "grid"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <LayoutGrid size={18} />
              </button>

              <button
                onClick={() => setView("list")}
                className={`p-2.5 ${
                  view === "list"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <List size={18} />
              </button>
            </div>

            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-medium">
              <Plus size={18} />
              Add Product
            </button>
          </div>

          <AdvancedFilters
            open={open}
            setOpen={setOpen}
            filters={filters}
            setFilters={setFilters}
            count={activeFilterCount}
          />
        </div>

        <ProductGrid view={view} />
      </div>
    </>
  )
}
