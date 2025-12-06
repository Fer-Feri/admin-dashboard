// components/dashboad/menu/MenuItem.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { menuItemVariants } from './menu-variants';
import { iconMap } from '@/lib/icon-map';
import type { MenuItem as MenuItemType } from '@/lib/menu-data';

interface MenuItemProps {
	item: MenuItemType;
	depth?: number;
	onItemClick?: () => void; // 🆕 برای بستن منو موبایل
}

export function MenuItem({ item, depth = 0, onItemClick }: MenuItemProps) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const isActive = pathname === item.href;
	const isParentActive = item.children?.some((child) => pathname === child.href) ?? false;

	const hasChildren = item.children && item.children.length > 0;

	const getVariant = (): 'default' | 'active' | 'parentActive' => {
		if (isActive) return 'active';
		if (isParentActive) return 'parentActive';
		return 'default';
	};

	const Icon = item.icon ? iconMap[item.icon] : null;

	const content = (
		<div
			className={cn(
				menuItemVariants({ variant: getVariant(), depth: Math.min(depth, 1) as 0 | 1 })
			)}
			onClick={() => hasChildren && setIsOpen(!isOpen)}>
			{Icon && <Icon className="w-5 h-5 shrink-0" />}
			<span className="flex-1">{item.label}</span>
			{hasChildren && (
				<motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
					<ChevronDown className="w-4 h-4" />
				</motion.div>
			)}
		</div>
	);

	return (
		<div>
			{hasChildren ? (
				content
			) : (
				<Link href={item.href || '#'} onClick={onItemClick}>
					{content}
				</Link>
			)}

			{hasChildren && (
				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
							style={{ overflow: 'hidden' }}>
							<div className="space-y-1 mt-1">
								{item.children?.map((child) => (
									<MenuItem
										key={child.id}
										item={child}
										depth={depth + 1}
										onItemClick={onItemClick} // 🆕 پاس دادن به زیرمنو
									/>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</div>
	);
}
