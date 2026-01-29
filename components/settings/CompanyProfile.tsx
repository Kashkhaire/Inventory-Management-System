export default function CompanyProfile() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-start gap-3">
          <span className="text-xl">🏢</span>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Company Profile
            </h2>
            <p className="text-sm text-gray-500">
              Manage your company information and preferences
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium hover:bg-gray-100">
          ✏ Edit
        </button>
      </div>

      {/* Body */}
      <div className="px-6 pb-6 pt-4">
        <div className="flex gap-6">

          <img
            src="https://picsum.photos/96"
            alt="Company"
            className="h-24 w-24 rounded-xl object-cover"
          />

          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900">
              InventoryPro Solutions Inc.
            </h3>
            <p className="text-sm text-gray-500">
              contact@inventorypro.com
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-24 gap-y-5">
              <Info label="Phone" value="+1 (555) 123-4567" />
              <Info label="Address" value="123 Business Avenue" />
              <Info label="City" value="San Francisco" />
              <Info label="State" value="California" />
              <Info label="ZIP Code" value="94102" />
              <Info label="Country" value="United States" />
              <Info label="Timezone" value="Pacific Time (PT)" />
              <Info label="Currency" value="USD ($)" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Local helper */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}
