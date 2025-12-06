'use client';

import { X } from 'lucide-react';
import { Order } from '@/lib/mock-data/orders';

interface OrderDetailsModalProps {
	order: Order;
	onClose: () => void;
}

export default function OrderDetailsModal({ order, onClose }: OrderDetailsModalProps) {
	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('fa-IR').format(price);
	};

	const formatDate = (isoDate: string) => {
		const date = new Date(isoDate);
		return new Intl.DateTimeFormat('fa-IR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		}).format(date);
	};

	const getOrderStatusLabel = (status: Order['status']) => {
		const labels = {
			pending: 'در انتظار',
			processing: 'در حال پردازش',
			completed: 'تکمیل شده',
			cancelled: 'لغو شده',
		};
		return labels[status];
	};

	const getPaymentStatusLabel = (status: Order['paymentStatus']) => {
		const labels = {
			paid: 'پرداخت شده',
			unpaid: 'پرداخت نشده',
			refunded: 'بازگشت داده شده',
		};
		return labels[status];
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-card rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-border">
					<h2 className="text-xl font-bold text-text-primary">
						جزئیات سفارش #{order.orderNumber}
					</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-muted rounded-lg transition-colors">
						<X size={20} />
					</button>
				</div>

				{/* Body */}
				<div className="p-6 space-y-6">
					{/* اطلاعات مشتری */}
					<div className="bg-muted p-4 rounded-lg">
						<h3 className="font-semibold text-text-primary mb-3">اطلاعات مشتری</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
							<div>
								<span className="text-text-secondary">نام:</span>
								<span className="font-medium text-text-primary mr-2">
									{order.customerName}
								</span>
							</div>
							<div>
								<span className="text-text-secondary">شماره تماس:</span>
								<span className="font-medium text-text-primary mr-2">
									{order.customerPhone}
								</span>
							</div>
						</div>
					</div>

					{/* اطلاعات سفارش */}
					<div className="bg-muted p-4 rounded-lg">
						<h3 className="font-semibold text-text-primary mb-3">اطلاعات سفارش</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
							<div>
								<span className="text-text-secondary">تاریخ ثبت:</span>
								<span className="font-medium text-text-primary mr-2">
									{formatDate(order.createdAt)}
								</span>
							</div>
							<div>
								<span className="text-text-secondary">وضعیت سفارش:</span>
								<span className="font-medium text-text-primary mr-2">
									{getOrderStatusLabel(order.status)}
								</span>
							</div>
							<div>
								<span className="text-text-secondary">وضعیت پرداخت:</span>
								<span className="font-medium text-text-primary mr-2">
									{getPaymentStatusLabel(order.paymentStatus)}
								</span>
							</div>
						</div>
					</div>

					{/* محصولات سفارش */}
					<div>
						<h3 className="font-semibold text-text-primary mb-3">محصولات سفارش</h3>
						<div className="border border-border rounded-lg overflow-x-auto">
							<table className="w-full min-w-[600px]">
								<thead className="bg-muted">
									<tr>
										<th className="px-4 py-3 text-right text-xs font-medium text-text-secondary">
											محصول
										</th>
										<th className="px-4 py-3 text-center text-xs font-medium text-text-secondary">
											تعداد
										</th>
										<th className="px-4 py-3 text-right text-xs font-medium text-text-secondary">
											قیمت واحد
										</th>
										<th className="px-4 py-3 text-right text-xs font-medium text-text-secondary">
											مبلغ کل
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-border">
									{order.products.map((product, index) => (
										<tr key={index}>
											<td className="px-4 py-3 text-sm text-text-primary">
												{product.productName}
											</td>
											<td className="px-4 py-3 text-sm text-text-primary text-center">
												{product.quantity}
											</td>
											<td className="px-4 py-3 text-sm text-text-primary">
												{formatPrice(product.price)} تومان
											</td>
											<td className="px-4 py-3 text-sm font-medium text-text-primary">
												{formatPrice(product.price * product.quantity)}{' '}
												تومان
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					{/* جمع کل */}
					<div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
						<div className="flex items-center justify-between">
							<span className="text-lg font-semibold text-text-primary">
								مبلغ کل سفارش:
							</span>
							<span className="text-2xl font-bold text-primary">
								{formatPrice(order.totalAmount)} تومان
							</span>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="px-6 py-4 border-t border-border flex justify-end">
					<button
						onClick={onClose}
						className="px-6 py-2 bg-muted text-text-primary rounded-lg hover:bg-muted/80 transition-colors">
						بستن
					</button>
				</div>
			</div>
		</div>
	);
}
