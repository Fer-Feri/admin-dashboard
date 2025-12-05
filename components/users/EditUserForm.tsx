import { User } from '@/lib/mock-data/users';
import { useState } from 'react';

interface EditUserFormProps {
	user: User;
	onSave: (updateUser: User) => void;
	onCancel: () => void;
}

interface FormErrors {
	name: string;
	email: string;
}

export default function EditUserForm({ user, onSave, onCancel }: EditUserFormProps) {
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [role, setRole] = useState<User['role']>(user.role);
	const [status, setStatus] = useState<User['status']>(user.status);

	const [errors, setErrors] = useState<FormErrors>({
		name: '',
		email: '',
	});

	const validate = () => {
		const newErrors: FormErrors = {
			name: '',
			email: '',
		};

		if (!name.trim()) newErrors.name = 'نام نمی‌تواند خالی باشد.';
		if (!email.trim()) newErrors.email = 'ایمیل نمی‌تواند خالی باشد.';
		else if (!email.includes('@')) newErrors.email = 'ایمیل معتبر وارد کنید.';

		setErrors(newErrors);

		return newErrors.name === '' && newErrors.email === '';
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		const updateUser: User = {
			...user,
			name,
			email,
			role,
			status,
		};

		onSave(updateUser);
	};

	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
			<div className="bg-bg-secondary p-6 rounded-lg w-full max-w-md shadow-xl">
				<h2 className="text-lg font-semibold mb-4 text-text-primary">ویرایش کاربر</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Name */}
					<div>
						<label className="block mb-1 text-text-secondary">نام</label>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full p-2 rounded bg-bg-tertiary border border-border text-text-primary"
						/>
						{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
					</div>

					{/* Email */}
					<div>
						<label className="block mb-1 text-text-secondary">ایمیل</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full p-2 rounded bg-bg-tertiary border border-border text-text-primary"
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">{errors.email}</p>
						)}
					</div>

					{/* Role */}
					<div>
						<label className="block mb-1 text-text-secondary">نقش</label>
						<select
							value={role}
							onChange={(e) => setRole(e.target.value as User['role'])}
							className="w-full p-2 rounded bg-bg-tertiary border border-border text-text-primary">
							<option value="admin">مدیر کل</option>
							<option value="manager">مدیر</option>
							<option value="user">کاربر</option>
						</select>
					</div>

					{/* Status */}
					<div>
						<label className="block mb-1 text-text-secondary">وضعیت</label>
						<select
							value={status}
							onChange={(e) => setStatus(e.target.value as User['status'])}
							className="w-full p-2 rounded bg-bg-tertiary border border-border text-text-primary">
							<option value="active">فعال</option>
							<option value="inactive">غیرفعال</option>
							<option value="pending">در انتظار</option>
						</select>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-2 pt-4">
						<button
							onClick={onCancel}
							type="button"
							className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-text-primary rounded">
							لغو
						</button>

						<button type="submit" className="px-4 py-2 bg-primary text-white rounded">
							ذخیره
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
