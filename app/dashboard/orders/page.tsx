'use client';

import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import ConfirmModal from '@/components/common/ConfirmModal';
import OrderTable from '@/components/orders/OrderTable';
import OrderStatsCards from '@/components/orders/OrderStatsCards';
import AddOrderForm from '@/components/orders/AddOrderForm';
import EditOrderStatusForm from '@/components/orders/EditOrderStatusForm';
import OrderDetailsModal from '@/components/orders/OrderDetailsModal';
import { mockOrders, Order } from '@/lib/mock-data/orders';

type OrderStatus = Order['status'];
type PaymentStatus = Order['paymentStatus'];

export default function OrdersPage() {
	const [orders, setOrders] = useState<Order[]>(mockOrders);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(10);
	const [searchTerm, setSearchTerm] = useState('');
	const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
	const [paymentFilter, setPaymentFilter] = useState<PaymentStatus | 'all'>('all'); // ✅ اضافه شد
	const [dateFrom, setDateFrom] = useState(''); // ✅ اضافه شد
	const [dateTo, setDateTo] = useState(''); // ✅ اضافه شد
	const [showAddForm, setShowAddForm] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [viewOrder, setViewOrder] = useState<Order | null>(null);

	// ✅ فیلتر کامل با همه شرایط
	const filteredOrders = useMemo(() => {
		let result = orders;

		// فیلتر بر اساس وضعیت سفارش
		if (statusFilter !== 'all') {
			result = result.filter((order) => order.status === statusFilter);
		}

		// فیلتر بر اساس وضعیت پرداخت
		if (paymentFilter !== 'all') {
			result = result.filter((order) => order.paymentStatus === paymentFilter);
		}

		// فیلتر بر اساس جستجو
		if (searchTerm) {
			result = result.filter(
				(order) =>
					order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
					order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					order.customerPhone.includes(searchTerm)
			);
		}

		// فیلتر بر اساس بازه تاریخ
		if (dateFrom) {
			const fromDate = new Date(dateFrom);
			result = result.filter((order) => new Date(order.createdAt) >= fromDate);
		}

		if (dateTo) {
			const toDate = new Date(dateTo);
			toDate.setHours(23, 59, 59, 999); // تا آخر روز
			result = result.filter((order) => new Date(order.createdAt) <= toDate);
		}

		return result;
	}, [orders, searchTerm, statusFilter, paymentFilter, dateFrom, dateTo]);

	const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

	// ✅ handlerها با ریست صفحه
	const handleSearchChange = (value: string) => {
		setSearchTerm(value);
		setCurrentPage(1);
	};

	const handleStatusFilterChange = (value: OrderStatus | 'all') => {
		setStatusFilter(value);
		setCurrentPage(1);
	};

	const handlePaymentFilterChange = (value: PaymentStatus | 'all') => {
		setPaymentFilter(value);
		setCurrentPage(1);
	};

	const handleDateFromChange = (value: string) => {
		setDateFrom(value);
		setCurrentPage(1);
	};

	const handleDateToChange = (value: string) => {
		setDateTo(value);
		setCurrentPage(1);
	};

	const generateOrderNumber = (): string => {
		const maxNumber = Math.max(
			...orders.map((o) => parseInt(o.orderNumber.replace('ORD-', '')))
		);
		return `ORD-${(maxNumber + 1).toString().padStart(4, '0')}`;
	};

	const handleAddOrder = (newOrderData: {
		customerName: string;
		customerPhone: string;
		products: { name: string; quantity: number; price: number }[];
		paymentStatus: PaymentStatus;
	}) => {
		const newOrder: Order = {
			id: Date.now().toString(),
			orderNumber: generateOrderNumber(),
			customerName: newOrderData.customerName,
			customerPhone: newOrderData.customerPhone,
			totalAmount: newOrderData.products.reduce((sum, p) => sum + p.price * p.quantity, 0),
			status: 'pending',
			paymentStatus: newOrderData.paymentStatus,
			shippingAddress: '',
			createdAt: new Date().toISOString(),
			products: newOrderData.products.map((p, index) => ({
				productId: `TEMP-${Date.now()}-${index}`,
				productName: p.name,
				quantity: p.quantity,
				price: p.price,
			})),
		};

		setOrders([newOrder, ...orders]);
		setShowAddForm(false);
	};

	const handleEditSave = (updatedStatus: OrderStatus, updatedPaymentStatus: PaymentStatus) => {
		if (!selectedOrder) return;

		setOrders(
			orders.map((order) =>
				order.id === selectedOrder.id
					? { ...order, status: updatedStatus, paymentStatus: updatedPaymentStatus }
					: order
			)
		);
		setSelectedOrder(null);
	};

	const handleDeleteClick = (order: Order) => {
		setSelectedOrder(order);
		setShowDeleteModal(true);
	};

	const handleDeleteConfirm = () => {
		if (!selectedOrder) return;
		setOrders(orders.filter((order) => order.id !== selectedOrder.id));
		setShowDeleteModal(false);
		setSelectedOrder(null);
	};

	const handleDeleteCancel = () => {
		setShowDeleteModal(false);
		setSelectedOrder(null);
	};

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleView = (order: Order) => {
		setViewOrder(order);
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-text-primary">مدیریت سفارشات</h1>
					<p className="text-sm text-text-secondary mt-1">
						{filteredOrders.length} سفارش یافت شد
					</p>
				</div>
				<button
					onClick={() => setShowAddForm(true)}
					className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
					<Plus className="w-5 h-5" />
					<span>افزودن سفارش</span>
				</button>
			</div>

			<OrderStatsCards orders={orders} />

			<div className="bg-white rounded-lg border border-border">
				<OrderTable
					orders={currentOrders}
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
					statusFilter={statusFilter}
					onStatusFilterChange={handleStatusFilterChange}
					paymentFilter={paymentFilter}
					onPaymentFilterChange={handlePaymentFilterChange}
					dateFrom={dateFrom}
					onDateFromChange={handleDateFromChange}
					dateTo={dateTo}
					onDateToChange={handleDateToChange}
					onEdit={(order) => setSelectedOrder(order)}
					onDelete={handleDeleteClick}
					onView={handleView}
				/>

				{totalPages > 1 && (
					<div className="flex items-center justify-between px-6 py-4 border-t border-border bg-card">
						<div className="text-sm text-text-secondary">
							نمایش {indexOfFirstItem + 1} تا{' '}
							{Math.min(indexOfLastItem, filteredOrders.length)} از{' '}
							{filteredOrders.length} سفارش
						</div>

						<div className="flex gap-2">
							<button
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
								className="px-3 py-1 rounded border border-border text-text-secondary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
								قبلی
							</button>

							{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
								<button
									key={page}
									onClick={() => handlePageChange(page)}
									className={`px-3 py-1 rounded border transition-colors ${
										currentPage === page
											? 'bg-primary text-white border-primary'
											: 'border-border text-text-secondary hover:bg-muted'
									}`}>
									{page}
								</button>
							))}

							<button
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages}
								className="px-3 py-1 rounded border border-border text-text-secondary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
								بعدی
							</button>
						</div>
					</div>
				)}
			</div>

			{showAddForm && (
				<AddOrderForm onClose={() => setShowAddForm(false)} onSave={handleAddOrder} />
			)}

			{selectedOrder && !showDeleteModal && (
				<EditOrderStatusForm
					order={selectedOrder}
					onClose={() => setSelectedOrder(null)}
					onSave={handleEditSave}
				/>
			)}

			{showDeleteModal && selectedOrder && (
				<ConfirmModal
					isOpen={showDeleteModal}
					title="حذف سفارش"
					description={`آیا از حذف سفارش "${selectedOrder.orderNumber}" اطمینان دارید؟`}
					confirmText="حذف"
					cancelText="انصراف"
					onConfirm={handleDeleteConfirm}
					onCancel={handleDeleteCancel}
				/>
			)}

			{viewOrder && (
				<OrderDetailsModal order={viewOrder} onClose={() => setViewOrder(null)} />
			)}
		</div>
	);
}
