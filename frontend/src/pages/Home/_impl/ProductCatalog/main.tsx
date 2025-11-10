import { useState } from 'react';
import { useProductList } from '@/domain/product/hooks/useProductList';
import { ProductGrid } from '../ProductGrid';
import { ProductControls } from '../ProductControls';
import { Pagination } from '../Pagination';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { AddToCartNotification } from '../AddToCartNotification';
import type { Product } from '@/domain/product/types';

export const ProductCatalog = () => {
  const {
    products,
    total,
    page,
    limit,
    totalPages,
    isLoading,
    error,
    setPage,
    setLimit,
    setSortBy,
  } = useProductList();

  const [notificationProduct, setNotificationProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setNotificationProduct(product);
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800 font-medium">Erro ao carregar produtos</p>
          <p className="text-red-600 text-sm mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Catálogo de Bolos</h1>
        <p className="text-gray-600">{total} produtos encontrados</p>
      </div>

      <ProductControls currentLimit={limit} onLimitChange={setLimit} onSortChange={setSortBy} />

      {isLoading ? (
        <div className="py-16">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <>
          <ProductGrid products={products} onAddToCart={handleAddToCart} />

          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          )}
        </>
      )}

      {notificationProduct && (
        <AddToCartNotification
          product={notificationProduct}
          onClose={() => setNotificationProduct(null)}
        />
      )}
    </div>
  );
};
