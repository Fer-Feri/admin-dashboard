// components/users/UserSearch.tsx

'use client';

import { Search, X } from 'lucide-react';

interface UserSearchProps {
	value: string; // مقدار فعلی سرچ
	onChange: (value: string) => void; // وقتی کاربر تایپ می‌کند
}

export default function UserSearch({ value, onChange }: UserSearchProps) {
	return (
		<div className="relative w-full sm:w-64">
			{/* آیکون سرچ */}
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />

			{/* فیلد سرچ */}
			<input
				type="text"
				placeholder="جستجوی کاربر..."
				className="w-full pl-10 pr-10 py-2 rounded-lg border border-border bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-transparent"
				// مقدار را کنترل می‌کنیم
				value={value}
				// هر بار تایپ → مقدار جدید به Parent داده می‌شود
				onChange={(e) => onChange(e.target.value)}
			/>

			{/* دکمه پاک کردن سرچ */}
			{value && (
				<button
					onClick={() => onChange('')}
					className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary">
					<X className="w-5 h-5" />
				</button>
			)}
		</div>
	);
}
