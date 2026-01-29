export default function Billing() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-start gap-3 px-6 pt-6">
        <span className="text-xl">💳</span>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Billing & Subscription
          </h2>
          <p className="text-sm text-gray-500">
            Manage your plan and payment information
          </p>
        </div>
      </div>

      {/* Plan Card */}
      <div className="mx-6 mt-6 flex items-center justify-between rounded-xl border border-gray-200 bg-slate-100 p-5">
        <div>
          <p className="flex items-center gap-2 font-medium text-gray-900">
            ✨ Professional Plan
          </p>

          <p className="mt-2 text-2xl font-semibold text-gray-900">
            $79<span className="text-sm font-normal text-gray-500">/month</span>
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            📅 Next billing date: January 15, 2026
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Upgrade Plan
        </button>
      </div>

      {/* Payment Method */}
      <div className="mx-6 mt-6 rounded-xl bg-slate-100 p-5">
        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-900">
            Payment Method
          </p>

          <button className="text-sm font-medium text-blue-600 hover:underline">
            Update
          </button>
        </div>

        <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
          💳 Visa •••• 4242
        </p>
      </div>

      {/* Billing History */}
      <div className="mx-6 mt-6 mb-6 rounded-xl bg-slate-100 p-5">

        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-900">
            Billing History
          </p>

          <button className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <Invoice
            id="INV-2025-001"
            date="December 15, 2025"
            amount="$79.00"
            status="Paid"
          />

          <Invoice
            id="INV-2025-002"
            date="November 15, 2025"
            amount="$79.00"
            status="Paid"
          />

          <Invoice
            id="INV-2025-003"
            date="October 15, 2025"
            amount="$79.00"
            status="Paid"
          />
        </div>
      </div>
    </div>
  );
}

/* ================= INVOICE ROW ================= */

function Invoice({
  id,
  date,
  amount,
  status,
}: {
  id: string;
  date: string;
  amount: string;
  status: "Paid" | "Unpaid";
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="text-blue-600">📄</span>
        <div>
          <p className="font-medium text-gray-900">
            Invoice #{id}
          </p>
          <p className="text-sm text-gray-500">
            {date}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <p className="font-medium text-gray-900">
          {amount}
        </p>

        <span className="text-sm font-medium text-green-600">
          {status}
        </span>

        <button className="text-gray-500 hover:text-gray-800">
          ⬇️
        </button>
      </div>
    </div>
  );
}
