// components/dashboard/MobileSidebar.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Menu } from '../menu/Menu';

interface MobileSidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Overlay */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 bg-black/50 z-40 md:hidden"
						onClick={onClose}
					/>

					{/* Drawer */}
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', damping: 30, stiffness: 300 }}
						className="fixed top-0 right-0 h-full w-64 bg-bg-primary border-l border-border z-50 md:hidden">
						{/* Header */}
						<div className="h-16 flex items-center justify-between px-4 border-b border-border">
							<span className="text-lg font-semibold text-text-primary">منو</span>
							<button
								onClick={onClose}
								className="p-1.5 hover:bg-bg-hover rounded-md transition-colors"
								aria-label="بستن منو">
								<X className="w-5 h-5 text-text-primary" />
							</button>
						</div>

						{/* محتوای منو */}
						<nav className="flex-1 overflow-y-auto p-4">
							<Menu onItemClick={onClose} />
						</nav>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
