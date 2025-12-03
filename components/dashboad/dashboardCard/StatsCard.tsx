'use client';

import { motion } from 'framer-motion';
import { DollarSign, ShoppingCart, Users, TrendingUp, LucideIcon } from 'lucide-react';

interface StatsCardProps {
	title: string;
	value: string;
	change: string;
	iconName: 'dollar' | 'cart' | 'users' | 'trending';
	trend: 'up' | 'down';
}

const iconMap: Record<string, LucideIcon> = {
	dollar: DollarSign,
	cart: ShoppingCart,
	users: Users,
	trending: TrendingUp,
};

export default function StatsCard({ title, value, change, iconName, trend }: StatsCardProps) {
	const Icon = iconMap[iconName];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ y: -4 }}
			className="bg-bg-primary border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
			<div className="flex items-center justify-between mb-4">
				<div
					className={`p-3 rounded-lg ${
						trend === 'up' ? 'bg-green-500/10' : 'bg-red-500/10'
					}`}>
					<Icon
						className={`w-6 h-6 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
					/>
				</div>
				<span
					className={`text-sm font-medium ${
						trend === 'up' ? 'text-green-500' : 'text-red-500'
					}`}>
					{change}
				</span>
			</div>

			<h3 className="text-text-secondary text-sm mb-1">{title}</h3>
			<p className="text-text-primary text-2xl font-bold">{value}</p>
		</motion.div>
	);
}
