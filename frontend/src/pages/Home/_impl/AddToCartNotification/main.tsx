import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@/core/utils';
import type { Product } from '@/domain/product/types';

interface AddToCartNotificationProps {
  product: Product;
  onClose: () => void;
}

export const AddToCartNotification = ({ product, onClose }: AddToCartNotificationProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
            <span className="text-gray-400 text-xs">Imagem</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</p>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                ✕
              </button>
            </div>

            <p className="text-primary-600 font-bold text-sm mb-2">
              {formatCurrency(product.price)}
            </p>

            <p className="text-green-600 text-xs font-medium mb-3">✓ Adicionado ao carrinho</p>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 text-xs py-1.5 px-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Continuar comprando
              </button>
              <button
                onClick={() => navigate('/carrinho')}
                className="flex-1 text-xs py-1.5 px-3 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
              >
                Ir ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
