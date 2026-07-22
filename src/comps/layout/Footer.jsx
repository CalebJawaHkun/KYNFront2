import { Link } from "react-router";

import {
    Globe, Map, Pin
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white/95 text-slate-700 shadow-inner shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-300 dark:shadow-black/20">

            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">

                {/* Brand */}

                <div>

                    <div className="mb-3 flex items-center gap-2">

                        <Pin
                            className="text-emerald-500"
                        />

                        <span className="text-xl font-bold text-slate-900 dark:text-white">
                            KYN
                        </span>

                    </div>

                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Know Your Neighborhood.
                        Discover nearby places,
                        connect with people,
                        and build stronger communities.
                    </p>

                </div>

                {/* Links */}

                <div>

                    <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                        Explore
                    </h3>

                    <div className="space-y-2">

                        <Link to="/" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400">Home</Link><br />

                        <Link to="/about-us" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400">
                            About
                        </Link><br />

                        <Link to="/contact-us" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400">
                            Contact
                        </Link>

                    </div>

                </div>

                {/* Resources */}

                <div>

                    <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                        Resources
                    </h3>

                    <div className="space-y-2">

                        <p className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400">Privacy Policy</p>

                        <p className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400">Terms of Service</p>

                        <p className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400">Support</p>

                    </div>

                </div>

                {/* Social */}

                <div>

                    <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                        Follow
                    </h3>

                    <div className="flex gap-4">

                        <Globe className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400" />
                        <Map className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400" />

                    </div>

                </div>

            </div>

            <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">

                © {new Date().getFullYear()} KYN • Built for stronger local communities.

            </div>

        </footer>
    );
}