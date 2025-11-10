import { ProductCatalog } from './_impl/ProductCatalog';

export const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ProductCatalog />
    </div>
  );
};

export default HomePage;
