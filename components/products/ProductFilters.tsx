'use client';

import { Product } from '@/lib/mock-data/products';

interface ProductFiltersProps {
	selectedCategory: string;
	onCategoryChange: (category: string) => void;
	selectedStatus: Product['status'] | 'all';
	onStatusChange: (status: Product['status'] | 'all') => void;
}

export default function ProductFilters({
	selectedCategory,
	onCategoryChange,
	selectedStatus,
	onStatusChange,
}: ProductFiltersProps) {
	return (
		<div className="flex items-center gap-3">
			{/* فیلتر دسته‌بندی */}
			<select
				value={selectedCategory}
				onChange={(e) => onCategoryChange(e.target.value)}
				className="px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
				<option value="all">همه دسته‌ها</option>
				<option value="لپ‌تاپ">لپ‌تاپ</option>
				<option value="لوازم جانبی">لوازم جانبی</option>
				<option value="مانیتور">مانیتور</option>
				<option value="صوتی">صوتی</option>
				<option value="ذخیره‌سازی">ذخیره‌سازی</option>
				<option value="چاپگر">چاپگر</option>
				<option value="تبلت">تبلت</option>
			</select>

			{/* فیلتر وضعیت */}
			<select
				value={selectedStatus}
				onChange={(e) => onStatusChange(e.target.value as Product['status'] | 'all')}
				className="px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
				<option value="all">همه وضعیت‌ها</option>
				<option value="active">فعال</option>
				<option value="inactive">غیرفعال</option>
			</select>
		</div>
	);
}
