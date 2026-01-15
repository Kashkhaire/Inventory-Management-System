import Image from "next/image"
import { Pencil, Trash2 } from "lucide-react"

type Props = {
  view: "grid" | "list"
}

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    sku: "WBH-2024-001",
    category: "Electronics",
    price: "$79.99",
    stock: 145,
    supplier: "TechSupply Co.",
    image: "/products/headphones.png",
  },
  {
    name: "Ergonomic Office Chair",
    sku: "EOC-2024-002",
    category: "Furniture",
    price: "$299.99",
    stock: 23,
    supplier: "Premium Goods Ltd.",
    image: "/products/chair.jpg",
  },
  {
    name: "Stainless Steel Water Bottle",
    sku: "SSWB-2024-003",
    category: "Food & Beverages",
    price: "$24.99",
    stock: 0,
    supplier: "FastShip Distributors",
    image: "/products/bottle.jpg",
  },
  {
    name: "LED Desk Lamp",
    sku: "LDL-2024-004",
    category: "Electronics",
    price: "$45.50",
    stock: 67,
    supplier: "TechSupply Co.",
    image: "/products/lamp.png",
  },
]

export default function ProductGrid({ view }: Props) {
  return (
    <>
      <p className="text-sm text-slate-600 mb-4">
        Showing {products.length} of {products.length} products
      </p>

      {/* GRID VIEW – DETAILED CARD */}
      {view === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => {
            const stockStatus =
              p.stock === 0
                ? { label: "Out of Stock", color: "text-red-600 bg-red-50" }
                : p.stock < 30
                ? { label: "Low Stock", color: "text-orange-600 bg-orange-50" }
                : { label: "In Stock", color: "text-green-600 bg-green-50" }

            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition"
              >
                {/* IMAGE */}
                <div className="relative h-48">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />

                  {/* STOCK BADGE */}
                  <span
                    className={`absolute bottom-2 left-2 px-2.5 py-1 text-xs font-medium rounded-full ${stockStatus.color}`}
                  >
                    {stockStatus.label}
                  </span>

                  {/* ACTION ICONS */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="p-1.5 bg-white/90 rounded-md hover:text-blue-600">
                      <Pencil size={14} />
                    </button>
                    <button className="p-1.5 bg-white/90 rounded-md hover:text-red-600">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="p-4 space-y-2">
                  <h4 className="font-semibold text-slate-900">
                    {p.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    SKU: {p.sku}
                  </p>

                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Category:</span>
                      <span className="font-medium">{p.category}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Price:</span>
                      <span className="font-medium">{p.price}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Stock:</span>
                      <span
                        className={`font-medium ${
                          p.stock === 0
                            ? "text-red-600"
                            : p.stock < 30
                            ? "text-orange-600"
                            : "text-green-600"
                        }`}
                      >
                        {p.stock} units
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Supplier:</span>
                      <span className="font-medium">
                        {p.supplier}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* LIST VIEW (THIRD IMAGE EXACT MATCH) */}
      {view === "list" && (
        <div className="space-y-4">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl px-6 py-4 hover:shadow-sm"
            >
              <div className="grid grid-cols-[auto_1fr_140px_160px_220px_60px] items-center gap-6">
                
                {/* IMAGE */}
                <div className="w-16 h-16 rounded-xl overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {p.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    SKU: {p.sku}
                  </p>
                  <p className="text-sm">
                    Category:{" "}
                    <span className="font-medium">{p.category}</span>
                  </p>
                </div>

                {/* PRICE */}
                <div className="text-sm">
                  Price: <b>{p.price}</b>
                </div>

                {/* STOCK */}
                <div
                  className={`text-sm font-medium ${
                    p.stock === 0
                      ? "text-red-600"
                      : p.stock < 30
                      ? "text-orange-500"
                      : "text-green-600"
                  }`}
                >
                  Stock: {p.stock} units
                </div>

                {/* SUPPLIER */}
                <div className="text-sm">
                  Supplier: <b>{p.supplier}</b>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-3 justify-end text-slate-500">
                  <Pencil
                    size={18}
                    className="cursor-pointer hover:text-blue-600"
                  />
                  <Trash2
                    size={18}
                    className="cursor-pointer hover:text-red-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
