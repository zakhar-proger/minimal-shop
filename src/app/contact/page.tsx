export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Контакты</h1>
      <p className="mb-4">
        Свяжитесь с нами по любым вопросам или предложениям:
      </p>

      <ul className="mb-4 space-y-2">
        <li>
          <strong>Email:</strong> support@minimalshop.com
        </li>
        <li>
          <strong>Телефон:</strong> +7 (999) 123-45-67
        </li>
        <li>
          <strong>Адрес:</strong> г. Москва, ул. Примерная, д. 10
        </li>
      </ul>

      <p>Мы работаем с понедельника по пятницу с 9:00 до 18:00.</p>
    </main>
  );
}
