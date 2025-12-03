'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * تعریف variant های مختلف دکمه
 * این جادوی cva است - یک بار می‌نویسی، همه جا استفاده می‌کنی
 */
const buttonVariants = cva(
	// Base styles - همیشه اعمال میشه
	'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			// Variant اصلی (رنگ‌بندی)
			variant: {
				default:
					'bg-primary text-primary-foreground hover:bg-primary-700 active:bg-primary-800',
				secondary:
					'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300',
				success:
					'bg-success text-success-foreground hover:bg-success-700 active:bg-success-800',
				warning:
					'bg-warning text-warning-foreground hover:bg-warning-700 active:bg-warning-800',
				error: 'bg-error text-error-foreground hover:bg-error-700 active:bg-error-800',
				outline:
					'border-2 border-neutral-300 bg-transparent hover:bg-neutral-50 active:bg-neutral-100',
				ghost: 'hover:bg-neutral-100 active:bg-neutral-200',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			// اندازه
			size: {
				sm: 'h-8 px-3 text-xs',
				md: 'h-10 px-4 text-sm',
				lg: 'h-12 px-6 text-base',
				xl: 'h-14 px-8 text-lg',
				icon: 'h-10 w-10', // برای دکمه‌های فقط آیکون
			},
		},
		// مقادیر پیش‌فرض
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	}
);

/**
 * Interface برای props های Button
 */
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	/** آیا loading نشان داده بشه؟ */
	isLoading?: boolean;
}

/**
 * Button Component
 *
 * استفاده:
 * <Button>کلیک کنید</Button>
 * <Button variant="success" size="lg">ذخیره</Button>
 * <Button variant="outline" isLoading>در حال ارسال...</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, isLoading, disabled, children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				disabled={disabled || isLoading}
				className={cn(buttonVariants({ variant, size }), className)}
				{...props}>
				{isLoading && (
					<svg
						className="h-4 w-4 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24">
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				)}
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export { Button, buttonVariants };
