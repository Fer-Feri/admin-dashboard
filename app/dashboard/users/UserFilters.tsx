'use client';

interface UserFiltersProps {
	selectedRole: string;
	onRoleChange: (role: string) => void;

	selectedStatus: string;
	onStatusChange: (status: string) => void;
}

export default function UserFilters({
	selectedRole,
	onRoleChange,
	selectedStatus,
	onStatusChange,
}: UserFiltersProps) {
	return (
		<div className="flex items-center gap-4 flex-wrap">
			{/* فیلتر نقش */}
			<div className="w-40">
				<select
					className="w-full py-2 px-3 rounded-lg border border-border bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
					value={selectedRole}
					onChange={(e) => onRoleChange(e.target.value)}>
					<option value="">همه نقش‌ها</option>
					<option value="admin">مدیر</option>
					<option value="manager">مدیر کل</option>
					<option value="user">کاربر</option>
				</select>
			</div>

			{/* فیلتر وضعیت */}
			<div className="w-40 ">
				<select
					className="w-full py-2 px-3 rounded-lg border border-border bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
					value={selectedStatus}
					onChange={(e) => onStatusChange(e.target.value)}>
					<option value="">همه وضعیت‌ها</option>
					<option value="active">فعال</option>
					<option value="inactive">غیرفعال</option>
					<option value="pending">در انتظار</option>
				</select>
			</div>
		</div>
	);
}
