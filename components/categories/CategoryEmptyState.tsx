type Props = {
  selected: string | null
}

export default function CategoryEmptyState({ selected }: Props) {
  if (!selected) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
          📁
        </div>
        <h3 className="font-semibold">No Category Selected</h3>
        <p className="text-sm text-slate-500 max-w-sm mt-2">
          Select a category from the tree to view details, manage attributes,
          and organize products.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full overflow-y-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-semibold capitalize">{selected}</h2>
          <p className="text-slate-500 text-sm">
            Electronic devices and accessories
          </p>
        </div>
        <div className="flex gap-3">
          ✏️ 🗑️
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">
        <Stat label="Products" value="245" />
        <Stat label="Subcategories" value="2" />
        <Stat label="Attributes" value="4" />
      </div>

      <h4 className="font-semibold mb-3">Custom Attributes</h4>

      {["Brand", "Model", "Warranty Period"].map((attr) => (
        <div
          key={attr}
          className="border rounded-xl px-4 py-3 mb-3 flex justify-between"
        >
          {attr}
          ✕
        </div>
      ))}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  )
}
