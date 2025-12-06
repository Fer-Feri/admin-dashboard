'use client';

import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Mail, Lock, Chrome, Linkedin, Github } from 'lucide-react';

export default function Home() {
	const router = useRouter();

	const handleFakeLogin = () => {
		router.push('/dashboard');
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 p-4">
			{/* هدر اصلی */}
			<div className="mb-8 text-center space-y-2">
				<h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-indigo-600">
					پنل مدیریت نمونه‌کار
				</h1>
				<p className="text-neutral-600 dark:text-neutral-400 text-lg">
					ورود نمادین به داشبورد ادمین
				</p>
			</div>

			{/* کارت اصلی فرم */}
			<Card variant="elevated" padding="lg" className="w-full max-w-md">
				<CardHeader title="ورود به سیستم" description="برای دسترسی وارد شوید" />

				<CardContent className="space-y-4">
					{/* فیلد ایمیل */}
					<Input
						placeholder="آدرس ایمیل"
						type="email"
						leftIcon={<Mail className="h-4 w-4" />}
						disabled
					/>

					{/* فیلد پسورد */}
					<Input
						placeholder="رمز عبور"
						type="password"
						leftIcon={<Lock className="h-4 w-4" />}
						disabled
					/>

					{/* دکمه ورود اصلی */}
					<Button className="w-full" size="lg" onClick={handleFakeLogin}>
						ورود به داشبورد
					</Button>

					{/* Divider */}
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t border-neutral-200" />
						</div>
						<div className="relative flex justify-center text-xs">
							<span className="bg-background px-2 text-neutral-500">
								یا ورود از طریق
							</span>
						</div>
					</div>

					{/* دکمه‌های شبکه‌های اجتماعی */}
					<div className="grid grid-cols-3 gap-3">
						<Button
							variant="outline"
							size="md"
							className="flex-col h-auto py-3"
							onClick={handleFakeLogin}>
							<Chrome className="h-5 w-5 mb-1" />
							<span className="text-xs">Google</span>
						</Button>

						<Button
							variant="outline"
							size="md"
							className="flex-col h-auto py-3"
							onClick={handleFakeLogin}>
							<Linkedin className="h-5 w-5 mb-1" />
							<span className="text-xs">LinkedIn</span>
						</Button>

						<Button
							variant="outline"
							size="md"
							className="flex-col h-auto py-3"
							onClick={handleFakeLogin}>
							<Github className="h-5 w-5 mb-1" />
							<span className="text-xs">GitHub</span>
						</Button>
					</div>

					{/* یادوری نمایشی */}
					<p className="text-center text-xs text-neutral-500 mt-6 bg-blue-50 dark:bg-blue-950 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
						💡 این فرم فقط نماشی است. برای مشاهده داشبورد روی هر دکمه کلیک کنید.
					</p>
				</CardContent>
			</Card>

			{/* فوتر */}
			<p className="mt-8 text-sm text-neutral-500">
				ساخته شده با ❤️ توسط فرشاد | نمونه‌کار پروژه
			</p>
		</div>
	);
}
