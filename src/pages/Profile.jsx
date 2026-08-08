import useAuthContext from "../comps/contexts/AuthContext";
import { useEffect, useState } from "react";
import useAuth from "../lib/useAuth";
import { ShieldCheck, Mail, Hash, LogOut } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

export default function Profile() {
    const { authDat, setLoading, setStatus, loading } = useAuthContext();
    const {onLogout} = useAuth()
    const {
        userId,
        username,
        email,
        picture,
        authType,
    } = authDat.clientData;

    const verificationBadge = {
        google: "Verified Google Account",
        github: "Verified GitHub Account",
        discord: "Verified Discord Account",
        local: "Verified Local Account",
    }[authType] || null;

    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = async () => {
        if (loggingOut) return;

        setLoggingOut(true);
        setLoading(true);

        try {
            await onLogout();

            toast.success("Logged out successfully.");

            // await setStatus();
        }
        catch (err) {
            console.error(err);

            toast.error(err.message || "Unable to logout.");
        }
        finally {
            setLoading(false);
            setLoggingOut(false);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">

            <div className="mx-auto max-w-6xl px-6 py-20">

                {/* HERO */}

                <div className="text-center">

                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

                        My Profile

                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold text-slate-900 dark:text-white">

                        Welcome back,

                        <span className="block text-emerald-500">

                            {username}

                        </span>

                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">

                        Manage your account information and your Google
                        authentication.

                    </p>

                </div>

                {/* PROFILE CARD */}
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">

                    <div className="flex flex-col items-center">

                        {picture ? (
                            <img
                                src={picture}
                                alt={username}
                                referrerPolicy="no-referrer"
                                className="h-32 w-32 rounded-full border-4 border-emerald-500 object-cover shadow-lg"
                            />
                        ) : (
                            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-emerald-500 bg-emerald-100 text-4xl font-bold text-emerald-700 shadow-lg dark:bg-emerald-900/30 dark:text-emerald-300">
                                {username?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                        )}

                        <h2 className="mt-6 text-3xl font-bold dark:text-white">

                            {username}

                        </h2>

                        <p className="mt-2 text-slate-500 dark:text-slate-400">

                            {email}

                        </p>

                        {verificationBadge && (

                            <div className="mt-6 flex items-center gap-3 rounded-full bg-emerald-100 px-5 py-2 dark:bg-emerald-900/30">

                                {authType === "google" ? (
                                    <FcGoogle size={22} />
                                ) : (
                                    <ShieldCheck size={20} className="text-emerald-600 dark:text-emerald-400" />
                                )}

                                <span className="font-medium text-emerald-700 dark:text-emerald-300">

                                    {verificationBadge}

                                </span>

                            </div>

                        )}

                    </div>

                </div>


                {/* ACCOUNT INFORMATION */}

                <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">

                    <h2 className="mb-8 text-2xl font-bold dark:text-white">

                        Account Information

                    </h2>

                    <InfoRow
                        icon={<Hash size={20} />}
                        title="User ID"
                        value={userId}
                    />

                    <InfoRow
                        icon={<ShieldCheck size={20} />}
                        title="Username"
                        value={username}
                    />

                    <InfoRow
                        icon={<Mail size={20} />}
                        title="Email Address"
                        value={email}
                    />

                </div>

                {/* DANGER ZONE */}

                <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30">

                    <h2 className="text-2xl font-bold text-red-600">

                        Danger Zone

                    </h2>

                    <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">

                        Logging out removes your current authenticated
                        session from this device. You can sign back in
                        anytime using your Google account.

                    </p>

                    <button
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="mt-8 flex items-center gap-3 rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <LogOut size={20} />

                        {loggingOut
                            ? "Logging Out..."
                            : "Logout"}

                    </button>

                </div>

            </div>

        </section>
    );
}

function InfoRow({
    icon,
    title,
    value,
}) {
    return (
        <div className="flex items-center justify-between border-b border-slate-200 py-5 last:border-none dark:border-slate-800">

            <div className="flex items-center gap-4">

                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

                    {icon}

                </div>

                <p className="font-semibold dark:text-white">

                    {title}

                </p>

            </div>

            <p className="max-w-sm truncate text-right text-slate-500 dark:text-slate-400">

                {value}

            </p>

        </div>
    );
}