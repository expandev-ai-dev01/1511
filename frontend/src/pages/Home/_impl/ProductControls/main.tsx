import type { ProductListParams } from '@/domain/product/types';

interface ProductControlsProps {
  currentLimit: number;
  onLimitChange: (limit: number) => void;
  onSortChange: (sortBy: ProductListParams['sortBy']) => void;
}

export const ProductControls = ({
  currentLimit,
  onLimitChange,
  onSortChange,
}: ProductControlsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Ordenar por:
          </label>
          <select
            id="sort"
            onChange={(e) => onSortChange(e.target.value as ProductListParams['sortBy'])}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="relevance">Relevância</option>
            <option value="price_asc">Menor Preço</option>
            <option value="price_desc">Maior Preço</option>
            <option value="name_asc">Nome (A-Z)</option>
            <option value="name_za">Nome (Z-A)</option>
            <option value="rating">Melhor Avaliação</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="limit" className="text-sm font-medium text-gray-700">
            Itens por página:
          </label>
          <select
            id="limit"
            value={currentLimit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
    </div>
  );
};
