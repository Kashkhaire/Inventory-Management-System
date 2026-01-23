type Props = {
  selected: string | null
  onSelect: (id: string) => void
}

/* Chevron icon */
const ChevronRight = ({ active }: { active: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition ${
      active ? "text-white" : "text-slate-400"
    }`}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

/* Folder icon */
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
    className={`transition ${
      active ? "text-white" : "text-slate-700"
    }`}
  >
    <path d="M3 7h5l2 3h11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
)

const categories = [
  { id: "electronics", name: "Electronics", count: 245 },
  { id: "furniture", name: "Furniture", count: 178 },
  { id: "clothing", name: "Clothing", count: 412 },
  { id: "sports", name: "Sports Equipment", count: 134 },
]

export default function CategoryTreePanel({ selected, onSelect }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 h-full">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900">Categories</h3>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-400"
        >
          <path d="M22 3H2l8 9v7l4 2v-9l8-9z" />
        </svg>
      </div>

      {/* SEARCH */}
      <div className="relative mb-4">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          placeholder="Search categories"
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* LIST */}
      <div className="space-y-1">
        {categories.map((cat) => {
          const isActive = selected === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-50"
              }`}
            >
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <ChevronRight active={isActive} />
                <FolderIcon active={isActive} />
                <span className="text-sm font-medium">
                  {cat.name}
                </span>
              </div>

              {/* COUNT */}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {cat.count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
