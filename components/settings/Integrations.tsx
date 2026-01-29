export default function Integrations() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-start gap-3 px-6 pt-6">
        <span className="text-xl">🔌</span>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Integrations
          </h2>
          <p className="text-sm text-gray-500">
            Connect with your favorite business tools
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-3 px-6">
        <Filter label="All" active />
        <Filter label="Accounting" />
        <Filter label="Ecommerce" />
        <Filter label="Shipping" />
        <Filter label="Analytics" />
      </div>

      {/* Integration Cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 px-6 pb-6 md:grid-cols-2 xl:grid-cols-3">
        <IntegrationCard
          name="QuickBooks"
          desc="Sync inventory data with your accounting software for seamless financial tracking"
          status="connected"
          lastSync="5 minutes ago"
        />

        <IntegrationCard
          name="Shopify"
          desc="Automatically update inventory levels across your e-commerce store"
          status="connected"
          lastSync="10 minutes ago"
        />

        <IntegrationCard
          name="Amazon Seller Central"
          desc="Manage Amazon inventory and orders directly from InventoryPro"
          status="disconnected"
        />

        <IntegrationCard
          name="ShipStation"
          desc="Streamline shipping and fulfillment with automated label generation"
          status="disconnected"
        />

        <IntegrationCard
          name="Google Analytics"
          desc="Track inventory performance and customer behavior insights"
          status="connected"
          lastSync="1 hour ago"
        />

        <IntegrationCard
          name="Xero"
          desc="Connect your inventory management with Xero accounting platform"
          status="disconnected"
        />
      </div>
    </div>
  );
}

/* ================= INTEGRATION CARD ================= */

function IntegrationCard({
  name,
  desc,
  status,
  lastSync,
}: {
  name: string;
  desc: string;
  status: "connected" | "disconnected";
  lastSync?: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-gray-50 p-5">

      {/* Top */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
            📦
          </div>

          {status === "connected" && (
            <span className="text-sm font-medium text-green-600">
              ● Connected
            </span>
          )}
        </div>

        <h3 className="mt-4 font-semibold text-gray-900">
          {name}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          {desc}
        </p>

        {lastSync && (
          <p className="mt-3 text-xs text-gray-400">
            Last synced: {lastSync}
          </p>
        )}
      </div>

      {/* Action */}
      <div className="mt-5">
        {status === "connected" ? (
          <button className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 text-sm font-medium hover:bg-gray-200">
            Configure
          </button>
        ) : (
          <button className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Connect
          </button>
        )}
      </div>
    </div>
  );
}

/* ================= FILTER BUTTON ================= */

function Filter({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition
        ${
          active
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
    >
      {label}
    </button>
  );
}
