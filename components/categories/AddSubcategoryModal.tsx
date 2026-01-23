"use client"

type Props = {
    parent: string
    onClose: () => void
}

export default function AddSubcategoryModal({ parent, onClose }: Props) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-[640px] max-w-[95vw] shadow-xl overflow-hidden">
                {/* HEADER */}
                <div className="flex items-start justify-between p-6 border-b border-slate-200">
                    <div>
                        <h3 className="text-lg font-semibold">
                            Add Subcategory
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                            Parent: {parent}
                        </p>
                    </div>
                    <button onClick={onClose}>✕</button>
                </div>

                {/* BODY */}
                <div className="p-7 space-y-6">
                    <div>
                        <label className="text-sm font-medium">
                            Category Name *
                        </label>
                        <input
                            className="mt-2 w-full border border-slate-300 rounded-xl px-4 py-2"
                            placeholder="Enter category name"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            rows={4}
                            className="mt-2 w-full border border-slate-300 rounded-xl px-4 py-3"
                            placeholder="Describe this category"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">
                            Custom Attributes
                        </label>
                        <div className="flex gap-2 mt-2">
                            <input
                                className="flex-1 border border-slate-300 rounded-xl px-4 py-2"
                                placeholder="Add custom attribute"
                            />
                            <button className="px-4 rounded-xl bg-blue-600 text-white">
                                Add
                            </button>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex justify-end gap-4 p-6 border-t border-slate-300">
                    <button
                        onClick={onClose}
                        className="text-slate-600"
                    >
                        Cancel
                    </button>
                    <button className="px-5 py-2 rounded-xl bg-blue-600 text-white">
                        Create Category
                    </button>
                </div>
            </div>
        </div>
    )
}
