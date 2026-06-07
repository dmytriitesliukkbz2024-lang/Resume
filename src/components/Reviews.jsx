import { useState, useEffect } from 'react';

export default function Reviews() {
  // Використовуємо useState для збереження списку отриманих коментарів
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Використовуємо useEffect, щоб отримати дані з API для варіанту 23
    fetch('https://typicode.com')
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => {
        // Резервні дані на випадок збою мережі
        const backupData = [
          { id: 1, name: "Олександр (Логістика)", email: "alex@logistics.ua", body: "Дмитро — надзвичайно відповідальний водій. Усі доставки виконувалися вчасно." },
          { id: 2, name: "Ігор (Директор ТОВ)", email: "igor.boss@cargo.com", body: "Чудовий фахівець, відмінно володіє транспортними засобами. Рекомендую!" }
        ];
        setComments(backupData);
        setLoading(false);
      });
  }, []); // Порожній масив — запит виконується 1 раз при монтуванні

  if (loading) return <p className="text-center text-slate-500 my-4 animate-pulse">Завантаження відгуків...</p>;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-3">
        <span className="p-2 bg-indigo-600 text-white rounded-xl text-lg shadow-md">💬</span>
        Відгуки попередніх роботодавців
      </h2>

      {/* Відрендеріть коментарі, використовуючи метод .map() */}
      <div className="space-y-3 pl-2">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all hover:scale-[1.01]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 capitalize">{comment.name}</h4>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium font-mono">{comment.email}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">"{comment.body}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
