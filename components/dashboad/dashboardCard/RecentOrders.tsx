'use client';

const orders = [
	{
		id: '#1234',
		customer: 'علی احمدی',
		product: 'لپ‌تاپ ایسوس',
		amount: '۱۵,۰۰۰,۰۰۰',
		status: 'تحویل شده',
	},
	{
		id: '#1235',
		customer: 'سارا محمدی',
		product: 'گوشی سامسونگ',
		amount: '۸,۵۰۰,۰۰۰',
		status: 'در حال پردازش',
	},
	{
		id: '#1236',
		customer: 'رضا کریمی',
		product: 'هدفون بیتس',
		amount: '۲,۳۰۰,۰۰۰',
		status: 'ارسال شده',
	},
	{
		id: '#1237',
		customer: 'مینا رضایی',
		product: 'تبلت آیپد',
		amount: '۱۲,۰۰۰,۰۰۰',
		status: 'تحویل شده',
	},
];

export default function RecentOrders() {
	return (
		<div className="bg-bg-primary border border-border rounded-xl p-6 shadow-sm">
			<h2 className="text-text-primary text-lg font-bold mb-4">سفارشات اخیر</h2>

			<div className="overflow-x-auto">
				<table className="min-w-[700px] w-full">
					<thead>
						<tr className="border-b border-border">
							<th className="text-right text-text-secondary text-sm font-medium pb-3">
								شناسه
							</th>
							<th className="text-right text-text-secondary text-sm font-medium pb-3">
								مشتری
							</th>
							<th className="text-right text-text-secondary text-sm font-medium pb-3">
								محصول
							</th>
							<th className="text-right text-text-secondary text-sm font-medium pb-3">
								مبلغ
							</th>
							<th className="text-right text-text-secondary text-sm font-medium pb-3">
								وضعیت
							</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order.id} className="border-b border-border last:border-0 ">
								<td className="py-3 text-text-primary text-sm">{order.id}</td>
								<td className="py-3 text-text-primary text-sm">{order.customer}</td>
								<td className="py-3 text-text-secondary text-sm">
									{order.product}
								</td>
								<td className="py-3 text-text-primary text-sm font-medium">
									{order.amount} تومان
								</td>
								<td className="py-3">
									<span
										className={`px-3 py-1 rounded-full text-xs font-medium ${
											order.status === 'تحویل شده'
												? 'bg-green-500/10 text-green-500'
												: order.status === 'ارسال شده'
												? 'bg-blue-500/10 text-blue-500'
												: 'bg-yellow-500/10 text-yellow-500'
										}`}>
										{order.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
