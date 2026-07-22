import { Link } from "react-router";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20 dark:bg-slate-950">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Compass size={28} />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
          404 Error
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-300">
          The page you’re looking for may have moved, been removed, or never existed.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          <ArrowLeft size={18} />
          Go back home
        </Link>
      </div>
    </div>
  );
}