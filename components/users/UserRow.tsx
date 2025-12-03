'use client';

import { User } from '@/lib/mock-data/users';
import Image from 'next/image';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface UserRowProps {
	user: User;
}

export default function UserRow({ user }: UserRowProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	// ✅ استفاده از دیکشنری‌های مرکزی از mock-data
	const roleLabels: Record<User['role'], string> = {
		admin: 'مدیر کل',
		manager: 'مدیر',
		user: 'کاربر',
	};

	// ✅ فقط سه حالت: active, inactive, pending
	const statusStyles: Record<User['status'], string> = {
		active: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
		inactive: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
		pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
	};

	const statusLabels: Record<User['status'], string> = {
		active: 'فعال',
		inactive: 'غیرفعال',
		pending: 'در انتظار',
	};

	return (
		<tr className="hover:bg-bg-secondary transition-colors">
			{/* ستون کاربر (آواتار + نام + ایمیل) */}
			<td className="px-6 py-4">
				<div className="flex items-center gap-3">
					{/* Avatar */}
					<div className="relative w-10 h-10 rounded-full overflow-hidden bg-bg-secondary shrink-0">
						{user.avatar ? (
							<Image
								src={user.avatar}
								alt={user.name}
								fill
								className="object-cover"
							/>
						) : (
							<div className="w-full h-full flex items-center justify-center text-text-secondary font-semibold">
								{user.name.charAt(0)}
							</div>
						)}
					</div>

					{/* Name + Email */}
					<div className="min-w-0">
						<p className="text-sm font-medium text-text-primary truncate">
							{user.name}
						</p>
						<p className="text-xs text-text-secondary truncate">{user.email}</p>
					</div>
				</div>
			</td>

			{/* ستون نقش */}
			<td className="px-6 py-4">
				<span className="text-sm text-text-primary">{roleLabels[user.role]}</span>
			</td>

			{/* ستون وضعیت */}
			<td className="px-6 py-4">
				<span
					className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
						statusStyles[user.status]
					}`}>
					{statusLabels[user.status]}
				</span>
			</td>

			{/* ستون تاریخ عضویت */}
			<td className="px-6 py-4">
				<span className="text-sm text-text-secondary">{user.createdAt}</span>
			</td>

			{/* ستون آخرین ورود */}
			<td className="px-6 py-4">
				<span className="text-sm text-text-secondary">{user.lastLogin || 'هرگز'}</span>
			</td>

			{/* ستون عملیات */}
			<td className="px-6 py-4">
				<div className="flex items-center justify-center gap-2">
					{/* دکمه ویرایش */}
					<button
						className="p-2 hover:bg-bg-secondary rounded-lg transition-colors text-text-secondary hover:text-blue-600"
						title="ویرایش">
						<Edit className="w-4 h-4" />
					</button>

					{/* دکمه حذف */}
					<button
						className="p-2 hover:bg-bg-secondary rounded-lg transition-colors text-text-secondary hover:text-red-600"
						title="حذف">
						<Trash2 className="w-4 h-4" />
					</button>

					{/* منوی بیشتر */}
					<button
						className="p-2 hover:bg-bg-secondary rounded-lg transition-colors text-text-secondary"
						onClick={() => setMenuOpen(!menuOpen)}>
						<MoreVertical className="w-4 h-4" />
					</button>
				</div>
			</td>
		</tr>
	);
}
