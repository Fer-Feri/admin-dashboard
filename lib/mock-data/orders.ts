// Order Types
export interface OrderProduct {
	productId: string;
	productName: string;
	quantity: number;
	price: number;
}

export interface Order {
	id: string;
	orderNumber: string;
	customerName: string;
	customerPhone: string;
	products: OrderProduct[];
	totalAmount: number;
	status: 'pending' | 'processing' | 'completed' | 'cancelled';
	paymentStatus: 'paid' | 'unpaid' | 'refunded';
	shippingAddress: string;
	createdAt: string; // ISO format
}

// Mock Data
export const mockOrders: Order[] = [
	{
		id: '1',
		orderNumber: 'ORD-1001',
		customerName: 'علی احمدی',
		customerPhone: '09121234567',
		products: [
			{ productId: '1', productName: 'لپ‌تاپ ایسوس', quantity: 1, price: 25000000 },
			{ productId: '2', productName: 'ماوس لاجیتک', quantity: 2, price: 450000 },
		],
		totalAmount: 25900000,
		status: 'completed',
		paymentStatus: 'paid',
		shippingAddress: 'تهران، خیابان آزادی، پلاک 123',
		createdAt: '2025-12-05T10:30:00.000Z',
	},
	{
		id: '2',
		orderNumber: 'ORD-1002',
		customerName: 'فاطمه محمدی',
		customerPhone: '09139876543',
		products: [{ productId: '3', productName: 'کیبورد مکانیکی', quantity: 1, price: 1200000 }],
		totalAmount: 1200000,
		status: 'processing',
		paymentStatus: 'paid',
		shippingAddress: 'مشهد، بلوار فردوسی، کوچه 5، پلاک 8',
		createdAt: '2025-12-05T14:15:00.000Z',
	},
	{
		id: '3',
		orderNumber: 'ORD-1003',
		customerName: 'حسین رضایی',
		customerPhone: '09151234567',
		products: [
			{ productId: '4', productName: 'مانیتور سامسونگ', quantity: 2, price: 8500000 },
			{ productId: '5', productName: 'هدست گیمینگ', quantity: 1, price: 2300000 },
		],
		totalAmount: 19300000,
		status: 'pending',
		paymentStatus: 'unpaid',
		shippingAddress: 'شیراز، خیابان زند، مجتمع پارسیان، واحد 205',
		createdAt: '2025-12-04T09:45:00.000Z',
	},
	{
		id: '4',
		orderNumber: 'ORD-1004',
		customerName: 'زهرا کریمی',
		customerPhone: '09361234567',
		products: [{ productId: '6', productName: 'هارد اکسترنال', quantity: 1, price: 3200000 }],
		totalAmount: 3200000,
		status: 'completed',
		paymentStatus: 'paid',
		shippingAddress: 'اصفهان، خیابان چهارباغ، کوچه نسترن، پلاک 15',
		createdAt: '2025-12-03T16:20:00.000Z',
	},
	{
		id: '5',
		orderNumber: 'ORD-1005',
		customerName: 'محمد جعفری',
		customerPhone: '09171234567',
		products: [
			{ productId: '7', productName: 'وب‌کم لاجیتک', quantity: 3, price: 1800000 },
			{ productId: '8', productName: 'میکروفون USB', quantity: 1, price: 950000 },
		],
		totalAmount: 6350000,
		status: 'cancelled',
		paymentStatus: 'refunded',
		shippingAddress: 'تبریز، خیابان ولیعصر، پلاک 78',
		createdAt: '2025-12-02T11:00:00.000Z',
	},
	{
		id: '6',
		orderNumber: 'ORD-1006',
		customerName: 'مریم نوری',
		customerPhone: '09191234567',
		products: [{ productId: '9', productName: 'تبلت سامسونگ', quantity: 1, price: 12000000 }],
		totalAmount: 12000000,
		status: 'processing',
		paymentStatus: 'paid',
		shippingAddress: 'کرج، میدان فردوسی، کوچه 12، پلاک 33',
		createdAt: '2025-12-05T08:30:00.000Z',
	},
	{
		id: '7',
		orderNumber: 'ORD-1007',
		customerName: 'رضا صادقی',
		customerPhone: '09381234567',
		products: [
			{ productId: '10', productName: 'پرینتر اچ‌پی', quantity: 1, price: 5400000 },
			{ productId: '11', productName: 'کاغذ A4 (بسته)', quantity: 5, price: 120000 },
		],
		totalAmount: 6000000,
		status: 'pending',
		paymentStatus: 'unpaid',
		shippingAddress: 'اهواز، خیابان کیانپارس، پلاک 456',
		createdAt: '2025-12-04T13:10:00.000Z',
	},
	{
		id: '8',
		orderNumber: 'ORD-1008',
		customerName: 'سارا موسوی',
		customerPhone: '09211234567',
		products: [{ productId: '12', productName: 'ساعت هوشمند', quantity: 1, price: 4500000 }],
		totalAmount: 4500000,
		status: 'completed',
		paymentStatus: 'paid',
		shippingAddress: 'قم، بلوار امین، کوچه 3، پلاک 9',
		createdAt: '2025-12-01T15:45:00.000Z',
	},
	{
		id: '9',
		orderNumber: 'ORD-1009',
		customerName: 'امیر حسینی',
		customerPhone: '09351234567',
		products: [
			{ productId: '13', productName: 'روتر Wi-Fi', quantity: 1, price: 1900000 },
			{ productId: '14', productName: 'کابل شبکه 10 متری', quantity: 2, price: 180000 },
		],
		totalAmount: 2260000,
		status: 'processing',
		paymentStatus: 'paid',
		shippingAddress: 'رشت، خیابان گلسار، پلاک 234',
		createdAt: '2025-12-05T12:00:00.000Z',
	},
	{
		id: '10',
		orderNumber: 'ORD-1010',
		customerName: 'نرگس اکبری',
		customerPhone: '09141234567',
		products: [{ productId: '15', productName: 'هدفون بلوتوث', quantity: 2, price: 850000 }],
		totalAmount: 1700000,
		status: 'pending',
		paymentStatus: 'unpaid',
		shippingAddress: 'کرمان، میدان آزادی، کوچه 7، پلاک 21',
		createdAt: '2025-12-04T10:20:00.000Z',
	},
	{
		id: '11',
		orderNumber: 'ORD-1011',
		customerName: 'بهزاد رحیمی',
		customerPhone: '09181234567',
		products: [
			{ productId: '16', productName: 'کیس گیمینگ RGB', quantity: 1, price: 6800000 },
			{ productId: '17', productName: 'فن کیس 120mm', quantity: 3, price: 320000 },
		],
		totalAmount: 7760000,
		status: 'completed',
		paymentStatus: 'paid',
		shippingAddress: 'ارومیه، خیابان امام، پلاک 567',
		createdAt: '2025-11-30T14:30:00.000Z',
	},
	{
		id: '12',
		orderNumber: 'ORD-1012',
		customerName: 'لیلا کاظمی',
		customerPhone: '09331234567',
		products: [
			{ productId: '18', productName: 'پاوربانک 20000mAh', quantity: 1, price: 980000 },
		],
		totalAmount: 980000,
		status: 'cancelled',
		paymentStatus: 'refunded',
		shippingAddress: 'یزد، بلوار دانشگاه، پلاک 89',
		createdAt: '2025-12-03T09:15:00.000Z',
	},
	{
		id: '13',
		orderNumber: 'ORD-1013',
		customerName: 'سعید فرهادی',
		customerPhone: '09161234567',
		products: [
			{ productId: '19', productName: 'SSD 1TB', quantity: 1, price: 4200000 },
			{ productId: '20', productName: 'کابل SATA', quantity: 2, price: 85000 },
		],
		totalAmount: 4370000,
		status: 'processing',
		paymentStatus: 'paid',
		shippingAddress: 'همدان، خیابان بوعلی، کوچه 15، پلاک 6',
		createdAt: '2025-12-05T11:40:00.000Z',
	},
	{
		id: '14',
		orderNumber: 'ORD-1014',
		customerName: 'نازنین امینی',
		customerPhone: '09221234567',
		products: [
			{ productId: '21', productName: 'دوربین وب‌کم 4K', quantity: 1, price: 2700000 },
		],
		totalAmount: 2700000,
		status: 'pending',
		paymentStatus: 'unpaid',
		shippingAddress: 'زنجان، خیابان سعدی، پلاک 145',
		createdAt: '2025-12-04T16:50:00.000Z',
	},
	{
		id: '15',
		orderNumber: 'ORD-1015',
		customerName: 'کیانوش زارع',
		customerPhone: '09371234567',
		products: [
			{ productId: '22', productName: 'گرافیک RTX 4060', quantity: 1, price: 18500000 },
			{ productId: '23', productName: 'خمیر سیلیکون', quantity: 1, price: 150000 },
		],
		totalAmount: 18650000,
		status: 'completed',
		paymentStatus: 'paid',
		shippingAddress: 'سنندج، میدان آزادی، کوچه 4، پلاک 11',
		createdAt: '2025-11-28T10:10:00.000Z',
	},
];
