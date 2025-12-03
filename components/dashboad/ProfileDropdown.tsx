// components/dashboard/ProfileDropdown.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface ProfileDropdownProps {
	user?: {
		name: string;
		email: string;
		avatar?: string;
	};
}

const menuItems = [
	{ icon: User, label: 'پروفایل من', href: '/dashboard/profile' },
	{ icon: Settings, label: 'تنظیمات', href: '/dashboard/settings' },
	{ icon: HelpCircle, label: 'راهنما', href: '/dashboard/help' },
	{ icon: LogOut, label: 'خروج از حساب', href: '/logout', variant: 'danger' as const },
];

export function ProfileDropdown({ user }: ProfileDropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// بستن با کلیک خارج از منو
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	// بستن با ESC
	useEffect(() => {
		function handleEscape(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen]);

	const defaultUser = {
		name: user?.name || 'فرشاد بهاری',
		email: user?.email || 'farshad@example.com',
		avatar: user?.avatar,
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Profile Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-bg-hover transition-colors"
				aria-expanded={isOpen}
				aria-haspopup="true">
				{/* Avatar */}
				<div className="relative w-8 h-8 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-900/30">
					{defaultUser.avatar ? (
						<Image
							src={defaultUser.avatar}
							alt={defaultUser.name}
							fill
							className="object-cover"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium text-sm">
							{defaultUser.name.charAt(0)}
						</div>
					)}
				</div>

				{/* Chevron */}
				<ChevronDown
					className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{/* Dropdown Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						transition={{ duration: 0.15 }}
						className="absolute left-0 mt-2 w-64 bg-bg-primary border border-border rounded-lg shadow-lg overflow-hidden z-50">
						{/* User Info Section */}
						<div className="p-4 border-b border-border">
							<div className="flex items-center gap-3">
								{/* Avatar */}
								<div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-900/30 shrink-0">
									{defaultUser.avatar ? (
										<Image
											src={defaultUser.avatar}
											alt={defaultUser.name}
											fill
											className="object-cover"
										/>
									) : (
										<div className="w-full h-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium">
											{defaultUser.name.charAt(0)}
										</div>
									)}
								</div>

								{/* User Details */}
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-text-primary truncate">
										{defaultUser.name}
									</p>
									<p className="text-xs text-text-secondary truncate">
										{defaultUser.email}
									</p>
								</div>
							</div>
						</div>

						{/* Menu Items */}
						<div className="py-2">
							{menuItems.map((item, index) => {
								const Icon = item.icon;
								const isDanger = item.variant === 'danger';

								return (
									<a
										key={index}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
											isDanger
												? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30'
												: 'text-text-primary hover:bg-bg-hover'
										}`}>
										<Icon className="w-4 h-4 shrink-0" />
										<span className="text-sm">{item.label}</span>
									</a>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
