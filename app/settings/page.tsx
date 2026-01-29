"use client";

import { useState } from "react";

// IMPORT FROM ROOT components FOLDER 👇
import CompanyProfile from "@/components/settings/CompanyProfile";
import UserManagement from "@/components/settings/UserManagement";
import Integrations from "@/components/settings/Integrations";
import Notifications from "@/components/settings/Notifications";
import Security from "@/components/settings/Security";
import Billing from "@/components/settings/Billing";

export default function Page() {
  const [activeTab, setActiveTab] = useState<
    "company" | "users" | "integrations" | "notifications" | "security" | "billing"
  >("company");

  return (
    <div className="w-full">

      {/* Title */}
      <h1 className="text-[32px] font-semibold text-gray-900">
        System Settings
      </h1>
      <p className="mt-1 text-[15px] text-gray-500">
        Configure your platform preferences, manage users, and customize your InventoryPro experience
      </p>

      {/* Tabs */}
      <div className="mt-6 flex gap-8 border-b border-gray-200">
        <Tab label="Company Profile" icon="🏢" active={activeTab === "company"} onClick={() => setActiveTab("company")} />
        <Tab label="User Management" icon="👥" active={activeTab === "users"} onClick={() => setActiveTab("users")} />
        <Tab label="Integrations" icon="🔌" active={activeTab === "integrations"} onClick={() => setActiveTab("integrations")} />
        <Tab label="Notifications" icon="🔔" active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} />
        <Tab label="Security" icon="🔒" active={activeTab === "security"} onClick={() => setActiveTab("security")} />
        <Tab label="Billing" icon="💳" active={activeTab === "billing"} onClick={() => setActiveTab("billing")} />
      </div>

      {/* CONTENT */}
      {activeTab === "company" && <CompanyProfile />}
      {activeTab === "users" && <UserManagement />}
      {activeTab === "integrations" && <Integrations />}
      {activeTab === "notifications" && <Notifications />}
      {activeTab === "security" && <Security />}
      {activeTab === "billing" && <Billing />}
    </div>
  );
}
function Tab({
  label,
  icon,
  active = false,
  onClick,
}: {
  label: string;
  icon: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 pb-3 text-sm font-medium ${
        active
          ? "border-b-2 border-blue-600 text-blue-600"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
