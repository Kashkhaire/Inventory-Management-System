"use client";

import { useState } from "react";

export default function Notifications() {
  const [prefs, setPrefs] = useState({
    lowStock: { email: true, push: true, sms: false },
    reorder: { email: true, push: false, sms: false },
    orders: { email: true, push: true, sms: true },
    system: { email: true, push: false, sms: false },
    security: { email: true, push: true, sms: true },
  });

  const toggle = (
    key: keyof typeof prefs,
    channel: "email" | "push" | "sms"
  ) => {
    setPrefs({
      ...prefs,
      [key]: { ...prefs[key], [channel]: !prefs[key][channel] },
    });
  };

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-start gap-3 px-6 pt-6">
        <span className="text-xl">🔔</span>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Notification Preferences
          </h2>
          <p className="text-sm text-gray-500">
            Customize how you receive alerts and updates
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className="mt-6 grid grid-cols-[1fr_80px_80px_80px] items-center border-b border-gray-200 px-6 pb-3 text-sm font-medium text-gray-700">
        <div>Notification Type</div>
        <div className="text-center">📧 Email</div>
        <div className="text-center">🔔 Push</div>
        <div className="text-center">📱 SMS</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-200">

        <Row
          title="Low Stock Alerts"
          desc="Get notified when inventory levels fall below reorder points"
          value={prefs.lowStock}
          onToggle={(c) => toggle("lowStock", c)}
        />

        <Row
          title="Reorder Suggestions"
          desc="Receive automated recommendations for inventory replenishment"
          value={prefs.reorder}
          onToggle={(c) => toggle("reorder", c)}
        />

        <Row
          title="Order Updates"
          desc="Track purchase order status changes and delivery confirmations"
          value={prefs.orders}
          onToggle={(c) => toggle("orders", c)}
          highlight
        />

        <Row
          title="System Updates"
          desc="Stay informed about new features and platform improvements"
          value={prefs.system}
          onToggle={(c) => toggle("system", c)}
        />

        <Row
          title="Security Alerts"
          desc="Immediate notifications for suspicious account activity"
          value={prefs.security}
          onToggle={(c) => toggle("security", c)}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end px-6 py-5">
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Save Preferences
        </button>
      </div>
    </div>
  );
}

/* ================= ROW ================= */

function Row({
  title,
  desc,
  value,
  onToggle,
  highlight = false,
}: {
  title: string;
  desc: string;
  value: { email: boolean; push: boolean; sms: boolean };
  onToggle: (c: "email" | "push" | "sms") => void;
  highlight?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[1fr_80px_80px_80px] items-center px-6 py-4 ${
        highlight ? "bg-gray-50" : ""
      }`}
    >
      {/* Left text */}
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
          {desc}
        </p>
      </div>

      {/* Right toggles */}
      <Toggle checked={value.email} onClick={() => onToggle("email")} />
      <Toggle checked={value.push} onClick={() => onToggle("push")} />
      <Toggle checked={value.sms} onClick={() => onToggle("sms")} />
    </div>
  );
}

/* ================= TOGGLE ================= */

function Toggle({
  checked,
  onClick,
}: {
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`relative h-7 w-12 rounded-full transition ${
          checked ? "bg-blue-600" : "bg-gray-200"
        }`}
      >
        <span
          className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </button>
    </div>
  );
}
