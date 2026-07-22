import { Link } from "react-router";
import { ArrowRight, LoaderCircle, LockKeyhole } from "lucide-react";
import useAuthContext from "../comps/contexts/AuthContext";

export default function ProtectedRoute({ children }) {
    const { authDat, loading } = useAuthContext();
    const isLoggedIn = Boolean(authDat?.loggedIn);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20 dark:bg-slate-950">
                <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <LoaderCircle className="h-7 w-7 animate-spin" />
                    </div>
                    <h2 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
                        Checking access
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300">
                        We&apos;re verifying your session so you can continue safely.
                    </p>
                </div>
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20 dark:bg-slate-950">
                <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                        <LockKeyhole className="h-7 w-7" />
                    </div>
                    <h2 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
                        Access restricted
                    </h2>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                        Please sign in to view this protected area.
                    </p>
                    <Link
                        to="/signin"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                    >
                        Go to sign in
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        );
    }

    return children;
}