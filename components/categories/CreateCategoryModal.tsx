"use client"

type Props = {
  open: boolean
  onClose: () => void
}

export default function CreateCategoryModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        {/* HEADER */}
        <div className="flex justify-between items-start px-8 py-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">
            Create New Category
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl"
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="px-8 py-6 space-y-6 overflow-y-auto">
          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Category Name <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter category name"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe this category"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Custom Attributes */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Custom Attributes
            </label>

            <div className="flex gap-3">
              <input
                placeholder="Add custom attribute (e.g., Brand, Size, Color)"
                className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
                Add
              </button>
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

          <button className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
            Create Category
          </button>
        </div>
      </div>
    </div>
  )
}
