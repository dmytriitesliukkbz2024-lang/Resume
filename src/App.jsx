import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  // Створіть змінну стану theme (ініціалізація з localStorage або за часом)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Автоматичне перемикання: якщо між 07:00 та 21:00 -> 'light', інакше -> 'dark'
    const currentHour = new Date().getHours();
    return currentHour >= 7 && currentHour < 21 ? 'light' : 'dark';
  });

  // Синхронізуємо тему з localStorage при кожній зміні стану
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Створюємо зручну змінну для швидкої перевірки
  const isDark = theme === 'dark';

  return (
    // Застосування стилів: використовуємо стан theme, щоб застосувати клас до головної обгортки
    <div className={`min-h-screen py-12 px-4 sm:px-6 flex justify-center items-center font-sans tracking-wide transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
      
      {/* Ручне перемикання: Додайте кнопку для ручного перемикання між режимами */}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="fixed top-4 right-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 text-sm font-semibold cursor-pointer transition-all active:scale-95 z-50 hover:bg-slate-50"
      >
        {isDark ? '☀️ Світла тема' : '🌙 Темна тема'}
      </button>

      {/* Головний контейнер резюме */}
      <div className={`max-w-3xl w-full p-10 rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-200/60 text-slate-800'}`}>
        
        <div className={isDark ? 'dark-theme-text text-slate-300' : ''}>
          <Header />
          <Experience />
          <Education />
          <Reviews />
          <Footer />
        </div>

      </div>

      <ContactForm />
    </div>
  );
}

export default App;


