'use client';

import { Search } from 'lucide-react';

interface ProductSearchProps {
	value: string;
	onChange: (value: string) => void;
}

export default function ProductSearch({ value, onChange }: ProductSearchProps) {
	return (
		<div className="relative">
			<Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="جستجوی محصول..."
				className="w-64 pr-10 pl-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
			/>
		</div>
	);
}
