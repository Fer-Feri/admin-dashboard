'use client';

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ ماه: 'فروردین', فروش: 40, سود: 24 },
	{ ماه: 'اردیبهشت', فروش: 30, سود: 18 },
	{ ماه: 'خرداد', فروش: 50, سود: 30 },
	{ ماه: 'تیر', فروش: 45, سود: 28 },
];

export default function RevenueChart() {
	return (
		<div className="bg-bg-primary border border-border rounded-xl p-6 shadow-sm">
			<h2 className="text-text-primary text-lg font-bold mb-4">فروش و سود</h2>

			<ResponsiveContainer width="100%" height={300}>
				<AreaChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
					<XAxis dataKey="ماه" stroke="var(--text-secondary)" />
					<YAxis stroke="var(--text-secondary)" />
					<Tooltip
						contentStyle={{
							backgroundColor: 'var(--bg-secondary)',
							border: '1px solid var(--border)',
							borderRadius: '8px',
							color: 'var(--text-primary)',
						}}
					/>
					<Area
						type="monotone"
						dataKey="فروش"
						stackId="1"
						stroke="#3b82f6"
						fill="#3b82f6"
						fillOpacity={0.6}
					/>
					<Area
						type="monotone"
						dataKey="سود"
						stackId="1"
						stroke="#10b981"
						fill="#10b981"
						fillOpacity={0.6}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
