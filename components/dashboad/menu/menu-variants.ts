// components/sidebar/menu-variants.ts
import { cva } from 'class-variance-authority';

export const menuItemVariants = cva(
	'flex items-center gap-3 rounded-md transition-all duration-200 cursor-pointer select-none',
	{
		variants: {
			variant: {
				default: 'text-text-secondary hover:bg-bg-hover hover:text-text-primary',
				active: 'bg-bg-active text-text-primary font-medium',
				parentActive: 'text-text-primary',
			},

			depth: {
				0: 'py-2 pr-4 pl-3 text-base',
				1: 'py-2 pr-8 pl-3 text-sm text-text-secondary',
			},
		},

		compoundVariants: [
			{
				variant: 'active',
				depth: 1,
				class: 'bg-transparent text-text-primary font-medium',
			},
		],

		defaultVariants: {
			variant: 'default',
			depth: 0,
		},
	}
);
