import StatCard from "@/components/StatCard"
import AlertCard from "@/components/AlertCard"
import InventoryChart from "@/components/InventoryChart"
import QuickActions from "@/components/QuickActions"
import RecentActivity from "@/components/RecentActivity"
import TopPerformingProducts from "@/components/TopPerformingProducts"

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard Overview
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Real-time inventory insights and quick actions at your fingertips
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Products" value="2,847" trend="+12.5%" type="success" icon="box" />
        <StatCard title="Low Stock Items" value="23" trend="-8.3%" type="warning" icon="alert" />
        <StatCard title="Out of Stock" value="5" trend="+2.1%" type="danger" icon="error" />
        <StatCard title="Pending Reorders" value="18" trend="0%" type="info" icon="clock" />
      </div>

      {/* Alerts + Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* LEFT SIDE (2 columns on XL) */}
        <div className="xl:col-span-2 space-y-6">

          {/* Alerts */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">
              Critical Alerts
            </h2>

            <div className="space-y-4">
              <AlertCard
                type="critical"
                title="Critical Stock Alert"
                description="5 products are completely out of stock and need immediate reordering"
                time="2 hours ago"
                action="View Products"
              />

              <AlertCard
                type="warning"
                title="Low Stock Warning"
                description="23 items have reached their reorder point threshold"
                time="5 hours ago"
                action="Review Items"
              />

              <AlertCard
                type="info"
                title="Delivery Scheduled"
                description="Supplier shipment arriving tomorrow with 450 units across 12 products"
                time="1 day ago"
              />
            </div>
          </div>

          {/* Chart BELOW alerts */}
          <InventoryChart />
        </div>

        {/* RIGHT SIDE (1 column on XL) */}
        <QuickActions />
      </div>
      {/* After InventoryChart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        <RecentActivity />
        <TopPerformingProducts />
      </div>
    </>
  )
}

