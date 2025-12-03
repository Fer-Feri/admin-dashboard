export interface MenuItem {
	id: string;
	label: string;
	icon: string;
	href?: string;
	children?: MenuItem[];
}

export const menuData: MenuItem[] = [
	{
		id: 'dashboard',
		label: 'داشبورد',
		icon: 'LayoutDashboard',
		href: '/dashboard',
	},
	{
		id: 'users',
		label: 'کاربران',
		icon: 'Users',
		children: [
			{
				id: 'users-list',
				label: 'لیست کاربران',
				icon: 'List',
				href: '/dashboard/users',
			},
			{
				id: 'users-add',
				label: 'افزودن کاربر',
				icon: 'UserPlus',
				href: '/dashboard/users/add',
			},
		],
	},
	{
		id: 'products',
		label: 'محصولات',
		icon: 'Package',
		children: [
			{
				id: 'products-list',
				label: 'لیست محصولات',
				icon: 'List',
				href: '/dashboard/products',
			},
			{
				id: 'products-add',
				label: 'افزودن محصول',
				icon: 'PackagePlus',
				href: '/dashboard/products/add',
			},
		],
	},
	{
		id: 'orders',
		label: 'سفارشات',
		icon: 'ShoppingCart',
		href: '/dashboard/orders',
	},
	{
		id: 'settings',
		label: 'تنظیمات',
		icon: 'Settings',
		href: '/dashboard/settings',
	},
];
