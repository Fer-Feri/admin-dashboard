// app/dashboard/settings/components/NotificationSettings.tsx
'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function NotificationSettings() {
	const [settings, setSettings] = useState({
		emailNotifications: true,
		smsNotifications: false,
		newOrderAlert: true,
		lowStockAlert: true,
		dailyReport: false,
	});

	const handleToggle = (key: keyof typeof settings) => {
		setSettings({ ...settings, [key]: !settings[key] });
	};

	const handleSave = async () => {
		await new Promise((resolve) => setTimeout(resolve, 800));
		toast.success('تنظیمات اعلان‌ها ذخیره شد');
	};

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-semibold mb-4">تنظیمات اعلان‌ها</h2>

			{/* ایمیل */}
			<div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
				<div>
					<p className="font-medium">اعلان‌های ایمیل</p>
					<p className="text-sm text-gray-500">دریافت اعلان‌ها از طریق ایمیل</p>
				</div>
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						checked={settings.emailNotifications}
						onChange={() => handleToggle('emailNotifications')}
						className="sr-only peer"
					/>
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			</div>

			{/* پیامک */}
			<div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
				<div>
					<p className="font-medium">اعلان‌های پیامکی</p>
					<p className="text-sm text-gray-500">دریافت اعلان‌ها از طریق SMS</p>
				</div>
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						checked={settings.smsNotifications}
						onChange={() => handleToggle('smsNotifications')}
						className="sr-only peer"
					/>
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			</div>

			{/* سفارش جدید */}
			<div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
				<div>
					<p className="font-medium">هشدار سفارش جدید</p>
					<p className="text-sm text-gray-500">اعلان در زمان ثبت سفارش جدید</p>
				</div>
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						checked={settings.newOrderAlert}
						onChange={() => handleToggle('newOrderAlert')}
						className="sr-only peer"
					/>
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			</div>

			{/* موجودی کم */}
			<div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
				<div>
					<p className="font-medium">هشدار موجودی کم</p>
					<p className="text-sm text-gray-500">اعلان زمانی که موجودی محصول کم شود</p>
				</div>
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						checked={settings.lowStockAlert}
						onChange={() => handleToggle('lowStockAlert')}
						className="sr-only peer"
					/>
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			</div>

			{/* گزارش روزانه */}
			<div className="flex items-center justify-between py-3">
				<div>
					<p className="font-medium">گزارش روزانه</p>
					<p className="text-sm text-gray-500">دریافت گزارش فروش هر روز</p>
				</div>
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						checked={settings.dailyReport}
						onChange={() => handleToggle('dailyReport')}
						className="sr-only peer"
					/>
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				</label>
			</div>

			{/* دکمه ذخیره */}
			<button
				onClick={handleSave}
				className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
				ذخیره تنظیمات
			</button>
		</div>
	);
}
