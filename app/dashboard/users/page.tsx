'use client';

import { useMemo, useState } from 'react';
import { mockUsers, User } from '@/lib/mock-data/users';
import UserSearch from './UserSearch';
import UserFilters from './UserFilters';
import UsersTable from '@/components/users/UserTable';
import ConfirmModal from '@/components/common/ConfirmModal';

export default function Users() {
	const [users, setUsers] = useState<User[]>(mockUsers);

	const [searchQuery, setSearchQuery] = useState('');
	const [selectedRole, setSelectedRole] = useState<User['role'] | 'all'>('all');
	const [selectedStatus, setSelectedStatus] = useState<User['status'] | 'all'>('all');
	const [currentPage, setCurrentPage] = useState(1);

	const [deletedId, setDeletedId] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const itemsPerPage = 10;

	// فیلترها باید روی state users انجام شوند (نه mockUsers)
	const filteredUsers = useMemo(() => {
		return users.filter((user) => {
			const query = searchQuery.toLowerCase();

			const matchesSearch =
				!searchQuery ||
				user.name.toLowerCase().includes(query) ||
				user.email.toLowerCase().includes(query);

			const matchesRole = selectedRole === 'all' || user.role === selectedRole;

			const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;

			return matchesSearch && matchesRole && matchesStatus;
		});
	}, [users, searchQuery, selectedRole, selectedStatus]);

	// صفحه‌بندی
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

	// در Pagination
	const handlePageChange = (page: number) => setCurrentPage(page);

	// سرچ / فیلتر
	const handleSearchChange = (value: string) => {
		setSearchQuery(value);
		setCurrentPage(1);
	};

	const handleRoleChange = (role: User['role'] | 'all') => {
		setSelectedRole(role);
		setCurrentPage(1);
	};

	const handleStatusChange = (status: User['status'] | 'all') => {
		setSelectedStatus(status);
		setCurrentPage(1);
	};

	// باز کردن مودال قبل از حذف
	const openModal = (userId: string) => {
		setDeletedId(userId);
		setIsOpen(true);
	};

	// حذف واقعی پس از تأیید
	const handleConfirmDelete = () => {
		if (!deletedId) return;

		const updated = users.filter((u) => u.id !== deletedId);
		setUsers(updated);

		// تنظیم صفحه در صورت خالی شدن
		const totalPagesAfter = Math.ceil(updated.length / itemsPerPage);
		if (currentPage > totalPagesAfter && totalPagesAfter > 0) {
			setCurrentPage(totalPagesAfter);
		}

		setIsOpen(false);
		setDeletedId(null);
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4 flex-wrap">
				<UserSearch value={searchQuery} onChange={handleSearchChange} />
				<UserFilters
					selectedRole={selectedRole}
					onRoleChange={handleRoleChange}
					selectedStatus={selectedStatus}
					onStatusChange={handleStatusChange}
				/>
			</div>

			<UsersTable
				users={paginatedUsers}
				currentPage={currentPage}
				totalPages={totalPages}
				totalUsers={filteredUsers.length}
				onPageChange={handlePageChange}
				onDeleteUser={openModal}
			/>

			<ConfirmModal
				isOpen={isOpen}
				title="حذف کاربر"
				description="آیا از حذف این کاربر مطمئن هستید؟ عملیات بازگشت‌پذیر نیست."
				confirmText="حذف"
				cancelText="لغو"
				onCancel={() => setIsOpen(false)}
				onConfirm={handleConfirmDelete}
			/>
		</div>
	);
}
