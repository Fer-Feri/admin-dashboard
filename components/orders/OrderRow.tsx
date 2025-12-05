'use client';

import { Order } from '@/lib/mock-data/orders';
import { Edit, Trash2, Eye } from 'lucide-react';

interface OrderRowProps {
	order: Order;
	onEdit: (order: Order) => void;
	onDelete: (order: Order) => void;
	onView: (order: Order) => void; // ✅ اضافه شد
}

export default function OrderRow({ order, onEdit, onDelete, onView }: OrderRowProps) {
	const getStatusBadge = (status: string) => {
		const statusStyles = {
			pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
			processing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
			completed: 'bg-green-500/20 text-green-400 border-green-500/30',
			cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
		};

		const statusText = {
			pending: 'در انتظار',
			processing: 'در حال پردازش',
			completed: 'تکمیل شده',
			cancelled: 'لغو شده',
		};

		return (
			<span
				className={`px-3 py-1 rounded-full text-sm border ${
					statusStyles[status as keyof typeof statusStyles]
				}`}>
				{statusText[status as keyof typeof statusText]}
			</span>
		);
	};

	const getPaymentBadge = (status: string) => {
		const statusStyles = {
			paid: 'bg-green-500/20 text-green-400 border-green-500/30',
			unpaid: 'bg-red-500/20 text-red-400 border-red-500/30',
			refunded: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
		};

		const statusText = {
			paid: 'پرداخت شده',
			unpaid: 'پرداخت نشده',
			refunded: 'بازگشت داده شده',
		};

		return (
			<span
				className={`px-3 py-1 rounded-full text-sm border ${
					statusStyles[status as keyof typeof statusStyles]
				}`}>
				{statusText[status as keyof typeof statusText]}
			</span>
		);
	};

	return (
		<tr className="border-b border-border hover:bg-muted/50 transition-colors">
			<td className="px-6 py-4 text-text-primary">{order.orderNumber}</td>
			<td className="px-6 py-4 text-text-primary">{order.customerName}</td>
			<td className="px-6 py-4 text-text-secondary">{order.customerPhone}</td>
			<td className="px-6 py-4 text-text-primary">
				{order.totalAmount.toLocaleString()} تومان
			</td>
			<td className="px-6 py-4">{getStatusBadge(order.status)}</td>
			<td className="px-6 py-4">{getPaymentBadge(order.paymentStatus)}</td>
			<td className="px-6 py-4 text-text-secondary">
				{new Date(order.createdAt).toLocaleDateString('fa-IR')}
			</td>
			<td className="px-6 py-4">
				<div className="flex gap-2">
					{/* ✅ دکمه مشاهده جزئیات */}
					<button
						onClick={() => onView(order)}
						className="p-2 text-blue-400 hover:bg-blue-500/20 rounded-lg transition-colors"
						title="مشاهده جزئیات">
						<Eye className="w-4 h-4" />
					</button>
					<button
						onClick={() => onEdit(order)}
						className="p-2 text-yellow-400 hover:bg-yellow-500/20 rounded-lg transition-colors"
						title="ویرایش">
						<Edit className="w-4 h-4" />
					</button>
					<button
						onClick={() => onDelete(order)}
						className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
						title="حذف">
						<Trash2 className="w-4 h-4" />
					</button>
				</div>
			</td>
		</tr>
	);
}
