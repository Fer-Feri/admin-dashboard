'use client';

import { useMemo, useState } from 'react';
import { mockUsers } from '@/lib/mock-data/users';
import UserSearch from './UserSearch';
import UserFilters from './UserFilters';
import UsersTable from '@/components/users/UserTable';

export default function Users() {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedRole, setSelectedRole] = useState('');
	const [selectedStatus, setSelectedStatus] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 10;

	// محاسبه لیست فیلترشده
	const filteredUsers = useMemo(() => {
		return mockUsers.filter((user) => {
			const query = searchQuery.toLowerCase();

			const matchesSearch =
				!searchQuery ||
				user.name.toLowerCase().includes(query) ||
				user.email.toLowerCase().includes(query);

			const matchesRole = !selectedRole || user.role === selectedRole;

			const matchesStatus = !selectedStatus || user.status === selectedStatus;

			return matchesSearch && matchesRole && matchesStatus;
		});
	}, [searchQuery, selectedRole, selectedStatus]);

	// محاسبه تعداد کل صفحات
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

	// محاسبه داده‌های صفحه فعلی
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

	// تابع تغییر صفحه
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	// تابع تغییر جستجو با ریست صفحه
	const handleSearchChange = (value: string) => {
		setSearchQuery(value);
		setCurrentPage(1);
	};

	// تابع تغییر نقش با ریست صفحه
	const handleRoleChange = (role: string) => {
		setSelectedRole(role);
		setCurrentPage(1);
	};

	// تابع تغییر وضعیت با ریست صفحه
	const handleStatusChange = (status: string) => {
		setSelectedStatus(status);
		setCurrentPage(1);
	};

	return (
		<div className="space-y-6">
			{/* بخش جستجو و فیلترها */}
			<div className="flex items-center gap-4 flex-wrap">
				<UserSearch value={searchQuery} onChange={handleSearchChange} />

				<UserFilters
					selectedRole={selectedRole}
					onRoleChange={handleRoleChange}
					selectedStatus={selectedStatus}
					onStatusChange={handleStatusChange}
				/>
			</div>

			{/* جدول با صفحه‌بندی */}
			<UsersTable
				users={paginatedUsers}
				currentPage={currentPage}
				totalPages={totalPages}
				totalUsers={filteredUsers.length}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
