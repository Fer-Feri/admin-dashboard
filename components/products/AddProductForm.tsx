'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '@/lib/mock-data/products';

interface AddProductFormProps {
	onSave: (product: Omit<Product, 'id' | 'createdAt'>) => void;
	onCancel: () => void;
}

export default function AddProductForm({ onSave, onCancel }: AddProductFormProps) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [stock, setStock] = useState('');
	const [category, setCategory] = useState('لپ‌تاپ');
	const [status, setStatus] = useState<Product['status']>('active');
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validate = () => {
		const newErrors: Record<string, string> = {};

		if (!name.trim()) newErrors.name = 'نام محصول الزامی است';
		if (!price || Number(price) <= 0) newErrors.price = 'قیمت باید عدد مثبت باشد';
		if (!stock || Number(stock) < 0) newErrors.stock = 'موجودی باید عدد غیر منفی باشد';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		onSave({
			name,
			price: Number(price),
			stock: Number(stock),
			category,
			status,
		});
	};

	return (
		<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<div className="bg-bg-primary rounded-lg shadow-xl w-full max-w-md">
				<div className="flex items-center justify-between p-6 border-b border-border">
					<h2 className="text-xl font-bold text-text-primary">افزودن محصول جدید</h2>
					<button
						onClick={onCancel}
						className="p-2 hover:bg-bg-secondary rounded-lg transition-colors">
						<X className="w-5 h-5" />
					</button>
				</div>

				<form onSubmit={handleSubmit} className="p-6 space-y-4">
					<div>
						<label className="block text-sm font-medium text-text-primary mb-2">
							نام محصول *
						</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-4 py-2 bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
						/>
						{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
					</div>

					<div>
						<label className="block text-sm font-medium text-text-primary mb-2">
							قیمت (تومان) *
						</label>
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							className="w-full px-4 py-2 bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
						/>
						{errors.price && (
							<p className="text-red-500 text-xs mt-1">{errors.price}</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium text-text-primary mb-2">
							موجودی *
						</label>
						<input
							type="number"
							value={stock}
							onChange={(e) => setStock(e.target.value)}
							className="w-full px-4 py-2 bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
						/>
						{errors.stock && (
							<p className="text-red-500 text-xs mt-1">{errors.stock}</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium text-text-primary mb-2">
							دسته‌بندی
						</label>
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className="w-full px-4 py-2 bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
							<option value="لپ‌تاپ">لپ‌تاپ</option>
							<option value="لوازم جانبی">لوازم جانبی</option>
							<option value="مانیتور">مانیتور</option>
							<option value="صوتی">صوتی</option>
							<option value="ذخیره‌سازی">ذخیره‌سازی</option>
							<option value="چاپگر">چاپگر</option>
							<option value="تبلت">تبلت</option>
						</select>
					</div>

					<div>
						<label className="block text-sm font-medium text-text-primary mb-2">
							وضعیت
						</label>
						<select
							value={status}
							onChange={(e) => setStatus(e.target.value as Product['status'])}
							className="w-full px-4 py-2 bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
							<option value="active">فعال</option>
							<option value="inactive">غیرفعال</option>
						</select>
					</div>

					<div className="flex gap-3 pt-4">
						<button
							type="submit"
							className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
							ذخیره
						</button>
						<button
							type="button"
							onClick={onCancel}
							className="flex-1 bg-bg-secondary hover:bg-bg-tertiary text-text-primary py-2 rounded-lg transition-colors">
							لغو
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
