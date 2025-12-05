'use client';

import { Product } from '@/lib/mock-data/products';
import Image from 'next/image';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { formatDate } from '@/utils/formatDate';

interface ProductRowProps {
	product: Product;
	onDeleteProduct: () => void;
	onEditProduct: () => void;
}

export default function ProductRow({ product, onDeleteProduct, onEditProduct }: ProductRowProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	const statusStyles: Record<Product['status'], string> = {
		active: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
		inactive: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
	};

	const statusLabels: Record<Product['status'], string> = {
		active: 'فعال',
		inactive: 'غیرفعال',
	};

	// فرمت قیمت با جداکننده
	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
	};

	return (
		<tr className="hover:bg-bg-secondary transition-colors">
			{/* ستون محصول (تصویر + نام) */}
			<td className="px-6 py-4">
				<div className="flex items-center gap-3">
					{/* Image */}
					<div className="relative w-10 h-10 rounded-lg overflow-hidden bg-bg-secondary shrink-0">
						{product.image ? (
							<Image
								src={product.image}
								alt={product.name}
								fill
								className="object-cover"
							/>
						) : (
							<div className="w-full h-full flex items-center justify-center text-text-secondary font-semibold text-xs">
								{product.name.charAt(0)}
							</div>
						)}
					</div>

					{/* Name */}
					<div className="min-w-0">
						<p className="text-sm font-medium text-text-primary truncate">
							{product.name}
						</p>
					</div>
				</div>
			</td>

			{/* ستون دسته‌بندی */}
			<td className="px-6 py-4">
				<span className="text-sm text-text-primary">{product.category}</span>
			</td>

			{/* ستون قیمت */}
			<td className="px-6 py-4">
				<span className="text-sm text-text-primary">{formatPrice(product.price)}</span>
			</td>

			{/* ستون موجودی */}
			<td className="px-6 py-4">
				<span
					className={`text-sm ${
						product.stock === 0
							? 'text-red-600 dark:text-red-400 font-medium'
							: 'text-text-primary'
					}`}>
					{product.stock === 0 ? 'ناموجود' : product.stock}
				</span>
			</td>

			{/* ستون وضعیت */}
			<td className="px-6 py-4">
				<span
					className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
						statusStyles[product.status]
					}`}>
					{statusLabels[product.status]}
				</span>
			</td>

			{/* ستون تاریخ ایجاد */}
			<td className="px-6 py-4">
				<span className="text-sm text-text-secondary">{formatDate(product.createdAt)}</span>
			</td>

			{/* ستون عملیات */}
			<td className="px-6 py-4">
				<div className="flex items-center justify-center gap-2">
					<button
						onClick={onEditProduct}
						className="p-2 hover:bg-bg-secondary rounded-lg transition-colors text-text-secondary hover:text-blue-600"
						title="ویرایش">
						<Edit className="w-4 h-4" />
					</button>

					<button
						onClick={onDeleteProduct}
						className="p-2 hover:bg-bg-secondary rounded-lg transition-colors text-text-secondary hover:text-red-600"
						title="حذف">
						<Trash2 className="w-4 h-4" />
					</button>

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
