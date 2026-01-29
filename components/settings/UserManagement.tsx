export default function UserManagement() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-start gap-3 px-6 pt-6">
        <span className="text-xl text-purple-700">👥</span>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            User Management
          </h2>
          <p className="text-sm text-gray-500">
            Manage team members and their permissions
          </p>
        </div>
      </div>

      {/* Team Members Header */}
      <div className="mt-6 flex items-center justify-between px-6">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Team Members
          </h3>
          <p className="text-sm text-gray-500">
            Manage user access and permissions
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <span className="text-lg">+</span>
          Invite User
        </button>
      </div>

      {/* Users List */}
      <div className="mt-6 space-y-4 px-6 pb-6">
        <UserRow
          name="Sarah Johnson"
          role="Business Owner"
          email="sarah.johnson@inventorypro.com"
          active="2 minutes ago"
        />
        <UserRow
          name="Michael Chen"
          role="Operations Manager"
          email="michael.chen@inventorypro.com"
          active="15 minutes ago"
        />
        <UserRow
          name="Emily Rodriguez"
          role="Warehouse Staff"
          email="emily.rodriguez@inventorypro.com"
          active="1 hour ago"
        />
        <UserRow
          name="David Thompson"
          role="View Only"
          email="david.thompson@inventorypro.com"
          active="3 days ago"
        />
      </div>
    </div>
  );
}
function UserRow({
  name,
  role,
  email,
  active,
}: {
  name: string;
  role: string;
  email: string;
  active: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4">

      {/* Left */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/80"
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-3">
            <p className="font-medium text-gray-900">{name}</p>
            <span className="text-sm font-medium text-blue-600">
              {role}
            </span>
          </div>

          <p className="text-sm text-gray-500">{email}</p>
          <p className="text-xs text-gray-400">
            Last active: {active}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5 text-gray-500">
        <button className="hover:text-gray-800">✏️</button>
        <button className="hover:text-red-600">🗑️</button>
      </div>
    </div>
  );
}
