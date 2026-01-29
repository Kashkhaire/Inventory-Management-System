"use client";

import { useState } from "react";

export default function Security() {
  const [twoFA, setTwoFA] = useState(true);
  const [timeout, setTimeoutValue] = useState("30");

  return (
    <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-start gap-3 px-6 pt-6">
        <span className="text-xl">🔐</span>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Security Settings
          </h2>
          <p className="text-sm text-gray-500">
            Protect your account with advanced security features
          </p>
        </div>
      </div>

      {/* Two Factor Authentication */}
      <div className="mx-6 mt-6 rounded-xl bg-slate-100 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🛡️</span>
              <p className="font-medium text-gray-900">
                Two-Factor Authentication
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Add an extra layer of security to your account with 2FA
            </p>
          </div>

          <Toggle checked={twoFA} onClick={() => setTwoFA(!twoFA)} />
        </div>

        <div className="mt-4">
          <button className="text-sm font-medium text-blue-600 hover:underline">
            📱 View QR Code
          </button>
        </div>
      </div>

      {/* Session Timeout */}
      <div className="mx-6 mt-6 rounded-xl bg-slate-100 p-5">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">⏱️</span>
          <p className="font-medium text-gray-900">
            Session Timeout
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Automatically log out after period of inactivity
        </p>

        <select
          value={timeout}
          onChange={(e) => setTimeoutValue(e.target.value)}
          className="mt-4 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm"
        >
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="60">1 hour</option>
          <option value="120">2 hours</option>
        </select>
      </div>

      {/* Password Management */}
      <div className="mx-6 mt-6 rounded-xl bg-slate-100 p-5">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">🔑</span>
          <p className="font-medium text-gray-900">
            Password Management
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Update your password regularly to keep your account secure
        </p>

        <button className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Change Password
        </button>
      </div>

      {/* Active Sessions */}
      <div className="mx-6 mt-6 mb-6 rounded-xl bg-slate-100 p-5">
        <div className="flex items-center gap-2">
          <span className="text-blue-600">💻</span>
          <p className="font-medium text-gray-900">
            Active Sessions
          </p>
        </div>

        <div className="mt-4 space-y-3">

          <Session
            device="iPhone 14 Pro"
            location="San Francisco, CA"
            time="Current session"
            active
          />

          <Session
            device="Chrome on MacBook Pro"
            location="San Francisco, CA"
            time="2 hours ago"
          />

        </div>
      </div>
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
  );
}

/* ================= SESSION ROW ================= */

function Session({
  device,
  location,
  time,
  active = false,
}: {
  device: string;
  location: string;
  time: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
      <div>
        <p className="font-medium text-gray-900">
          {device}
        </p>
        <p className="text-sm text-gray-500">
          {location} • {time}
        </p>
      </div>

      {active ? (
        <span className="text-sm font-medium text-green-600">
          Active
        </span>
      ) : (
        <button className="text-sm font-medium text-red-600 hover:underline">
          Revoke
        </button>
      )}
    </div>
  );
}
