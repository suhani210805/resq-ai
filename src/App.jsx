export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-8 max-w-md text-center shadow-lg shadow-cyan-500/10">
        <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-cyan-500/20">
          System Status: Online
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          RESQ-AI
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Emergency Operations Command Center
        </p>
        <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Tailwind Working Properly
        </button>
      </div>
    </div>
  );
}