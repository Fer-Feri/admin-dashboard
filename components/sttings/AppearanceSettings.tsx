// app/dashboard/settings/components/AppearanceSettings.tsx
'use client';

import { useTheme } from 'next-themes';

export default function AppearanceSettings() {
	const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-semibold mb-4">تنظیمات ظاهری</h2>

			<div>
				<label className="block text-sm font-medium mb-3">حالت نمایش</label>
				<div className="grid grid-cols-3 gap-4">
					<ThemeButton
						icon="☀️"
						label="روشن"
						isActive={theme === 'light'}
						onClick={() => setTheme('light')}
					/>

					<ThemeButton
						icon="🌙"
						label="تیره"
						isActive={theme === 'dark'}
						onClick={() => setTheme('dark')}
					/>

					<ThemeButton
						icon="💻"
						label="سیستم"
						isActive={theme === 'system'}
						onClick={() => setTheme('system')}
					/>
				</div>

				{theme === 'system' && (
					<p className="text-sm text-gray-500 mt-3">
						حالت فعلی سیستم: {resolvedTheme === 'dark' ? 'تیره 🌙' : 'روشن ☀️'}
					</p>
				)}
			</div>

			<div className="pt-6 border-t border-gray-200 dark:border-gray-700">
				<h3 className="font-medium mb-3">پیش‌نمایش</h3>
				<div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
					<h4 className="text-xl font-bold mb-2">پنل مدیریت</h4>
					<p className="opacity-90">این یک پیش‌نمایش از ظاهر پنل است</p>
				</div>
			</div>
		</div>
	);
}

function ThemeButton({
	icon,
	label,
	isActive,
	onClick,
}: {
	icon: string;
	label: string;
	isActive: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`
				p-4 border-2 rounded-lg transition-all
				${
					isActive
						? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
						: 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
				}
			`}>
			<div className="text-3xl mb-2">{icon}</div>
			<p className="font-medium">{label}</p>
		</button>
	);
}
