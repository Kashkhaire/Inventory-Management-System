"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, Check, ChevronDown, ChevronUp } from "lucide-react"

export type Product = {
  name: string
  sku: string
  image: string
  currentStock: number
  reorderPoint: number
  recommended: number
  leadTime: string
  category: string
  priority: "Critical" | "High" | "Medium"
  autoReorder: boolean
  supplier: string
  price: string
}

export default function ReorderItemCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false)
  const [qty, setQty] = useState(product.recommended)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 px-6 py-5">
      {/* HEADER */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src={product.image}
            alt={product.name}
            width={56}
            height={56}
            className="rounded-xl bg-slate-100"
          />

          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-slate-500">SKU: {product.sku}</p>
          </div>
        </div>

        <span
          className={`
            inline-flex items-center justify-center
            h-8 px-3
            text-sm font-medium
            rounded-full
            border
            whitespace-nowrap
            ${
              product.priority === "Critical"
                ? "border-red-500 text-red-600 bg-white"
                : product.priority === "High"
                ? "border-orange-500 text-orange-600 bg-white"
                : "border-blue-500 text-blue-600 bg-white"
            }
          `}
        >
          {product.priority}
        </span>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-4 gap-12 mt-4 text-sm">
        <Metric label="Current Stock" value={`${product.currentStock} units`} />
        <Metric label="Reorder Point" value={`${product.reorderPoint} units`} />
        <Metric label="Recommended" value={`${product.recommended} units`} highlight />
        <Metric label="Lead Time" value={product.leadTime} />
      </div>

      {/* META */}
      <div className="flex items-center gap-4 mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            product.autoReorder
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {product.autoReorder ? "✓ Auto-Reorder ON" : "× Auto-Reorder OFF"}
        </span>

        <span className="text-sm text-slate-500">
          Category: <b>{product.category}</b>
        </span>
      </div>

      {/* TOGGLE */}
      <div className="mt-5 pt-4 border-t border-slate-200 text-center">
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-600 text-sm flex items-center gap-1 mx-auto"
        >
          {open ? "Hide Details" : "Show Details"}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* EXPANDED */}
      {open && (
        <>
          <div className="mt-6 flex items-center gap-6">
            <span className="font-medium w-32">Order Quantity</span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <Minus size={14} />
              </button>

              <input
                value={qty}
                readOnly
                className="h-8 w-20 text-center border border-slate-200 rounded-lg text-sm font-medium"
              />

              <button
                onClick={() => setQty(qty + 1)}
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              onClick={() => setQty(product.recommended)}
              className="text-blue-600 text-sm"
            >
              Reset to Recommended
            </button>
          </div>

          <div className="mt-5 flex justify-between">
            <span className="font-medium">Select Supplier</span>
            <button className="text-blue-600 text-sm">Compare Suppliers</button>
          </div>

          <div className="mt-2 flex justify-between bg-slate-50 rounded-xl px-4 py-3">
            <span className="font-medium">{product.supplier}</span>
            <span className="font-semibold">{product.price}</span>
          </div>

          <div className="mt-5 flex gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center gap-2">
              <Check size={18} /> Approve Order
            </button>

            <button className="px-6 py-3 border border-slate-200 rounded-xl">
              Dismiss
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function Metric({ label, value, highlight }: any) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className={`font-semibold ${highlight ? "text-green-600" : ""}`}>
        {value}
      </p>
    </div>
  )
}
