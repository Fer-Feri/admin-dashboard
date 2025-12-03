import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ==================== CARD VARIANTS ====================
const cardVariants = cva('rounded-xl border bg-background transition-all duration-200', {
	variants: {
		variant: {
			default: 'border-neutral-200 shadow-sm',
			outlined: 'border-neutral-300',
			elevated: 'border-neutral-200 shadow-md hover:shadow-lg',
			primary: 'border-primary-200 bg-primary-50',
			success: 'border-success-200 bg-success-50',
			warning: 'border-warning-200 bg-warning-50',
			error: 'border-error-200 bg-error-50',
		},
		padding: {
			none: '',
			sm: 'p-4',
			md: 'p-6',
			lg: 'p-8',
		},
		hoverable: {
			true: 'cursor-pointer hover:shadow-md hover:border-primary-300',
			false: '',
		},
	},
	defaultVariants: {
		variant: 'default',
		padding: 'md',
		hoverable: false,
	},
});

// ==================== CARD PROPS ====================
export interface CardProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {}

// ==================== CARD COMPONENT ====================
export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, variant, padding, hoverable, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(cardVariants({ variant, padding, hoverable }), className)}
				{...props}
			/>
		);
	}
);

Card.displayName = 'Card';

// ==================== CARD HEADER ====================
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	description?: string;
	action?: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
	({ className, title, description, action, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn('mb-4 flex items-start justify-between', className)}
				{...props}>
				<div className="flex-1">
					{title && <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>}
					{description && <p className="mt-1 text-sm text-neutral-500">{description}</p>}
					{children}
				</div>
				{action && <div className="mr-4">{action}</div>}
			</div>
		);
	}
);

CardHeader.displayName = 'CardHeader';

// ==================== CARD CONTENT ====================
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		return <div ref={ref} className={cn('', className)} {...props} />;
	}
);

CardContent.displayName = 'CardContent';

// ==================== CARD FOOTER ====================
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					'mt-6 flex items-center gap-3 border-t border-neutral-200 pt-4',
					className
				)}
				{...props}
			/>
		);
	}
);

CardFooter.displayName = 'CardFooter';
