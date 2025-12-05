'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface OrderSearchProps {
	onSearch: (query: string) => void;
}

export default function OrderSearch({ onSearch }: OrderSearchProps) {
	const [query, setQuery] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		onSearch(value);
	};

	return (
		<div className="relative">
			<Search
				className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
				size={20}
			/>
			<input
				type="text"
				value={query}
				onChange={handleChange}
				placeholder="جستجو بر اساس شماره سفارش، نام یا شماره تماس..."
				className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			/>
		</div>
	);
}
