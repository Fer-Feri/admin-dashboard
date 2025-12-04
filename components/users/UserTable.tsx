'use client';

import { User } from '@/lib/mock-data/users';
import UserRow from './UserRow';

interface UsersTableProps {
	users: User[];
	currentPage: number;
	totalPages: number;
	totalUsers: number;
	onPageChange: (page: number) => void;
	onDeleteUser: (userId: string) => void;
}

export default function UsersTable({
	users,
	currentPage,
	totalPages,
	totalUsers,
	onPageChange,
	onDeleteUser,
}: UsersTableProps) {
	return (
		<div className="bg-bg-secondary rounded-lg shadow-md overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-bg-tertiary border-b border-border">
						<tr>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								کاربر
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								نقش
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								وضعیت
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								تاریخ عضویت
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
							users.map((user) => (
								<UserRow
									key={user.id}
									user={user}
									onDeleteUser={() => onDeleteUser(user.id)}
								/>
							))
						)}
					</tbody>
				</table>
			</div>

			{totalUsers > 0 && (
				<div className="flex items-center justify-between px-6 py-4 border-t border-border bg-bg-secondary">
					<p className="text-sm text-text-secondary">
						صفحه {currentPage} از {totalPages} — مجموع {totalUsers} کاربر
					</p>

					<div className="flex items-center gap-2">
						<button
							disabled={currentPage === 1}
							onClick={() => onPageChange(currentPage - 1)}
							className="px-3 py-1 rounded border border-border text-sm hover:bg-bg-tertiary disabled:opacity-40">
							قبلی
						</button>

						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								onClick={() => onPageChange(i + 1)}
								className={`px-3 py-1 rounded border text-sm ${
									currentPage === i + 1
										? 'bg-primary text-white border-primary'
										: 'border-border hover:bg-bg-tertiary'
								}`}>
								{i + 1}
							</button>
						))}

						<button
							disabled={currentPage === totalPages}
							onClick={() => onPageChange(currentPage + 1)}
							className="px-3 py-1 rounded border border-border text-sm hover:bg-bg-tertiary disabled:opacity-40">
							بعدی
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
