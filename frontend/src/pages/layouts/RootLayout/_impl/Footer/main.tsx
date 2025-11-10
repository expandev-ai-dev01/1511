export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Catálogo de Bolos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
