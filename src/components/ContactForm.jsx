import { useState, useEffect } from 'react';

export default function ContactForm() {
  // Створіть змінну стану isOpen (початково false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Використовуйте useEffect з setTimeout, щоб встановити isOpen в true через 1 хвилину
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 60000 мс = 1 хвилина

    return () => clearTimeout(timer); // Очищення таймера при розмонтуванні
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100 dark:border-slate-700 relative animate-scale-up">
        
        {/* Додайте кнопку "Закрити" в модальне вікно, щоб встановити isOpen назад в false */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl font-bold p-1 cursor-pointer"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
          ✉️ Зворотній зв'язок
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Залиште ваші контакти, і я зв'яжуся з вами найближчим часом.</p>

        {/* Реалізація форми: стандартний тег <form> з action та method="POST" */}
        <form action="https://formspree.io" method="POST" className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Ім'я</label>
            <input type="text" name="name" required className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Номер телефону</label>
            <input type="tel" name="phone" required className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">Повідомлення</label>
            <textarea name="message" rows="3" required className="w-full px-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 resize-none"></textarea>
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl text-sm shadow-sm transition-all active:scale-98 mt-2 cursor-pointer">
            Відправити
          </button>
        </form>

      </div>
    </div>
  );
}
