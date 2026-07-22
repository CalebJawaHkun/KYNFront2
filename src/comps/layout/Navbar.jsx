import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuthContext from "../contexts/AuthContext";
import {
    Menu,
    X,
    Moon,
    Sun,
    UserCircle2,
    MapPinned,
    LogIn,
    UserPlus,
    UserRound
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const {authDat} = useAuthContext()
    const isLoggedIn = useMemo(() => Boolean(authDat?.loggedIn), [authDat]);

    useEffect(() => console.log('User Logged In: ', isLoggedIn), [isLoggedIn])

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setDark(!dark);
        console.log('Triggered')
    };

    const nav = useNavigate()
    const toProfile = () => {
        console.log('To Profile Triggered!')
        nav('/profile')
    }
    const toggleDropDown = () => setProfileOpen((prev) => !prev)

    const navItems = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about-us",
        },
        {
            title: "Contact",
            path: "/contact-us",
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm shadow-slate-200/60 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-black/20">

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}

                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <MapPinned
                        size={22}
                        className="text-emerald-500"
                    />

                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                        KYN
                    </span>
                </Link>

                {/* Desktop Nav */}

                <nav className="hidden items-center gap-2 md:flex">

                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                                ${
                                    isActive
                                        ? "text-white"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                                            isActive
                                                ? "bg-emerald-500 shadow-sm"
                                                : "bg-transparent"
                                        }`}
                                    />
                                    <span className="relative z-10">{item.title}</span>
                                </>
                            )}
                        </NavLink>
                    ))}

                </nav>

                {/* Right */}

                <div className="hidden items-center gap-3 md:flex">

                    <button
                        onClick={toggleTheme}
                        className="rounded-full p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                        {dark ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={toggleDropDown}
                            className="rounded-full p-1 transition hover:scale-105"
                            aria-expanded={profileOpen}
                            aria-haspopup="menu"
                        >
                            <UserCircle2
                                size={34}
                                className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                            />
                        </button>

                        <div
                            className={`absolute right-0 top-full mt-3 w-56 origin-top-right overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-xl shadow-slate-200/70 backdrop-blur transition-all duration-200 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-black/30 ${profileOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
                        >
                            {!isLoggedIn ? 
                            <>
                                <Link
                                    to="/signin"
                                    onClick={() => setProfileOpen(false)}
                                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                                >
                                    <LogIn size={16} />
                                    Sign In
                                </Link>

                                <Link
                                    to="/signup"
                                    onClick={() => setProfileOpen(false)}
                                    className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                                >
                                    <UserPlus size={16} />
                                    Sign Up
                                </Link>
                            </> : <Link
                                to="/profile"
                                onClick={() => setProfileOpen(false)}
                                className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                            >
                                <UserRound size={16} />
                                Profile
                            </Link>}

                            
                        </div>
                    </div>

                </div>

                {/* Mobile */}

                <div className="flex items-center gap-2 md:hidden">

                    <button
                        onClick={toggleTheme}
                        className="rounded-full p-2 text-slate-700 dark:text-slate-300"
                    >
                        {dark ? (
                            <Sun />
                        ) : (
                            <Moon />
                        )}
                    </button>

                    <button
                        onClick={() =>
                            setMobileOpen(!mobileOpen)
                        }
                        className="rounded-full p-2 text-slate-700 dark:text-slate-300"
                    >
                        {mobileOpen ? (
                            <X />
                        ) : (
                            <Menu />
                        )}
                    </button>

                </div>

            </div>

            {/* Mobile Drawer */}

            {mobileOpen && (

                <div className="border-t border-slate-200 bg-white px-6 py-5 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 md:hidden">

                    <div className="flex flex-col gap-2">

                        {navItems.map((item) => (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() =>
                                    setMobileOpen(false)
                                }
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 transition
                                    ${
                                        isActive
                                            ? "bg-emerald-500 text-white"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>

                        ))}

                        <div className="my-2 border-t dark:border-slate-800" />

                        {isLoggedIn ? 
                        <NavLink
                                to="/profile"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 text-left transition ${
                                        isActive
                                            ? "bg-emerald-500 text-white"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                    }`
                                }
                            >
                                Profile
                            </NavLink> 
                        :
                        <>
                            <NavLink
                                to="/signin"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 text-left transition ${
                                        isActive
                                            ? "bg-emerald-500 text-white"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                    }`
                                }
                            >
                                Sign In
                            </NavLink>

                            <NavLink
                                to="/signup"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 text-left transition ${
                                        isActive
                                            ? "bg-emerald-500 text-white"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                    }`
                                }
                            >
                                Sign Up
                            </NavLink>
                        </>}

                    </div>

                </div>

            )}

        </header>
    );
}