'use client';

import { Order } from '@/lib/mock-data/orders';
import { Search, Filter } from 'lucide-react';
import OrderRow from './OrderRow';

type OrderStatus = Order['status'];
type PaymentStatus = Order['paymentStatus'];

interface OrderTableProps {
	orders: Order[];
	searchTerm: string;
	onSearchChange: (value: string) => void;
	statusFilter: OrderStatus | 'all';
	onStatusFilterChange: (value: OrderStatus | 'all') => void;
	paymentFilter: PaymentStatus | 'all'; // ✅ اضافه شد
	onPaymentFilterChange: (value: PaymentStatus | 'all') => void; // ✅ اضافه شد
	dateFrom: string; // ✅ اضافه شد
	onDateFromChange: (value: string) => void; // ✅ اضافه شد
	dateTo: string; // ✅ اضافه شد
	onDateToChange: (value: string) => void; // ✅ اضافه شد
	onEdit: (order: Order) => void;
	onDelete: (order: Order) => void;
	onView: (order: Order) => void;
}

export default function OrderTable({
	orders,
	searchTerm,
	onSearchChange,
	statusFilter,
	onStatusFilterChange,
	paymentFilter,
	onPaymentFilterChange,
	dateFrom,
	onDateFromChange,
	dateTo,
	onDateToChange,
	onEdit,
	onDelete,
	onView,
}: OrderTableProps) {
	return (
		<div>
			{/* Header با فیلترها */}
			<div className="p-6 space-y-4 border-b border-border">
				{/* Search Box */}
				<div className="relative">
					<Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => onSearchChange(e.target.value)}
						placeholder="جستجو بر اساس شماره سفارش، نام یا شماره تماس..."
						className="w-full pr-10 pl-4 py-2 bg-background border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
					/>
				</div>

				{/* فیلترها */}
				<div className="flex flex-wrap items-center gap-3">
					<div className="flex items-center gap-2">
						<Filter size={18} className="text-text-secondary" />
						<span className="text-sm text-text-secondary font-medium">فیلترها:</span>
					</div>

					{/* وضعیت سفارش */}
					<select
						value={statusFilter}
						onChange={(e) =>
							onStatusFilterChange(e.target.value as OrderStatus | 'all')
						}
						className="px-3 py-2 bg-background border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
						<option value="all">همه سفارشات</option>
						<option value="pending">در انتظار</option>
						<option value="processing">در حال پردازش</option>
						<option value="completed">تکمیل شده</option>
						<option value="cancelled">لغو شده</option>
					</select>

					{/* وضعیت پرداخت */}
					<select
						value={paymentFilter}
						onChange={(e) =>
							onPaymentFilterChange(e.target.value as PaymentStatus | 'all')
						}
						className="px-3 py-2 bg-background border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
						<option value="all">همه پرداخت‌ها</option>
						<option value="paid">پرداخت شده</option>
						<option value="unpaid">پرداخت نشده</option>
						<option value="refunded">بازگشت داده شده</option>
					</select>

					{/* تاریخ از */}
					<input
						type="date"
						value={dateFrom}
						onChange={(e) => onDateFromChange(e.target.value)}
						placeholder="از تاریخ"
						className="px-3 py-2 bg-background border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
					/>

					{/* تاریخ تا */}
					<input
						type="date"
						value={dateTo}
						onChange={(e) => onDateToChange(e.target.value)}
						placeholder="تا تاریخ"
						className="px-3 py-2 bg-background border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
					/>
				</div>
			</div>

			{/* Table */}
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-muted border-b border-border">
						<tr>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								شماره سفارش
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								نام مشتری
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								شماره تماس
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								مبلغ کل
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								وضعیت سفارش
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								وضعیت پرداخت
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								تاریخ ثبت
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-text-secondary">
								عملیات
							</th>
						</tr>
					</thead>
					<tbody>
						{orders.length > 0 ? (
							orders.map((order) => (
								<OrderRow
									key={order.id}
									order={order}
									onEdit={onEdit}
									onDelete={onDelete}
									onView={onView}
								/>
							))
						) : (
							<tr>
								<td colSpan={8} className="px-6 py-12 text-center">
									<div className="text-text-secondary">
										<p className="text-lg mb-2">سفارشی یافت نشد</p>
										<p className="text-sm">
											لطفاً فیلترها را تغییر دهید یا سفارش جدیدی اضافه کنید
										</p>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
