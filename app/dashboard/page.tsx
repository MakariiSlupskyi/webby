'use client'

import { useState } from "react";
import Header from "./_components/header";
import AppsTab from "./_components/tabs/apps";
import AccountTab from "./_components/tabs/account";
import PricingTab from "./_components/tabs/pricing";
import SettingsTab from "./_components/tabs/settings";

const TABS = {
  apps: 'Apps',
  account: 'Account',
  pricing: 'Pricing',
  settings: 'Settings',
};

type Tab = keyof typeof TABS;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('apps');

  const renderContent = () => {
    switch (activeTab) {
      case 'apps':
        return <AppsTab />;
      case 'account':
        return <AccountTab />;
      case 'pricing':
        return <PricingTab />;
      case 'settings':
        return <SettingsTab />;
    }
  }

  return (
    <div className="container">
      <Header />
      <section className="flex gap-8">
        <div className="min-w-32">
          {Object.entries(TABS).map(([key, label]) => (
            <div
              key={key}
              onClick={() => setActiveTab(key as Tab)}
              className={`flex items-center gap-3 px-2 py-1 rounded-md hover:bg-card transition-all ${activeTab === key && 'bg-card'}`}
            >
              <div className="w-3 h-3 rounded border-2 border-primary" />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="w-full">
          {renderContent()}
        </div>
      </section>
    </div>
  );
}