'use client';

import React, { useState } from 'react';
import { User } from '@/lib/mock-data/users';

interface AddUserFormProps {
	onSave: (user: Omit<User, 'id' | 'createdAt'>) => void;
	onCancel: () => void;
}

export default function AddUserForm({ onSave, onCancel }: AddUserFormProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		role: 'user' as User['role'],
		status: 'active' as User['status'],
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
	});

	const validate = (): boolean => {
		const newErrors = { name: '', email: '' };

		// ---------------نام----------------
		if (!formData.name.trim()) newErrors.name = 'نام نمی‌تواند خالی باشد.';
		else if (formData.name.length < 3) newErrors.name = 'نام باید حداقل 3 کاراکتر باشد.';

		// ---------------ایمیل----------------
		if (!formData.email.trim()) newErrors.email = 'ایمیل نمی‌تواند خالی باشد.';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
			newErrors.email = 'فرمت ایمیل معتبر نیست';

		setErrors(newErrors);
		return newErrors.name === '' && newErrors.email === '';
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) onSave(formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
			<div className="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg p-6 w-full max-w-md shadow-xl">
				<h2 className="text-xl font-bold mb-4">افزودن کاربر جدید</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium mb-1">نام</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
						/>
						{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">ایمیل</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
						/>
						{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">نقش</label>
						<select
							name="role"
							value={formData.role}
							onChange={handleChange}
							className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600">
							<option value="user">کاربر</option>
							<option value="admin">مدیر</option>
							<option value="manager">مدیر کل</option>
						</select>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">وضعیت</label>
						<select
							name="status"
							value={formData.status}
							onChange={handleChange}
							className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600">
							<option value="active">فعال</option>
							<option value="inactive">غیرفعال</option>
							<option value="pending">در انتظار</option>
						</select>
					</div>

					<div className="flex justify-end gap-2 pt-4">
						<button
							type="button"
							onClick={onCancel}
							className="px-4 py-2 border dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
							انصراف
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
							ذخیره
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
