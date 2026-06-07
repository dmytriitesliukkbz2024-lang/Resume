import { useState, useEffect } from 'react';

export default function Footer() {
  const [browserInfo, setBrowserInfo] = useState('');
  const [platformInfo, setPlatformInfo] = useState('');

  useEffect(() => {
    // 1. Зчитуємо дані з navigator під час монтування компонента
    const userAgentData = navigator.userAgent;
    const platformData = navigator.platform || 'Невідома платформа';
    
    // 2. Зберігаємо ці дані в localStorage всередині ефекту
    localStorage.setItem('system_browser', userAgentData);
    localStorage.setItem('system_platform', platformData);

    // 3. Отримуємо дані з localStorage для відображення в стані React
    const savedBrowser = localStorage.getItem('system_browser');
    const savedPlatform = localStorage.getItem('system_platform');
    
    setBrowserInfo(savedBrowser);
    setPlatformInfo(savedPlatform);
  }, []); // Порожній масив гарантує виконання лише 1 раз при монтуванні

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 pt-6 mt-8 text-center text-sm text-slate-500">
      <p className="text-xs text-slate-400 dark:text-slate-500 font-normal mb-4">
        &copy; {new Date().getFullYear()} Теслюк Дмитрій. Усі права захищені.
      </p>

      {/* Блок відображення даних із localStorage */}
      {(browserInfo || platformInfo) && (
        <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 max-w-xl mx-auto break-all font-mono text-left space-y-1">
          <span className="font-semibold text-slate-600 dark:text-slate-400 block mb-2 text-center text-xs">
            💻 Системна інформація (з localStorage):
          </span>
          <p>
            <strong className="text-slate-500 dark:text-slate-400">Платформа ОС:</strong> {platformInfo}
          </p>
          <p>
            <strong className="text-slate-500 dark:text-slate-400">Браузер (UserAgent):</strong> {browserInfo}
          </p>
        </div>
      )}
    </footer>
  );
}
