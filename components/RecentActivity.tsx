import {
    RefreshCcw,
    Edit3,
    Truck,
    Bell,
} from "lucide-react"

const activities = [
    {
        icon: <RefreshCcw className="text-blue-600" size={18} />,
        title: "Automated Reorder Triggered",
        desc: "System generated purchase order for 15 low-stock items",
        meta: "System Automation • 30 minutes ago",
    },
    {
        icon: <Edit3 className="text-indigo-600" size={18} />,
        title: "Inventory Updated",
        desc: "Stock levels adjusted for Electronics category (45 items)",
        meta: "Sarah Johnson • 2 hours ago",
    },
    {
        icon: <Truck className="text-green-600" size={18} />,
        title: "Shipment Received",
        desc: "Supplier delivery processed: 320 units across 8 products",
        meta: "Mike Chen • 5 hours ago",
    },
    {
        icon: <Bell className="text-orange-500" size={18} />,
        title: "Low Stock Alert Resolved",
        desc: "Reorder completed for Office Supplies category",
        meta: "Emily Rodriguez • 1 day ago",
    },
]

export default function RecentActivity() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6">
                Recent Activity
            </h3>

            <div className="space-y-6">
                {activities.map((a, i) => (
                    <div
                        key={i}
                        className={`flex gap-4 ${i !== activities.length - 1
                                ? "border-b border-slate-200 pb-6"
                                : ""
                            }`}
                    >
                        <div className="mt-1">{a.icon}</div>

                        <div>
                            <h4 className="font-semibold text-slate-900">
                                {a.title}
                            </h4>
                            <p className="text-sm text-slate-600 mt-1">
                                {a.desc}
                            </p>
                            <p className="text-xs text-slate-500 mt-2">
                                {a.meta}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
