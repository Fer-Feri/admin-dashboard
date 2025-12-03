export interface User {
	id: string;
	name: string;
	email: string;
	role: 'admin' | 'manager' | 'user';
	status: 'active' | 'inactive' | 'pending';
	avatar?: string;
	createdAt: string;
	lastLogin?: string;
}

export const mockUsers: User[] = [
	{
		id: '1',
		name: 'فرشاد بهاری',
		email: 'farshad@example.com',
		role: 'admin',
		status: 'active',
		createdAt: '1403/08/15',
		lastLogin: '1403/09/10',
	},
	{
		id: '2',
		name: 'سارا احمدی',
		email: 'sara@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '1403/07/20',
		lastLogin: '1403/09/09',
	},
	{
		id: '3',
		name: 'علی رضایی',
		email: 'ali@example.com',
		role: 'user',
		status: 'active',
		createdAt: '1403/06/10',
		lastLogin: '1403/09/08',
	},
	{
		id: '4',
		name: 'مریم کریمی',
		email: 'maryam@example.com',
		role: 'user',
		status: 'inactive',
		createdAt: '1403/05/25',
		lastLogin: '1403/08/15',
	},
	{
		id: '5',
		name: 'حسین نوری',
		email: 'hossein@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '1403/07/01',
		lastLogin: '1403/09/10',
	},
	{
		id: '6',
		name: 'زهرا محمدی',
		email: 'zahra@example.com',
		role: 'user',
		status: 'pending',
		createdAt: '1403/09/05',
	},
	{
		id: '7',
		name: 'رضا حسینی',
		email: 'reza@example.com',
		role: 'user',
		status: 'active',
		createdAt: '1403/04/12',
		lastLogin: '1403/09/07',
	},
	{
		id: '8',
		name: 'فاطمه جعفری',
		email: 'fatemeh@example.com',
		role: 'admin',
		status: 'active',
		createdAt: '1403/03/08',
		lastLogin: '1403/09/10',
	},
	{
		id: '9',
		name: 'محمد علوی',
		email: 'mohammad@example.com',
		role: 'user',
		status: 'active',
		createdAt: '1403/08/22',
		lastLogin: '1403/09/06',
	},
	{
		id: '10',
		name: 'نرگس امینی',
		email: 'narges@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '1403/06/18',
		lastLogin: '1403/09/09',
	},
	{
		id: '11',
		name: 'امیر کاظمی',
		email: 'amir@example.com',
		role: 'user',
		status: 'inactive',
		createdAt: '1403/02/14',
		lastLogin: '1403/07/20',
	},
	{
		id: '12',
		name: 'لیلا صادقی',
		email: 'leila@example.com',
		role: 'user',
		status: 'active',
		createdAt: '1403/05/30',
		lastLogin: '1403/09/08',
	},
	{
		id: '13',
		name: 'بهروز یوسفی',
		email: 'behrooz@example.com',
		role: 'manager',
		status: 'pending',
		createdAt: '1403/09/01',
	},
	{
		id: '14',
		name: 'شیرین مرادی',
		email: 'shirin@example.com',
		role: 'user',
		status: 'active',
		createdAt: '1403/07/11',
		lastLogin: '1403/09/10',
	},
	{
		id: '15',
		name: 'مهدی اکبری',
		email: 'mehdi@example.com',
		role: 'admin',
		status: 'active',
		createdAt: '1403/01/20',
		lastLogin: '1403/09/09',
	},
	{
		id: '16',
		name: 'پریسا عباسی',
		email: 'parisa@example.com',
		role: 'user',
		status: 'active',
		createdAt: '1403/08/05',
		lastLogin: '1403/09/07',
	},
	{
		id: '17',
		name: 'سعید رحیمی',
		email: 'saeed@example.com',
		role: 'user',
		status: 'inactive',
		createdAt: '1403/04/28',
		lastLogin: '1403/08/01',
	},
	{
		id: '18',
		name: 'نازنین باقری',
		email: 'nazanin@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '1403/06/03',
		lastLogin: '1403/09/10',
	},
];

export const roleLabels: Record<User['role'], string> = {
	admin: 'مدیر کل',
	manager: 'مدیر',
	user: 'کاربر',
};

export const statusLabels: Record<User['status'], string> = {
	active: 'فعال',
	inactive: 'غیرفعال',
	pending: 'در انتظار',
};
