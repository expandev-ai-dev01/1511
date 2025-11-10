import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../../services/productService';
import type { UseProductListOptions, UseProductListReturn } from './types';
import type { ProductListParams } from '../../types';

export const useProductList = (options: UseProductListOptions = {}): UseProductListReturn => {
  const { initialParams = {} } = options;

  const [params, setParams] = useState<ProductListParams>({
    page: initialParams.page || 1,
    limit: initialParams.limit || 12,
    sortBy: initialParams.sortBy || 'relevance',
    category: initialParams.category,
  });

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['products', params],
    queryFn: () => productService.list(params),
    staleTime: 2 * 60 * 1000,
  });

  const setPage = (page: number) => {
    setParams((prev) => ({ ...prev, page }));
  };

  const setLimit = (limit: number) => {
    setParams((prev) => ({ ...prev, limit, page: 1 }));
  };

  const setSortBy = (sortBy: ProductListParams['sortBy']) => {
    setParams((prev) => ({ ...prev, sortBy, page: 1 }));
  };

  return {
    products: data?.products || [],
    total: data?.total || 0,
    page: data?.page || 1,
    limit: data?.limit || 12,
    totalPages: data?.totalPages || 0,
    isLoading,
    error: error as Error | null,
    setPage,
    setLimit,
    setSortBy,
    refetch,
  };
};
