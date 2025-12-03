'use client';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ name: 'شنبه', فروش: 12 },
	{ name: 'یکشنبه', فروش: 19 },
	{ name: 'دوشنبه', فروش: 15 },
	{ name: 'سه‌شنبه', فروش: 25 },
	{ name: 'چهارشنبه', فروش: 22 },
	{ name: 'پنج‌شنبه', فروش: 30 },
	{ name: 'جمعه', فروش: 28 },
];

export default function SalesChart() {
	return (
		<div className="bg-bg-primary border border-border rounded-xl p-6 shadow-sm">
			<h2 className="text-text-primary text-lg font-bold mb-4">روند فروش هفتگی</h2>

			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
					<XAxis dataKey="name" stroke="var(--text-secondary)" />
					<YAxis stroke="var(--text-secondary)" />
					<Tooltip
						contentStyle={{
							backgroundColor: 'var(--bg-secondary)',
							border: '1px solid var(--border)',
							borderRadius: '8px',
							color: 'var(--text-primary)',
						}}
					/>
					<Line
						type="monotone"
						dataKey="فروش"
						stroke="#3b82f6"
						strokeWidth={3}
						dot={{ fill: '#3b82f6', r: 4 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
