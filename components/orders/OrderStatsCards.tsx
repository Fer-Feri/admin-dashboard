'use client';

import { useMemo } from 'react';
import { ShoppingCart, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Order } from '@/lib/mock-data/orders';

interface OrderStatsCardsProps {
	orders: Order[];
}

export default function OrderStatsCards({ orders }: OrderStatsCardsProps) {
	// محاسبه آمار
	const stats = useMemo(() => {
		const today = new Date().toISOString().split('T')[0];

		const pending = orders.filter((o) => o.status === 'pending').length;
		const completedToday = orders.filter(
			(o) => o.status === 'completed' && o.createdAt.startsWith(today)
		).length;
		const todaySales = orders
			.filter((o) => o.createdAt.startsWith(today))
			.reduce((sum, o) => sum + o.totalAmount, 0);

		return {
			total: orders.length,
			pending,
			completedToday,
			todaySales,
		};
	}, [orders]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{/* کل سفارشات */}
			<div className="bg-card p-6 rounded-lg shadow-sm border border-border">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-text-secondary text-sm mb-1">کل سفارشات</p>
						<h3 className="text-2xl font-bold text-text-primary">{stats.total}</h3>
					</div>
					<div className="bg-primary/10 p-3 rounded-lg">
						<ShoppingCart className="text-primary" size={24} />
					</div>
				</div>
			</div>

			{/* در انتظار */}
			<div className="bg-card p-6 rounded-lg shadow-sm border border-border">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-text-secondary text-sm mb-1">در انتظار</p>
						<h3 className="text-2xl font-bold text-yellow-500">{stats.pending}</h3>
					</div>
					<div className="bg-yellow-500/10 p-3 rounded-lg">
						<Clock className="text-yellow-500" size={24} />
					</div>
				</div>
			</div>

			{/* تکمیل شده امروز */}
			<div className="bg-card p-6 rounded-lg shadow-sm border border-border">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-text-secondary text-sm mb-1">تکمیل شده امروز</p>
						<h3 className="text-2xl font-bold text-green-500">
							{stats.completedToday}
						</h3>
					</div>
					<div className="bg-green-500/10 p-3 rounded-lg">
						<CheckCircle className="text-green-500" size={24} />
					</div>
				</div>
			</div>

			{/* فروش امروز */}
			<div className="bg-card p-6 rounded-lg shadow-sm border border-border">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-text-secondary text-sm mb-1">فروش امروز</p>
						<h3 className="text-2xl font-bold text-purple-500">
							{(stats.todaySales / 1_000_000).toFixed(1)} میلیون
						</h3>
					</div>
					<div className="bg-purple-500/10 p-3 rounded-lg">
						<TrendingUp className="text-purple-500" size={24} />
					</div>
				</div>
			</div>
		</div>
	);
}
