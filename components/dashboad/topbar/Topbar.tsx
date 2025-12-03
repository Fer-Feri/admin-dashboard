// components/dashboard/Topbar.tsx
'use client';

import ThemeToggle from '@/components/theme/ThemeToggle';
import { Menu, Bell } from 'lucide-react';
import { ProfileDropdown } from '../ProfileDropdown';

interface TopbarProps {
	onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
	return (
		<header className="h-16 bg-bg-primary border-b border-border flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
			{/* Right Side */}
			<div className="flex items-center gap-3">
				{/* Mobile Menu Button */}
				<button
					onClick={onMenuClick}
					className="md:hidden p-2 hover:bg-bg-hover rounded-lg transition-colors"
					aria-label="باز کردن منو">
					<Menu className="w-5 h-5 text-text-primary" />
				</button>

				{/* Logo/Title */}
				<h1 className="text-lg font-semibold text-text-primary">داشبورد</h1>
			</div>

			{/* Left Side */}
			<div className="flex items-center gap-2">
				{/* Theme Toggle */}
				<ThemeToggle />

				{/* Notifications */}
				<button
					className="relative p-2 hover:bg-bg-hover rounded-lg transition-colors"
					aria-label="اعلان‌ها">
					<Bell className="w-5 h-5 text-text-primary" />
					{/* Badge */}
					<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full">
						<span className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
					</span>
				</button>

				{/* Profile Dropdown */}
				<ProfileDropdown />
			</div>
		</header>
	);
}
