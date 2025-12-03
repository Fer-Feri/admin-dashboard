import AddUserForm from '@/components/users/AddUserForm';

export default function NewUserPage() {
	return (
		<div className="space-y-6">
			{/* هدر صفحه */}
			<div className="">
				<h1 className="text-2xl font-bold text-text-primary">افرودن کاربر جدید</h1>
				<p className="text-text-tertiary mt-2">اطلاعات کاربر جدید را وارد کنید</p>
			</div>

			{/* فرم */}
			<div className=" rounded-lg shadow p-6">
				<AddUserForm />
			</div>
		</div>
	);
}
