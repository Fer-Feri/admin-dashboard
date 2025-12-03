'use client';

import { type AddUserFormData, addUserSchema } from '@/lib/validations/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AddUserForm() {
	const router = useRouter();

	const [isSubmitting, setisSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AddUserFormData>({
		resolver: zodResolver(addUserSchema),
		defaultValues: {
			role: 'User',
			status: 'active',
		},
	});

	const onSumbit = async (data: AddUserFormData) => {
		setisSubmitting(true);

		console.log('Form Data:', data);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		router.push('/dashboard/users');
	};

	return (
		<form onSubmit={handleSubmit(onSumbit)} className="space-y-6">
			{/* دکمه بازگشت */}
			<button
				type="button"
				onClick={() => router.back()}
				className="flex items-center gap-2 text-text-tertiary hover:text-gray-400">
				<ArrowLeft className="w-4 h-4" />
				بازگشت
			</button>

			{/* نام کامل */}
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
					نام کامل <span className="text-red-500">*</span>
				</label>
				<input
					id="name"
					type="text"
					{...register('name')}
					className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
						errors.name ? 'border-red-500' : 'border-gray-300'
					}`}
					placeholder="فرشاد بهاری"
				/>
				{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
			</div>

			{/* ایمیل */}
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
					ایمیل <span className="text-red-500">*</span>
				</label>
				<input
					id="email"
					type="email"
					{...register('email')}
					className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
						errors.email ? 'border-red-500' : 'border-gray-300'
					}`}
					placeholder="farshad@example.com"
					dir="ltr"
				/>
				{errors.email && (
					<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
				)}
			</div>

			{/* رمز عبور */}
			<div>
				<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
					رمز عبور <span className="text-red-500">*</span>
				</label>
				<input
					id="password"
					type="password"
					{...register('password')}
					className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
						errors.password ? 'border-red-500' : 'border-gray-300'
					}`}
					placeholder="حداقل ۸ کاراکتر"
					dir="ltr"
				/>
				{errors.password && (
					<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
				)}
				<p className="text-gray-500 text-xs mt-1">باید شامل حروف بزرگ، کوچک و عدد باشد</p>
			</div>

			{/* نقش کاربری */}
			<div>
				<label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
					نقش کاربری <span className="text-red-500">*</span>
				</label>
				<select
					id="role"
					{...register('role')}
					className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
						errors.role ? 'border-red-500' : 'border-gray-300'
					}`}>
					<option value="User">کاربر</option>
					<option value="Manager">مدیر</option>
					<option value="Admin">مدیر کل</option>
				</select>
				{errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
			</div>

			{/* وضعیت */}
			<div>
				<label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
					وضعیت <span className="text-red-500">*</span>
				</label>
				<select
					id="status"
					{...register('status')}
					className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
						errors.status ? 'border-red-500' : 'border-gray-300'
					}`}>
					<option value="active">فعال</option>
					<option value="inactive">غیرفعال</option>
					<option value="pending">در انتظار تایید</option>
				</select>
				{errors.status && (
					<p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
				)}
			</div>

			{/* دکمه‌های عملیات */}
			<div className="flex gap-4 pt-4">
				<button
					type="submit"
					disabled={isSubmitting}
					className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors">
					{isSubmitting ? 'در حال ذخیره...' : 'ذخیره کاربر'}
				</button>
				<button
					type="button"
					disabled={isSubmitting}
					onClick={() => router.back()}
					className="flex-1 bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-300 transition-colors">
					انصراف
				</button>
			</div>
		</form>
	);
}
