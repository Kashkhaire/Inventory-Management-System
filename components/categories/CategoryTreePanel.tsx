type Props = {
  selected: string | null
  onSelect: (id: string) => void
}

const categories = [
  { id: "electronics", name: "Electronics", count: 245 },
  { id: "furniture", name: "Furniture", count: 178 },
  { id: "clothing", name: "Clothing", count: 412 },
  { id: "sports", name: "Sports Equipment", count: 134 },
]

export default function CategoryTreePanel({ selected, onSelect }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 h-full flex flex-col">
      <h3 className="font-semibold mb-4">Categories</h3>

      <input
        placeholder="Search categories"
        className="w-full mb-4 px-4 py-2 border rounded-xl text-sm"
      />

      <div className="space-y-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`w-full flex justify-between items-center px-4 py-2 rounded-xl text-sm ${
              selected === cat.id
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            <span>{cat.name}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                selected === cat.id
                  ? "bg-white/20"
                  : "bg-slate-100"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
