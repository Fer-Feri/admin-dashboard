// app/dashboard/settings/page.tsx
'use client';

import AppearanceSettings from '@/components/sttings/AppearanceSettings';
import GeneralSettings from '@/components/sttings/GeneralSettings';
import NotificationSettings from '@/components/sttings/NotificationSettings';
import SecuritySettings from '@/components/sttings/SecuritySettings';
import { useState } from 'react';

type SettingTab = 'general' | 'notifications' | 'security' | 'appearance';

export default function SettingsPage() {
	const [activeTab, setActiveTab] = useState<SettingTab>('general');

	const tabs = [
		{ id: 'general', label: 'عمومی', icon: '⚙️' },
		{ id: 'notifications', label: 'اعلان‌ها', icon: '🔔' },
		{ id: 'security', label: 'امنیت', icon: '🔒' },
		{ id: 'appearance', label: 'ظاهر', icon: '🎨' },
	] as const;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">تنظیمات</h1>

			{/* Tab Navigation */}
			<div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-6">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id as SettingTab)}
						className={`
              flex items-center gap-2 px-4 py-2 border-b-2 transition-colors
              ${
					activeTab === tab.id
						? 'border-blue-500 text-blue-600 dark:text-blue-400'
						: 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
				}
            `}>
						<span>{tab.icon}</span>
						<span>{tab.label}</span>
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
				{activeTab === 'general' && <GeneralSettings />}
				{activeTab === 'notifications' && <NotificationSettings />}
				{activeTab === 'security' && <SecuritySettings />}
				{activeTab === 'appearance' && <AppearanceSettings />}
			</div>
		</div>
	);
}
