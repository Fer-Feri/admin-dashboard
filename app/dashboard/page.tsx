import StatsCard from '@/components/dashboad/dashboardCard/StatsCard';
import SalesChart from '@/components/dashboad/dashboardCard/SalesChart';
import CategoryChart from '@/components/dashboad/dashboardCard/CategoryChart';
import RevenueChart from '@/components/dashboad/dashboardCard/RevenueChart';
import RecentOrders from '@/components/dashboad/dashboardCard/RecentOrders';

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			{/* کارت‌های آماری */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<StatsCard
					title="کل فروش"
					value="۱۲,۳۴۵,۰۰۰"
					change="+۱۲٪"
					iconName="dollar"
					trend="up"
				/>
				<StatsCard title="سفارشات" value="۱۵۶" change="+۸٪" iconName="cart" trend="up" />
				<StatsCard
					title="مشتریان"
					value="۲,۳۴۵"
					change="-۳٪"
					iconName="users"
					trend="down"
				/>
				<StatsCard
					title="نرخ رشد"
					value="۱۸٪"
					change="+۵٪"
					iconName="trending"
					trend="up"
				/>
			</div>

			{/* نمودارهای اصلی */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<SalesChart />
				<CategoryChart />
			</div>

			{/* نمودار درآمد */}
			<RevenueChart />

			{/* جدول سفارشات */}
			<RecentOrders />
		</div>
	);
}
