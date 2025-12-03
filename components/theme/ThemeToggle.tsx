'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState<boolean>(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') === 'dark';
		}
		return false;
	});

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<button
			onClick={toggleTheme}
			className="w-10 h-10 rounded-md flex items-center justify-center bg-bg-hover hover:bg-bg-active transition-colors">
			{isDark ? (
				<Sun size={20} className="text-text-primary" />
			) : (
				<Moon size={20} className="text-text-primary" />
			)}
		</button>
	);
}
