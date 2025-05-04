export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-4">Компания</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Карьера
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Блог
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Помощь</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Контакты
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Доставка и возврат
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Подписка</h3>
          <p className="mb-4 text-sm">
            Подпишитесь на нашу рассылку, чтобы получить эксклюзивные
            предложения.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-4 py-2 rounded-l border-gray-600 focus:outline-none"
            />
            <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r text-white">
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 Minimal Shop. Все права защищены.
      </div>
    </footer>
  );
}
