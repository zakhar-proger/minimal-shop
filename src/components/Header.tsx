import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo  */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">MINIMAL</span>
            <span className="text-2xl font-bold text-secondary-700">SHOP</span>
          </Link>

          {/* Desktop Navigation  */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-secondary-700 hover:text-primary-600 font-medium"
            >
              Главная
            </Link>
            <a
              href="/catalog"
              className="text-secondary-700 hover:text-primary-600 font-medium"
            >
              Каталог
            </a>
            <Link
              href="/about"
              className="text-secondary-700 hover:text-primary-600 font-medium"
            >
              О нас
            </Link>
            <Link
              href="/contact"
              className="text-secondary-700 hover:text-primary-600 font-medium"
            >
              Контакты
            </Link>
          </nav>

          {/* Icons  */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-secondary-700 hover:text-primary-600">
              <i className="fas fa-search text-lg"></i>
            </button>
            <button className="p-2 text-secondary-700 hover:text-primary-600 relative">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-secondary-700 hover:text-primary-600">
              <i className="fas fa-user text-lg"></i>
            </button>
            <button className="md:hidden p-2 text-secondary-700">
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className="mobile-menu md:hidden bg-white">
          <div className="flex flex-col space-y-3 py-3">
            <Link
              href="/"
              className="block py-2 px-4 text-secondary-700 hover:bg-gray-100 rounded"
            >
              Главная
            </Link>
            <Link
              href="/catalog"
              className="block py-2 px-4 text-secondary-700 hover:bg-gray-100 rounded"
            >
              Каталог
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 text-secondary-700 hover:bg-gray-100 rounded"
            >
              О нас
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-4 text-secondary-700 hover:bg-gray-100 rounded"
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
