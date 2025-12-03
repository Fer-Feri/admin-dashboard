'use client';

import { MobileSidebar } from '@/components/dashboad/menu/MobileSidebar';
import Sidebar from '@/components/dashboad/sidebar/Sidebar';
import { Topbar } from '@/components/dashboad/topbar/Topbar';
import { useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar دسکتاپ */}
			<Sidebar />

			{/* Sidebar موبایل */}
			<MobileSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

			{/* محتوای اصلی */}
			<div className="flex-1 flex flex-col overflow-hidden">
				{/* Topbar */}
				<Topbar onMenuClick={() => setIsMobileMenuOpen(true)} />

				{/* محتوا */}
				<main className="flex-1 overflow-y-auto bg-bg-secondary p-4 md:p-6">
					{children}
				</main>
			</div>
		</div>
	);
}
