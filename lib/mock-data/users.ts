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
		createdAt: '2024-11-05T00:00:00Z',
		lastLogin: '2024-12-01T00:00:00Z',
	},
	{
		id: '2',
		name: 'سارا احمدی',
		email: 'sara@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '2024-10-11T00:00:00Z',
		lastLogin: '2024-11-30T00:00:00Z',
	},
	{
		id: '3',
		name: 'علی رضایی',
		email: 'ali@example.com',
		role: 'user',
		status: 'active',
		createdAt: '2024-08-31T00:00:00Z',
		lastLogin: '2024-11-28T00:00:00Z',
	},
	{
		id: '4',
		name: 'مریم کریمی',
		email: 'maryam@example.com',
		role: 'user',
		status: 'inactive',
		createdAt: '2024-08-15T00:00:00Z',
		lastLogin: '2024-11-05T00:00:00Z',
	},
	{
		id: '5',
		name: 'حسین نوری',
		email: 'hossein@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '2024-09-22T00:00:00Z',
		lastLogin: '2024-12-01T00:00:00Z',
	},
	{
		id: '6',
		name: 'زهرا محمدی',
		email: 'zahra@example.com',
		role: 'user',
		status: 'pending',
		createdAt: '2024-11-25T00:00:00Z',
	},
	{
		id: '7',
		name: 'رضا حسینی',
		email: 'reza@example.com',
		role: 'user',
		status: 'active',
		createdAt: '2024-07-02T00:00:00Z',
		lastLogin: '2024-11-27T00:00:00Z',
	},
	{
		id: '8',
		name: 'فاطمه جعفری',
		email: 'fatemeh@example.com',
		role: 'admin',
		status: 'active',
		createdAt: '2024-05-28T00:00:00Z',
		lastLogin: '2024-12-01T00:00:00Z',
	},
	{
		id: '9',
		name: 'محمد علوی',
		email: 'mohammad@example.com',
		role: 'user',
		status: 'active',
		createdAt: '2024-11-12T00:00:00Z',
		lastLogin: '2024-11-26T00:00:00Z',
	},
	{
		id: '10',
		name: 'نرگس امینی',
		email: 'narges@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '2024-09-08T00:00:00Z',
		lastLogin: '2024-11-30T00:00:00Z',
	},
	{
		id: '11',
		name: 'امیر کاظمی',
		email: 'amir@example.com',
		role: 'user',
		status: 'inactive',
		createdAt: '2024-05-03T00:00:00Z',
		lastLogin: '2024-10-11T00:00:00Z',
	},
	{
		id: '12',
		name: 'لیلا صادقی',
		email: 'leila@example.com',
		role: 'user',
		status: 'active',
		createdAt: '2024-08-20T00:00:00Z',
		lastLogin: '2024-11-28T00:00:00Z',
	},
	{
		id: '13',
		name: 'بهروز یوسفی',
		email: 'behrooz@example.com',
		role: 'manager',
		status: 'pending',
		createdAt: '2024-11-21T00:00:00Z',
	},
	{
		id: '14',
		name: 'شیرین مرادی',
		email: 'shirin@example.com',
		role: 'user',
		status: 'active',
		createdAt: '2024-10-02T00:00:00Z',
		lastLogin: '2024-12-01T00:00:00Z',
	},
	{
		id: '15',
		name: 'مهدی اکبری',
		email: 'mehdi@example.com',
		role: 'admin',
		status: 'active',
		createdAt: '2024-04-08T00:00:00Z',
		lastLogin: '2024-11-30T00:00:00Z',
	},
	{
		id: '16',
		name: 'پریسا عباسی',
		email: 'parisa@example.com',
		role: 'user',
		status: 'active',
		createdAt: '2024-10-26T00:00:00Z',
		lastLogin: '2024-11-27T00:00:00Z',
	},
	{
		id: '17',
		name: 'سعید رحیمی',
		email: 'saeed@example.com',
		role: 'user',
		status: 'inactive',
		createdAt: '2024-07-18T00:00:00Z',
		lastLogin: '2024-10-23T00:00:00Z',
	},
	{
		id: '18',
		name: 'نازنین باقری',
		email: 'nazanin@example.com',
		role: 'manager',
		status: 'active',
		createdAt: '2024-08-24T00:00:00Z',
		lastLogin: '2024-12-01T00:00:00Z',
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
