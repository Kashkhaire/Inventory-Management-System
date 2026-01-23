"use client"

type Props = {
  open: boolean
  onClose: () => void
}

export default function BulkAssignModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col max-h-[92vh]">
        {/* HEADER */}
        <div className="flex justify-between items-start px-8 py-6 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Bulk Product Assignment
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              0 products selected
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl"
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="px-8 py-6 space-y-8 overflow-y-auto">
          {/* Target Category */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Target Category <span className="text-red-500">*</span>
            </label>

            <select className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select a category</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
            </select>
          </div>

          {/* Select Products */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-slate-700">
                Select Products
              </label>
              <button className="text-sm text-blue-600 hover:underline">
                Select All
              </button>
            </div>

            <input
              placeholder="Search products by name or SKU"
              className="w-full mb-4 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Product List */}
            <div className="border border-slate-300 rounded-xl divide-y divide-slate-200 max-h-[360px] overflow-y-auto">
              {[
                {
                  name: "Dell XPS 15 Laptop",
                  sku: "DELL-XPS-15",
                  current: "Laptops",
                },
                {
                  name: "iPhone 14 Pro",
                  sku: "APPL-IP14P",
                  current: "Mobile Devices",
                },
                {
                  name: "Ergonomic Office Chair",
                  sku: "FURN-EOC-01",
                  current: "Office Furniture",
                },
                {
                  name: "Men's Cotton T-Shirt",
                  sku: "TSHIRT-MEN",
                  current: "Clothing",
                },
              ].map((p) => (
                <label
                  key={p.sku}
                  className="flex items-start gap-4 px-6 py-4 hover:bg-slate-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {p.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      SKU: {p.sku} · Current: {p.current}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-8 py-5 border-t border-slate-200 bg-slate-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            disabled
            className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm opacity-60 cursor-not-allowed"
          >
            Assign 0 Products
          </button>
        </div>
      </div>
    </div>
  )
}
