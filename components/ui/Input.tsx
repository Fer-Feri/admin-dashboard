'use client';

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ==================== INPUT VARIANTS ====================
const inputVariants = cva(
	'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'border-neutral-300 bg-background focus:border-primary-500 focus:ring-primary-100',
				error: 'border-error-500 bg-background focus:border-error-600 focus:ring-error-100',
				success:
					'border-success-500 bg-background focus:border-success-600 focus:ring-success-100',
			},
			size: {
				sm: 'px-3 py-1.5 text-sm',
				md: 'px-4 py-2 text-base',
				lg: 'px-5 py-3 text-lg',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	}
);

// ==================== INPUT PROPS ====================
export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputVariants> {
	label?: string;
	helperText?: string;
	error?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

// ==================== INPUT COMPONENT ====================
export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			variant,
			size,
			label,
			helperText,
			error,
			leftIcon,
			rightIcon,
			disabled,
			...props
		},
		ref
	) => {
		const finalVariant = error ? 'error' : variant;

		return (
			<div className="w-full">
				{/* LABEL */}
				{label && (
					<label className="mb-1.5 block text-sm font-medium text-neutral-700">
						{label}
						{props.required && <span className="text-error-500 mr-1">*</span>}
					</label>
				)}

				{/* INPUT WRAPPER */}
				<div className="relative">
					{/* LEFT ICON */}
					{leftIcon && (
						<div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
							{leftIcon}
						</div>
					)}

					{/* INPUT */}
					<input
						ref={ref}
						disabled={disabled}
						className={cn(
							inputVariants({ variant: finalVariant, size }),
							leftIcon && 'pr-10',
							rightIcon && 'pl-10',
							className
						)}
						{...props}
					/>

					{/* RIGHT ICON */}
					{rightIcon && (
						<div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
							{rightIcon}
						</div>
					)}
				</div>

				{/* HELPER TEXT / ERROR */}
				{(error || helperText) && (
					<p
						className={cn(
							'mt-1.5 text-sm',
							error ? 'text-error-500' : 'text-neutral-500'
						)}>
						{error || helperText}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';

// ==================== TEXTAREA PROPS ====================
export interface TextareaProps
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
		VariantProps<typeof inputVariants> {
	label?: string;
	helperText?: string;
	error?: string;
}

// ==================== TEXTAREA COMPONENT ====================
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, variant, size, label, helperText, error, disabled, ...props }, ref) => {
		const finalVariant = error ? 'error' : variant;

		return (
			<div className="w-full">
				{/* LABEL */}
				{label && (
					<label className="mb-1.5 block text-sm font-medium text-neutral-700">
						{label}
						{props.required && <span className="text-error-500 mr-1">*</span>}
					</label>
				)}

				{/* TEXTAREA */}
				<textarea
					ref={ref}
					disabled={disabled}
					className={cn(
						inputVariants({ variant: finalVariant, size }),
						'min-h-[100px] resize-y',
						className
					)}
					{...props}
				/>

				{/* HELPER TEXT / ERROR */}
				{(error || helperText) && (
					<p
						className={cn(
							'mt-1.5 text-sm',
							error ? 'text-error-500' : 'text-neutral-500'
						)}>
						{error || helperText}
					</p>
				)}
			</div>
		);
	}
);

Textarea.displayName = 'Textarea';
