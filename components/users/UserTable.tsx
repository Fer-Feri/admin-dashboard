'use client';

import { User } from '@/lib/mock-data/users';
import UserRow from './UserRow';

interface UsersTableProps {
	users: User[];
	currentPage: number;
	totalPages: number;
	totalUsers: number;
	onPageChange: (page: number) => void;
}

export default function UsersTable({
	users,
	currentPage,
	totalPages,
	totalUsers,
	onPageChange,
}: UsersTableProps) {
	return (
		<div className="bg-bg-secondary rounded-lg shadow-md overflow-hidden">
			{/* جدول */}
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-bg-tertiary border-b border-border">
						<tr>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								کاربر
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								ایمیل
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								نقش
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								وضعیت
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								آخرین ورود
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								عملیات
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-border">
						{users.length === 0 ? (
							<tr>
								<td
									colSpan={6}
									className="px-6 py-8 text-center text-text-secondary">
									هیچ کاربری یافت نشد
								</td>
							</tr>
						) : (
							users.map((user) => <UserRow key={user.id} user={user} />)
						)}
					</tbody>
				</table>
			</div>

			{/* بخش صفحه‌بندی */}
			{users.length > 0 && (
				<div className="px-6 py-4 border-t border-border flex items-center justify-between">
					{/* تعداد کاربران */}
					<div className="text-sm text-text-secondary">
						نمایش {users.length} از {totalUsers} کاربر
					</div>

					{/* دکمه‌های صفحه‌بندی */}
					<div className="flex items-center gap-2">
						{/* دکمه قبلی */}
						<button
							onClick={() => onPageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className="px-3 py-1 rounded-md border border-border bg-bg-primary text-text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bg-tertiary transition-colors">
							قبلی
						</button>

						{/* شماره صفحات */}
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => onPageChange(page)}
								className={`px-3 py-1 rounded-md border transition-colors ${
									currentPage === page
										? 'bg-primary-light text-white border-primary-light'
										: 'border-border bg-bg-primary text-text-primary hover:bg-bg-tertiary'
								}`}>
								{page}
							</button>
						))}

						{/* دکمه بعدی */}
						<button
							onClick={() => onPageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className="px-3 py-1 rounded-md border border-border bg-bg-primary text-text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-bg-tertiary transition-colors">
							بعدی
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
