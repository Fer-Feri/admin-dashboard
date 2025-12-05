'use client';

import { Filter } from 'lucide-react';
import { useState } from 'react';

interface OrderFiltersProps {
	onFilter: (filters: {
		orderStatus: string;
		paymentStatus: string;
		dateFrom: string;
		dateTo: string;
	}) => void;
}

export default function OrderFilters({ onFilter }: OrderFiltersProps) {
	const [orderStatus, setOrderStatus] = useState('all');
	const [paymentStatus, setPaymentStatus] = useState('all');
	const [dateFrom, setDateFrom] = useState('');
	const [dateTo, setDateTo] = useState('');

	const handleFilterChange = (
		field: 'orderStatus' | 'paymentStatus' | 'dateFrom' | 'dateTo',
		value: string
	) => {
		const newFilters = {
			orderStatus,
			paymentStatus,
			dateFrom,
			dateTo,
			[field]: value,
		};

		if (field === 'orderStatus') setOrderStatus(value);
		if (field === 'paymentStatus') setPaymentStatus(value);
		if (field === 'dateFrom') setDateFrom(value);
		if (field === 'dateTo') setDateTo(value);

		onFilter(newFilters);
	};

	return (
		<div className="flex flex-wrap items-center gap-3">
			<div className="flex items-center gap-2">
				<Filter size={18} className="text-gray-500" />
				<span className="text-sm text-gray-400 font-medium">فیلترها:</span>
			</div>

			{/* وضعیت سفارش */}
			<select
				value={orderStatus}
				onChange={(e) => handleFilterChange('orderStatus', e.target.value)}
				className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
				<option value="all">همه سفارشات</option>
				<option value="pending">در انتظار</option>
				<option value="processing">در حال پردازش</option>
				<option value="completed">تکمیل شده</option>
				<option value="cancelled">لغو شده</option>
			</select>

			{/* وضعیت پرداخت */}
			<select
				value={paymentStatus}
				onChange={(e) => handleFilterChange('paymentStatus', e.target.value)}
				className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
				<option value="all">همه پرداخت‌ها</option>
				<option value="paid">پرداخت شده</option>
				<option value="unpaid">پرداخت نشده</option>
				<option value="refunded">بازگشت داده شده</option>
			</select>

			{/* تاریخ از */}
			<input
				type="date"
				value={dateFrom}
				onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
				className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			/>

			{/* تاریخ تا */}
			<input
				type="date"
				value={dateTo}
				onChange={(e) => handleFilterChange('dateTo', e.target.value)}
				className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			/>
		</div>
	);
}
