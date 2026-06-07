export default function Header() {
  return (
    <header className="text-center border-b-2 border-dashed border-slate-100 pb-8 mb-8">
      <h1 className="text-4xl font-black text-slate-800 tracking-tight uppercase">
        Теслюк Дмитрій
      </h1>
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        <span className="bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
          🚌 Водій автотранспортних засобів
        </span>
        <span className="bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-emerald-100 shadow-sm">
          🎓 Студент ЛП
        </span>
      </div>
    </header>
  );
}       
         