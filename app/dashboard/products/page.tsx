'use client';

import { useMemo, useState } from 'react';
import { mockProducts, Product } from '@/lib/mock-data/products';
import ProductSearch from '@/components/products/ProductSearch';
import ProductFilters from '@/components/products/ProductFilters';
import ProductTable from '@/components/products/ProductTable';
import ConfirmModal from '@/components/common/ConfirmModal';
import EditProductForm from '@/components/products/EditProductForm';
import AddProductForm from '@/components/products/AddProductForm';

export default function Products() {
	const [products, setProducts] = useState<Product[]>(mockProducts);

	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string>('all');
	const [selectedStatus, setSelectedStatus] = useState<Product['status'] | 'all'>('all');
	const [currentPage, setCurrentPage] = useState(1);

	const [deletedId, setDeletedId] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const [editingProduct, setEditingProduct] = useState<Product | null>(null);
	const [isEditingFormOpen, setIsEditingFormOpen] = useState(false);

	const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false);

	const itemsPerPage = 10;

	// فیلتر محصولات
	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			const query = searchQuery.toLowerCase();

			const matchesSearch =
				!searchQuery ||
				product.name.toLowerCase().includes(query) ||
				product.category.toLowerCase().includes(query);

			const matchesCategory =
				selectedCategory === 'all' || product.category === selectedCategory;

			const matchesStatus = selectedStatus === 'all' || product.status === selectedStatus;

			return matchesSearch && matchesCategory && matchesStatus;
		});
	}, [products, searchQuery, selectedCategory, selectedStatus]);

	// صفحه‌بندی
	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

	// تغییر صفحه
	const handlePageChange = (page: number) => setCurrentPage(page);

	// سرچ / فیلتر
	const handleSearchChange = (value: string) => {
		setSearchQuery(value);
		setCurrentPage(1);
	};

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		setCurrentPage(1);
	};

	const handleStatusChange = (status: Product['status'] | 'all') => {
		setSelectedStatus(status);
		setCurrentPage(1);
	};

	// -----------------------------------------
	// ------------------DELETE-----------------------
	// -----------------------------------------
	const openModal = (productId: string) => {
		setDeletedId(productId);
		setIsOpen(true);
	};

	const handleConfirmDelete = () => {
		if (!deletedId) return;

		const updated = products.filter((p) => p.id !== deletedId);
		setProducts(updated);

		// تنظیم صفحه در صورت خالی شدن
		const totalPagesAfter = Math.ceil(updated.length / itemsPerPage);
		if (currentPage > totalPagesAfter && totalPagesAfter > 0) {
			setCurrentPage(totalPagesAfter);
		}

		setIsOpen(false);
		setDeletedId(null);
	};

	// -----------------------------------------
	// ------------------EDIT-----------------------
	// -----------------------------------------
	const openEditForm = (product: Product) => {
		setEditingProduct(product);
		setIsEditingFormOpen(true);
	};

	const handleEditProduct = (updatedProduct: Product) => {
		setProducts(
			products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
		);
		setIsEditingFormOpen(false);
		setEditingProduct(null);
	};

	// -----------------------------------------
	// ------------------ADD PRODUCT-----------------------
	// -----------------------------------------
	const openAddProductForm = () => {
		setIsAddProductFormOpen(true);
	};

	const closeAddProductForm = () => {
		setIsAddProductFormOpen(false);
	};

	const handleAddProductForm = (newProduct: Omit<Product, 'id' | 'createdAt'>) => {
		const newProductWithId: Product = {
			...newProduct,
			id: Date.now().toString(),
			createdAt: new Date().toISOString(),
		};

		setProducts([newProductWithId, ...products]);
		setIsAddProductFormOpen(false);
	};

	// -----------------------------------------
	// -----------------------------------------
	// -----------------------------------------
	return (
		<div className="space-y-6">
			{/* بخش جستجو / فیلتر + دکمه افزودن */}
			<div className="flex items-center justify-between flex-wrap gap-4">
				{/* Search + Filters */}
				<div className="flex items-center gap-4 flex-wrap">
					<ProductSearch value={searchQuery} onChange={handleSearchChange} />

					<ProductFilters
						selectedCategory={selectedCategory}
						onCategoryChange={handleCategoryChange}
						selectedStatus={selectedStatus}
						onStatusChange={handleStatusChange}
					/>
				</div>

				{/* دکمه افزودن محصول */}
				<button
					onClick={openAddProductForm}
					className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
					<span>+</span>
					<span>افزودن محصول</span>
				</button>
			</div>

			{/* جدول محصولات */}
			<ProductTable
				products={paginatedProducts}
				currentPage={currentPage}
				totalPages={totalPages}
				totalProducts={filteredProducts.length}
				onPageChange={handlePageChange}
				onDeleteProduct={openModal}
				onEditProduct={openEditForm}
			/>

			{/* Modal ویرایش */}
			{isEditingFormOpen && editingProduct && (
				<EditProductForm
					product={editingProduct}
					onSave={handleEditProduct}
					onCancel={() => setIsEditingFormOpen(false)}
				/>
			)}

			{/* Modal افزودن محصول */}
			{isAddProductFormOpen && (
				<AddProductForm onSave={handleAddProductForm} onCancel={closeAddProductForm} />
			)}

			{/* Modal تأیید حذف */}
			<ConfirmModal
				isOpen={isOpen}
				title="حذف محصول"
				description="آیا از حذف این محصول مطمئن هستید؟ عملیات بازگشت‌پذیر نیست."
				confirmText="حذف"
				cancelText="لغو"
				onCancel={() => setIsOpen(false)}
				onConfirm={handleConfirmDelete}
			/>
		</div>
	);
}
