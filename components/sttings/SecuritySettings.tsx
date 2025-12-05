// app/dashboard/settings/components/SecuritySettings.tsx
'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SecuritySettings() {
	const [passwords, setPasswords] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const handleChangePassword = async () => {
		if (passwords.newPassword !== passwords.confirmPassword) {
			toast.error('رمز عبور جدید با تکرار آن مطابقت ندارد');
			return;
		}

		if (passwords.newPassword.length < 8) {
			toast.error('رمز عبور باید حداقل ۸ کاراکتر باشد');
			return;
		}

		// شبیه‌سازی تغییر رمز
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast.success('رمز عبور با موفقیت تغییر کرد');
		setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
	};

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-semibold mb-4">تنظیمات امنیتی</h2>

			{/* تغییر رمز عبور */}
			<div className="space-y-4">
				<h3 className="font-medium">تغییر رمز عبور</h3>

				<div>
					<label className="block text-sm font-medium mb-2">رمز عبور فعلی</label>
					<input
						type="password"
						value={passwords.currentPassword}
						onChange={(e) =>
							setPasswords({ ...passwords, currentPassword: e.target.value })
						}
						className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">رمز عبور جدید</label>
					<input
						type="password"
						value={passwords.newPassword}
						onChange={(e) =>
							setPasswords({ ...passwords, newPassword: e.target.value })
						}
						className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-2">تکرار رمز عبور جدید</label>
					<input
						type="password"
						value={passwords.confirmPassword}
						onChange={(e) =>
							setPasswords({ ...passwords, confirmPassword: e.target.value })
						}
						className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
					/>
				</div>

				<button
					onClick={handleChangePassword}
					className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
					تغییر رمز عبور
				</button>
			</div>

			{/* نشست‌های فعال */}
			<div className="pt-6 border-t border-gray-200 dark:border-gray-700">
				<h3 className="font-medium mb-4">نشست‌های فعال</h3>
				<div className="space-y-3">
					<div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
						<div>
							<p className="font-medium">نشست فعلی</p>
							<p className="text-sm text-gray-500">Chrome - Windows • ۵ دقیقه پیش</p>
						</div>
						<span className="text-green-500 text-sm">● فعال</span>
					</div>
				</div>
			</div>
		</div>
	);
}
