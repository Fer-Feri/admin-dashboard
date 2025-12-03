// components/dashboad/menu/Menu.tsx
'use client';

import { menuData } from '@/lib/menu-data';
import { MenuItem } from './MenuItem';

interface MenuProps {
	onItemClick?: () => void;
}

export function Menu({ onItemClick }: MenuProps) {
	return (
		<div className="space-y-1">
			{menuData.map((item) => (
				<MenuItem key={item.id} item={item} onItemClick={onItemClick} />
			))}
		</div>
	);
}
