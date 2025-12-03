import { z } from 'zod';

export const addUserSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'نام باید حداقل ۳ کاراکتر باشد' })
		.max(50, { message: 'نام نباید بیشتر از ۵۰ کاراکتر باشد' }),

	email: z
		.string()
		.min(1, { message: 'ایمیل الزامی است' })
		.email({ message: 'ایمیل معتبر وارد کنید' }),

	password: z
		.string()
		.min(8, { message: 'رمز عبور باید حداقل ۸ کاراکتر باشد' })
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
			message: 'رمز عبور باید شامل حروف بزرگ، کوچک و عدد باشد',
		}),

	role: z.enum(['Admin', 'Manager', 'User'], {
		message: 'نقش معتبر انتخاب کنید',
	}),

	status: z.enum(['active', 'inactive', 'pending'], {
		message: 'وضعیت معتبر انتخاب کنید',
	}),
});

export type AddUserFormData = z.infer<typeof addUserSchema>;
