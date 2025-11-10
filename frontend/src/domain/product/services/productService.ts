import type { Product, ProductListParams, ProductListResponse } from '../types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Bolo de Chocolate Premium',
    image: '/img/bolos/chocolate-premium.jpg',
    price: 89.9,
    originalPrice: 119.9,
    rating: 4.8,
    reviewCount: 127,
    shortDescription: 'Delicioso bolo de chocolate com cobertura cremosa e recheio de brigadeiro',
    available: true,
    category: 'chocolate',
    discountPercentage: 25,
  },
  {
    id: '2',
    name: 'Bolo Red Velvet',
    image: '/img/bolos/red-velvet.jpg',
    price: 95.0,
    rating: 4.9,
    reviewCount: 89,
    shortDescription: 'Clássico bolo red velvet com cream cheese e toque de cacau',
    available: true,
    category: 'especial',
  },
  {
    id: '3',
    name: 'Bolo de Cenoura com Chocolate',
    image: '/img/bolos/cenoura.jpg',
    price: 65.0,
    originalPrice: 85.0,
    rating: 4.7,
    reviewCount: 203,
    shortDescription: 'Tradicional bolo de cenoura com cobertura de chocolate',
    available: true,
    category: 'tradicional',
    discountPercentage: 24,
  },
  {
    id: '4',
    name: 'Bolo de Morango',
    image: '/img/bolos/morango.jpg',
    price: 79.9,
    rating: 4.6,
    reviewCount: 156,
    shortDescription: 'Bolo de massa branca com recheio e cobertura de morangos frescos',
    available: true,
    category: 'frutas',
  },
  {
    id: '5',
    name: 'Bolo de Limão',
    image: '/img/bolos/limao.jpg',
    price: 72.0,
    rating: 4.5,
    reviewCount: 98,
    shortDescription: 'Refrescante bolo de limão com cobertura de merengue',
    available: true,
    category: 'frutas',
  },
  {
    id: '6',
    name: 'Bolo Floresta Negra',
    image: '/img/bolos/floresta-negra.jpg',
    price: 105.0,
    originalPrice: 135.0,
    rating: 4.9,
    reviewCount: 74,
    shortDescription: 'Sofisticado bolo de chocolate com cerejas e chantilly',
    available: false,
    category: 'especial',
    discountPercentage: 22,
  },
  {
    id: '7',
    name: 'Bolo de Coco',
    image: '/img/bolos/coco.jpg',
    price: 68.0,
    rating: 4.4,
    reviewCount: 112,
    shortDescription: 'Bolo úmido de coco com cobertura de coco ralado',
    available: true,
    category: 'tradicional',
  },
  {
    id: '8',
    name: 'Bolo de Nozes',
    image: '/img/bolos/nozes.jpg',
    price: 92.0,
    rating: 4.7,
    reviewCount: 67,
    shortDescription: 'Bolo especial com nozes e cobertura de caramelo',
    available: true,
    category: 'especial',
  },
  {
    id: '9',
    name: 'Bolo de Banana',
    image: '/img/bolos/banana.jpg',
    price: 58.0,
    rating: 4.3,
    reviewCount: 145,
    shortDescription: 'Bolo caseiro de banana com canela e açúcar',
    available: true,
    category: 'tradicional',
  },
  {
    id: '10',
    name: 'Bolo de Maracujá',
    image: '/img/bolos/maracuja.jpg',
    price: 75.0,
    originalPrice: 95.0,
    rating: 4.8,
    reviewCount: 91,
    shortDescription: 'Bolo tropical de maracujá com cobertura cremosa',
    available: true,
    category: 'frutas',
    discountPercentage: 21,
  },
  {
    id: '11',
    name: 'Bolo de Amendoim',
    image: '/img/bolos/amendoim.jpg',
    price: 70.0,
    rating: 4.6,
    reviewCount: 83,
    shortDescription: 'Bolo cremoso de amendoim com cobertura de chocolate',
    available: true,
    category: 'tradicional',
  },
  {
    id: '12',
    name: 'Bolo Ópera',
    image: '/img/bolos/opera.jpg',
    price: 125.0,
    rating: 5.0,
    reviewCount: 45,
    shortDescription: 'Sofisticado bolo francês com camadas de café e chocolate',
    available: true,
    category: 'especial',
  },
  {
    id: '13',
    name: 'Bolo de Abacaxi',
    image: '/img/bolos/abacaxi.jpg',
    price: 62.0,
    rating: 4.4,
    reviewCount: 128,
    shortDescription: 'Bolo úmido de abacaxi com calda caramelizada',
    available: true,
    category: 'frutas',
  },
  {
    id: '14',
    name: 'Bolo de Pistache',
    image: '/img/bolos/pistache.jpg',
    price: 110.0,
    originalPrice: 145.0,
    rating: 4.9,
    reviewCount: 56,
    shortDescription: 'Exclusivo bolo de pistache com cobertura de chocolate branco',
    available: true,
    category: 'especial',
    discountPercentage: 24,
  },
  {
    id: '15',
    name: 'Bolo de Fubá',
    image: '/img/bolos/fuba.jpg',
    price: 52.0,
    rating: 4.5,
    reviewCount: 167,
    shortDescription: 'Tradicional bolo de fubá cremoso com erva-doce',
    available: true,
    category: 'tradicional',
  },
];

const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price_asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price_desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name_asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name_za':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'relevance':
    default:
      return sorted.sort((a, b) => {
        const scoreA = a.reviewCount * 0.3 + a.rating * 0.7;
        const scoreB = b.reviewCount * 0.3 + b.rating * 0.7;
        return scoreB - scoreA;
      });
  }
};

export const productService = {
  async list(params: ProductListParams = {}): Promise<ProductListResponse> {
    const { page = 1, limit = 12, sortBy = 'relevance', category } = params;

    await new Promise((resolve) => setTimeout(resolve, 300));

    let filteredProducts = [...mockProducts];

    if (category) {
      filteredProducts = filteredProducts.filter((p) => p.category === category);
    }

    const sortedProducts = sortProducts(filteredProducts, sortBy);

    const total = sortedProducts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const products = sortedProducts.slice(startIndex, endIndex);

    return {
      products,
      total,
      page,
      limit,
      totalPages,
    };
  },

  async getById(id: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return mockProducts.find((p) => p.id === id) || null;
  },
};
