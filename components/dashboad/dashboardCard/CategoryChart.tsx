'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{ دسته: 'لباس', فروش: 45 },
	{ دسته: 'کیف', فروش: 30 },
	{ دسته: 'کفش', فروش: 55 },
	{ دسته: 'ساعت', فروش: 20 },
];

export default function CategoryChart() {
	return (
		<div className="bg-bg-primary border border-border rounded-xl p-6 shadow-sm">
			<h2 className="text-text-primary text-lg font-bold mb-4">فروش بر اساس دسته‌بندی</h2>

			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
					<XAxis dataKey="دسته" stroke="var(--text-secondary)" />
					<YAxis stroke="var(--text-secondary)" />
					<Tooltip
						contentStyle={{
							backgroundColor: 'var(--bg-secondary)',
							border: '1px solid var(--border)',
							borderRadius: '8px',
							color: 'var(--text-primary)',
						}}
					/>
					<Bar dataKey="فروش" fill="#10b981" radius={[8, 8, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
