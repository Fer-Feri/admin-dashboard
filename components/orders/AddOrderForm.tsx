'use client';

import { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

interface AddOrderFormProps {
	onClose: () => void;
	onSave: (orderData: {
		customerName: string;
		customerPhone: string;
		products: { name: string; quantity: number; price: number }[];
		paymentStatus: 'paid' | 'unpaid';
	}) => void; // ✅ Prop جدید
}

interface OrderProduct {
	name: string;
	quantity: number;
	price: number;
}

export default function AddOrderForm({ onClose, onSave }: AddOrderFormProps) {
	const [customerName, setCustomerName] = useState('');
	const [customerPhone, setCustomerPhone] = useState('');
	const [products, setProducts] = useState<OrderProduct[]>([{ name: '', quantity: 1, price: 0 }]);
	const [paymentStatus, setPaymentStatus] = useState<'paid' | 'unpaid'>('unpaid');

	const handleAddProduct = () => {
		setProducts([...products, { name: '', quantity: 1, price: 0 }]);
	};

	const handleRemoveProduct = (index: number) => {
		if (products.length > 1) {
			setProducts(products.filter((_, i) => i !== index));
		}
	};

	const handleProductChange = (
		index: number,
		field: keyof OrderProduct,
		value: string | number
	) => {
		const newProducts = [...products];
		newProducts[index] = { ...newProducts[index], [field]: value };
		setProducts(newProducts);
	};

	const calculateTotal = () => {
		return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
	};

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('fa-IR').format(price);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// ✅ اعتبارسنجی: حداقل یک محصول با نام معتبر
		const validProducts = products.filter((p) => p.name.trim() !== '');
		if (validProducts.length === 0) {
			alert('لطفاً حداقل یک محصول وارد کنید');
			return;
		}

		// ✅ ارسال به parent
		onSave({
			customerName,
			customerPhone,
			products: validProducts,
			paymentStatus,
		});
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-border">
					<h2 className="text-xl font-bold text-text-primary">افزودن سفارش جدید</h2>
					<button
						onClick={onClose}
						className="p-2 hover:bg-muted rounded-lg transition-colors">
						<X size={20} />
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="p-6">
					<div className="space-y-6">
						{/* اطلاعات مشتری */}
						<div className="bg-muted p-4 rounded-lg">
							<h3 className="font-semibold text-text-primary mb-4">اطلاعات مشتری</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-text-secondary mb-2">
										نام مشتری *
									</label>
									<input
										type="text"
										value={customerName}
										onChange={(e) => setCustomerName(e.target.value)}
										className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-text-secondary mb-2">
										شماره تماس *
									</label>
									<input
										type="tel"
										value={customerPhone}
										onChange={(e) => setCustomerPhone(e.target.value)}
										className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
										required
									/>
								</div>
							</div>
						</div>

						{/* محصولات */}
						<div>
							<div className="flex items-center justify-between mb-4">
								<h3 className="font-semibold text-text-primary">محصولات سفارش</h3>
								<button
									type="button"
									onClick={handleAddProduct}
									className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
									<Plus size={18} />
									افزودن محصول
								</button>
							</div>

							<div className="space-y-3">
								{products.map((product, index) => (
									<div key={index} className="bg-muted p-4 rounded-lg">
										<div className="grid grid-cols-1 md:grid-cols-12 gap-3">
											<div className="md:col-span-5">
												<label className="block text-sm font-medium text-text-secondary mb-2">
													نام محصول
												</label>
												<input
													type="text"
													value={product.name}
													onChange={(e) =>
														handleProductChange(
															index,
															'name',
															e.target.value
														)
													}
													className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
													required
												/>
											</div>
											<div className="md:col-span-2">
												<label className="block text-sm font-medium text-text-secondary mb-2">
													تعداد
												</label>
												<input
													type="number"
													min="1"
													value={product.quantity}
													onChange={(e) =>
														handleProductChange(
															index,
															'quantity',
															parseInt(e.target.value) || 1
														)
													}
													className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
													required
												/>
											</div>
											<div className="md:col-span-4">
												<label className="block text-sm font-medium text-text-secondary mb-2">
													قیمت (تومان)
												</label>
												<input
													type="number"
													min="0"
													value={product.price}
													onChange={(e) =>
														handleProductChange(
															index,
															'price',
															parseInt(e.target.value) || 0
														)
													}
													className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
													required
												/>
											</div>
											<div className="md:col-span-1 flex items-end">
												<button
													type="button"
													onClick={() => handleRemoveProduct(index)}
													disabled={products.length === 1}
													className="w-full p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
													<Trash2 size={20} />
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* وضعیت پرداخت */}
						<div className="bg-muted p-4 rounded-lg">
							<label className="block text-sm font-medium text-text-secondary mb-3">
								وضعیت پرداخت *
							</label>
							<div className="flex gap-4">
								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										value="paid"
										checked={paymentStatus === 'paid'}
										onChange={(e) => setPaymentStatus(e.target.value as 'paid')}
										className="w-4 h-4 text-primary"
									/>
									<span className="text-sm text-text-primary">پرداخت شده</span>
								</label>
								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										value="unpaid"
										checked={paymentStatus === 'unpaid'}
										onChange={(e) =>
											setPaymentStatus(e.target.value as 'unpaid')
										}
										className="w-4 h-4 text-primary"
									/>
									<span className="text-sm text-text-primary">پرداخت نشده</span>
								</label>
							</div>
						</div>

						{/* جمع کل */}
						<div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
							<div className="flex items-center justify-between">
								<span className="text-lg font-semibold text-text-primary">
									مبلغ کل سفارش:
								</span>
								<span className="text-2xl font-bold text-primary">
									{formatPrice(calculateTotal())} تومان
								</span>
							</div>
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
							ذخیره سفارش
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
