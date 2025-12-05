export interface Product {
	id: string;
	name: string;
	price: number;
	stock: number;
	category: string;
	status: 'active' | 'inactive';
	image?: string;
	createdAt: string;
}

export const mockProducts: Product[] = [
	{
		id: '1',
		name: 'لپ‌تاپ ایسوس',
		price: 25000000,
		stock: 12,
		category: 'لپ‌تاپ',
		status: 'active',
		createdAt: '2024-11-01T00:00:00Z',
	},
	{
		id: '2',
		name: 'موس لاجیتک',
		price: 450000,
		stock: 45,
		category: 'لوازم جانبی',
		status: 'active',
		createdAt: '2024-10-15T00:00:00Z',
	},
	{
		id: '3',
		name: 'کیبورد مکانیکی',
		price: 1200000,
		stock: 8,
		category: 'لوازم جانبی',
		status: 'active',
		createdAt: '2024-09-22T00:00:00Z',
	},
	{
		id: '4',
		name: 'مانیتور ال‌جی',
		price: 8500000,
		stock: 0,
		category: 'مانیتور',
		status: 'inactive',
		createdAt: '2024-08-10T00:00:00Z',
	},
	{
		id: '5',
		name: 'هدفون سونی',
		price: 3200000,
		stock: 23,
		category: 'صوتی',
		status: 'active',
		createdAt: '2024-11-05T00:00:00Z',
	},
	{
		id: '6',
		name: 'وب‌کم لاجیتک',
		price: 2100000,
		stock: 7,
		category: 'لوازم جانبی',
		status: 'active',
		createdAt: '2024-10-28T00:00:00Z',
	},
	{
		id: '7',
		name: 'هارد اکسترنال',
		price: 1800000,
		stock: 15,
		category: 'ذخیره‌سازی',
		status: 'active',
		createdAt: '2024-09-12T00:00:00Z',
	},
	{
		id: '8',
		name: 'پاوربانک شیائومی',
		price: 650000,
		stock: 34,
		category: 'لوازم جانبی',
		status: 'active',
		createdAt: '2024-11-08T00:00:00Z',
	},
	{
		id: '9',
		name: 'چاپگر اچ‌پی',
		price: 4500000,
		stock: 5,
		category: 'چاپگر',
		status: 'active',
		createdAt: '2024-10-01T00:00:00Z',
	},
	{
		id: '10',
		name: 'اسپیکر بلوتوثی',
		price: 980000,
		stock: 0,
		category: 'صوتی',
		status: 'inactive',
		createdAt: '2024-08-25T00:00:00Z',
	},
	{
		id: '11',
		name: 'تبلت سامسونگ',
		price: 12000000,
		stock: 9,
		category: 'تبلت',
		status: 'active',
		createdAt: '2024-09-18T00:00:00Z',
	},
	{
		id: '12',
		name: 'شارژر فست',
		price: 320000,
		stock: 56,
		category: 'لوازم جانبی',
		status: 'active',
		createdAt: '2024-11-12T00:00:00Z',
	},
];

export const categoryLabels: Record<string, string> = {
	لپ‌تاپ: 'لپ‌تاپ',
	'لوازم جانبی': 'لوازم جانبی',
	مانیتور: 'مانیتور',
	صوتی: 'صوتی',
	ذخیره‌سازی: 'ذخیره‌سازی',
	چاپگر: 'چاپگر',
	تبلت: 'تبلت',
};

export const statusLabels: Record<Product['status'], string> = {
	active: 'فعال',
	inactive: 'غیرفعال',
};
