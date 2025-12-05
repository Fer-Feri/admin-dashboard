// مثال در GeneralSettings.tsx
'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function GeneralSettings() {
	const [settings, setSettings] = useState({
		siteName: 'فروشگاه من',
		siteUrl: 'https://myshop.com',
		adminEmail: 'admin@myshop.com',
		currency: 'IRR',
		timezone: 'Asia/Tehran',
	});

	const [loading, setLoading] = useState(false);

	const handleSave = async () => {
		setLoading(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			toast.success(' تنظیمات با موفقیت ذخیره شد');
		} catch (error) {
			toast.error(' خطا در ذخیره تنظیمات');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-semibold mb-4">تنظیمات عمومی</h2>

			<div>
				<label className="block text-sm font-medium mb-2">نام سایت</label>
				<input
					type="text"
					value={settings.siteName}
					onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
					className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium mb-2">آدرس سایت</label>
				<input
					type="url"
					value={settings.siteUrl}
					onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
					className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium mb-2">ایمیل مدیر</label>
				<input
					type="email"
					value={settings.adminEmail}
					onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
					className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium mb-2">واحد پول</label>
				<select
					value={settings.currency}
					onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
					className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
					<option value="IRR">ریال (IRR)</option>
					<option value="USD">دلار (USD)</option>
					<option value="EUR">یورو (EUR)</option>
				</select>
			</div>

			<div>
				<label className="block text-sm font-medium mb-2">منطقه زمانی</label>
				<select
					value={settings.timezone}
					onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
					className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
					<option value="Asia/Tehran">تهران (UTC+3:30)</option>
					<option value="UTC">UTC</option>
					<option value="America/New_York">نیویورک (UTC-5)</option>
				</select>
			</div>

			<button
				onClick={handleSave}
				disabled={loading}
				className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition">
				{loading ? 'در حال ذخیره...' : 'ذخیره تنظیمات'}
			</button>
		</div>
	);
}
