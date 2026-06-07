export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
        <span className="p-2 bg-indigo-600 text-white rounded-xl text-lg shadow-md shadow-indigo-200">💼</span>
        Досвід роботи та навички
      </h2>
      
      <div className="space-y-4 pl-2">
        {/* Картка досвіду */}
        <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 transition-all hover:bg-slate-50 hover:scale-[1.01] hover:border-indigo-200">
          <p className="text-sm font-bold text-indigo-600 mb-1">2015 — НИНІ</p>
          <h3 className="text-lg font-bold text-slate-800">Водій автотранспортних засобів</h3>
          <p className="text-slate-600 mt-1">Якісна та вчасна доставка готової продукції, а також логістика сировини.</p>
        </div>

        {/* Картка навичок */}
        <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 transition-all hover:bg-slate-50 hover:scale-[1.01] hover:border-emerald-200">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-1.5">
            ⚡ Ключові навички
          </h3>
          <p className="text-slate-600 mt-1">
            Професійне володіння та керування <span className="font-semibold text-slate-800">всіма видами наземних транспортних засобів</span>. Високий рівень відповідальності та стресостійкості.
          </p>
        </div>
      </div>
    </section>
  );
}
