export default function TopNav({ activePage, setActivePage }) {
  const navItem = (id, label) => (
    <button
      onClick={() => setActivePage(id)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          activePage === id
            ? "bg-slate-800 text-white"
            : "text-slate-700 hover:bg-slate-200"
        }`}
    >
      {label}
    </button>
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-800">
          Future Income Planner
        </h1>

        <nav className="flex gap-2">
          {navItem("agent", "Agent Info")}
          {navItem("calculator", "Calculator")}
          {navItem("plans", "Plans")}
        </nav>
      </div>
    </header>
  );
}
