'use client';

import { Product } from '@/lib/mock-data/products';
import ProductRow from './ProductRow';

interface ProductTableProps {
	products: Product[];
	currentPage: number;
	totalPages: number;
	totalProducts: number;
	onPageChange: (page: number) => void;
	onDeleteProduct: (productId: string) => void;
	onEditProduct: (product: Product) => void;
}

export default function ProductTable({
	products,
	currentPage,
	totalPages,
	totalProducts,
	onPageChange,
	onDeleteProduct,
	onEditProduct,
}: ProductTableProps) {
	return (
		<div className="bg-bg-secondary rounded-lg shadow-md overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-bg-tertiary border-b border-border">
						<tr>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								محصول
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								دسته‌بندی
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								قیمت
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								موجودی
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								وضعیت
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								تاریخ ایجاد
							</th>
							<th className="px-6 py-3 text-right text-sm font-medium text-text-secondary">
								عملیات
							</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-border">
						{products.length === 0 ? (
							<tr>
								<td
									colSpan={7}
									className="px-6 py-8 text-center text-text-secondary">
									هیچ محصولی یافت نشد
								</td>
							</tr>
						) : (
							products.map((product) => (
								<ProductRow
									key={product.id}
									product={product}
									onDeleteProduct={() => onDeleteProduct(product.id)}
									onEditProduct={() => onEditProduct(product)}
								/>
							))
						)}
					</tbody>
				</table>
			</div>

			{totalProducts > 0 && (
				<div className="flex items-center justify-between px-6 py-4 border-t border-border bg-bg-secondary">
					<p className="text-sm text-text-secondary">
						صفحه {currentPage} از {totalPages} — مجموع {totalProducts} محصول
					</p>

					<div className="flex items-center gap-2">
						<button
							disabled={currentPage === 1}
							onClick={() => onPageChange(currentPage - 1)}
							className="px-3 py-1 rounded border border-border text-sm hover:bg-bg-tertiary disabled:opacity-40">
							قبلی
						</button>

						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								onClick={() => onPageChange(i + 1)}
								className={`px-3 py-1 rounded border text-sm ${
									currentPage === i + 1
										? 'bg-primary text-white border-primary'
										: 'border-border hover:bg-bg-tertiary'
								}`}>
								{i + 1}
							</button>
						))}

						<button
							disabled={currentPage === totalPages}
							onClick={() => onPageChange(currentPage + 1)}
							className="px-3 py-1 rounded border border-border text-sm hover:bg-bg-tertiary disabled:opacity-40">
							بعدی
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
