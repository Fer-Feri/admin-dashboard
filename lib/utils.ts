import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * ترکیب className های تیلویند بدون تداخل
 * مثال: cn('px-2 py-1', 'px-4') => 'px-4 py-1'
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
