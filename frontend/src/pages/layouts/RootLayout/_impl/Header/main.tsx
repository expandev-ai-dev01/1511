import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Catálogo de Bolos
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Catálogo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
