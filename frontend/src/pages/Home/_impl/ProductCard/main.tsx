import { useCartStore } from '@/domain/cart/stores';
import { formatCurrency } from '@/core/utils';
import type { Product } from '@/domain/product/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!product.available) return;

    addItem({
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      price: product.price,
    });

    onAddToCart(product);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ⯨
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full">
      <div className="relative">
        {product.discountPercentage && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
            -{product.discountPercentage}%
          </div>
        )}
        <div className="aspect-square bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Imagem do produto</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <p className="text-gray-600 text-xs mb-3 line-clamp-2 flex-1">{product.shortDescription}</p>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-xs text-gray-600 ml-1">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>

        <div className="mb-3">
          {product.originalPrice && (
            <div className="text-gray-400 text-xs line-through">
              {formatCurrency(product.originalPrice)}
            </div>
          )}
          <div className="text-primary-600 font-bold text-xl">{formatCurrency(product.price)}</div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.available}
          className={
            product.available
              ? 'w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm'
              : 'w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed font-medium text-sm'
          }
        >
          {product.available ? 'Adicionar ao Carrinho' : 'Indisponível'}
        </button>
      </div>
    </div>
  );
};
