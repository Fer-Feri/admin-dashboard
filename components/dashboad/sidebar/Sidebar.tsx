// components/dashboard/sidebar/Sidebar.tsx
'use client';

import { Menu } from '../menu/Menu';

export default function Sidebar() {
	return (
		<aside className="w-64 bg-bg-primary border-l border-border hidden md:flex flex-col shrink-0">
			<div className="h-16 flex items-center justify-center border-b border-border shrink-0">
				<h1 className="text-xl font-bold text-primary">پنل مدیریت</h1>
			</div>

			<nav className="flex-1 overflow-y-auto p-4">
				<Menu />
			</nav>
		</aside>
	);
}
