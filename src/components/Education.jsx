export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
        <span className="p-2 bg-indigo-600 text-white rounded-xl text-lg shadow-md shadow-indigo-200">🛡️</span>
        Освіта
      </h2>
      
      <div className="p-5 border-l-4 border-indigo-600 bg-slate-50/50 rounded-r-2xl pl-6 transition-all hover:bg-slate-50">
        <h3 className="text-xl font-extrabold text-slate-800">
          Національний Університет "Львівська Політехніка"
        </h3>
        <p className="text-indigo-600 font-medium mt-1 text-base">
          Спеціальність: Кібербезпека та захист інформації
        </p>
        <div className="inline-block mt-3 bg-slate-200/70 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">
          🗓️ Період навчання: 2023 - 2027
        </div>
      </div>
    </section>
  );
}

