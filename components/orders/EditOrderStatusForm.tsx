'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Order } from '@/lib/mock-data/orders';

interface EditOrderStatusFormProps {
	order: Order;
	onClose: () => void;
	onSave: (orderStatus: Order['status'], paymentStatus: Order['paymentStatus']) => void; // ✅ Prop جدید
}

export default function EditOrderStatusForm({ order, onClose, onSave }: EditOrderStatusFormProps) {
	const [orderStatus, setOrderStatus] = useState<Order['status']>(order.status);
	const [paymentStatus, setPaymentStatus] = useState<Order['paymentStatus']>(order.paymentStatus);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSave(orderStatus, paymentStatus); // ✅ ارسال به parent
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-card rounded-lg shadow-xl max-w-md w-full">
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-border">
					<h2 className="text-xl font-bold text-text-primary">ویرایش وضعیت سفارش</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-muted rounded-lg transition-colors">
						<X size={20} />
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="p-6">
					<div className="space-y-6">
						{/* اطلاعات سفارش */}
						<div className="bg-muted p-4 rounded-lg">
							<div className="text-sm text-text-secondary mb-1">شماره سفارش</div>
							<div className="font-semibold text-text-primary">
								#{order.orderNumber}
							</div>
							<div className="text-sm text-text-secondary mt-2 mb-1">مشتری</div>
							<div className="font-medium text-text-primary">
								{order.customerName}
							</div>
						</div>

						{/* وضعیت سفارش */}
						<div>
							<label className="block text-sm font-medium text-text-secondary mb-3">
								وضعیت سفارش *
							</label>
							<select
								value={orderStatus}
								onChange={(e) => setOrderStatus(e.target.value as Order['status'])}
								className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
								required>
								<option value="pending">در انتظار</option>
								<option value="processing">در حال پردازش</option>
								<option value="completed">تکمیل شده</option>
								<option value="cancelled">لغو شده</option>
							</select>
						</div>

						{/* وضعیت پرداخت */}
						<div>
							<label className="block text-sm font-medium text-text-secondary mb-3">
								وضعیت پرداخت *
							</label>
							<select
								value={paymentStatus}
								onChange={(e) =>
									setPaymentStatus(e.target.value as Order['paymentStatus'])
								}
								className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
								required>
								<option value="unpaid">پرداخت نشده</option>
								<option value="paid">پرداخت شده</option>
								<option value="refunded">بازگشت داده شده</option>
							</select>
						</div>

						{/* توضیحات راهنما */}
						<div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
							<p className="text-sm text-yellow-600 dark:text-yellow-400">
								<strong>توجه:</strong> تغییر وضعیت سفارش ممکن است بر گزارشات و
								موجودی انبار تأثیر بگذارد.
							</p>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-border">
						<button
							type="button"
							onClick={onClose}
							className="px-6 py-2 border border-border text-text-primary rounded-lg hover:bg-muted transition-colors">
							انصراف
						</button>
						<button
							type="submit"
							className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-700 transition-colors">
							به‌روزرسانی
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
