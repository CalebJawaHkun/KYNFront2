import { Link, useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../lib/useAuth'
import useAuthContext from "../contexts/AuthContext";
import { useState } from "react";
import Input from "./RIGHT/Input";

export default function AuthLayout({ mode = "signin" }) {
  const isSignIn = mode === "signin";
  const { toOAuth, onSignup, onSignin} = useAuth()
  const navigate = useNavigate()
  const {loading} = useAuthContext()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!form.email.trim())
      return toast.error("Email is required.");

    if (!/\S+@\S+\.\S+/.test(form.email))
      return toast.error("Please enter a valid email.");

    if (!isSignIn && !form.username.trim())
      return toast.error("Username is required.");

    if (!form.password.trim())
      return toast.error("Password is required.");

    if (form.password.length < 6)
      return toast.error("Password must be at least 6 characters.");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = isSignIn
      ? {
          email: form.email,
          password: form.password,
        }
      : {
          username: form.username,
          email: form.email,
          password: form.password,
        };

    try {
      await (isSignIn
        ? onSignin(payload)
        : onSignup(payload));

      toast.success(
        isSignIn
          ? "Welcome back!"
          : "Account created successfully!"
      );

      navigate("/");
    } catch {
      // toast.promise already handles errors
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">

      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-10 lg:grid-cols-2">

        {/* LEFT */}

        <div className="hidden lg:block">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            Know Your Neighborhood
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Discover your
            <span className="block text-emerald-500">
              local community.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
            Connect with neighbors, discover hidden gems,
            support local businesses, and help build
            stronger communities.
          </p>

          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop"
            alt="Neighborhood"
            className="mt-10 rounded-3xl shadow-2xl"
          />

          <div className="mt-8 grid grid-cols-3 gap-4">

            <Stat
              title="Explore"
              value="Local Places"
            />

            <Stat
              title="Connect"
              value="Neighbors"
            />

            <Stat
              title="Support"
              value="Community"
            />

          </div>

        </div>

      {/* RIGHT */}

        <div className="mx-auto w-full max-w-md">

          <div
            className="
              rounded-3xl
              border
              border-white/40
              bg-white/90
              p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              dark:border-slate-700/60
              dark:bg-slate-900/80
            "
          >

            {/* Header */}

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">

              {isSignIn
                ? "Welcome Back 👋"
                : "Join KYN 🌿"}

            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">

              {isSignIn
                ? "Sign in with Google or your email to continue exploring your community."
                : "Create your account with Google or email and start connecting with your neighborhood."}

            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

              <div className="h-2 w-2 rounded-full bg-emerald-500" />

              Protected with secure authentication.

            </div>

            {/* GOOGLE */}

            <button
              onClick={toOAuth}
              disabled={loading}
              className="
                mt-8
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-6
                py-4
                font-semibold
                text-slate-800
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-emerald-400
                hover:bg-slate-50
                hover:shadow-xl
                disabled:cursor-not-allowed
                disabled:opacity-60
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
                dark:hover:bg-slate-900
              "
            >
              <FcGoogle className="h-5 w-5" />

              Continue with Google

            </button>

            {/* Divider */}

            <div className="my-8 flex items-center">

              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

              <span
                className="
                  px-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-slate-400
                "
              >
                OR
              </span>

              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

            </div>

            {/* MANUAL AUTH FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {!isSignIn && (

                <Input
                  label="Username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  disabled={loading}
                />

              )}

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />

              <Input
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                disabled={loading}
              />

              {isSignIn && (

                <div className="flex justify-end">

                  <button
                    type="button"
                    className="
                      text-sm
                      font-medium
                      text-emerald-500
                      transition
                      hover:text-emerald-600
                    "
                  >
                    Forgot password?
                  </button>

                </div>

              )}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-emerald-500
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-emerald-600
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {loading
                  ? "Please wait..."
                  : isSignIn
                    ? "Sign In"
                    : "Create Account"}

                {!loading && (

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />

                )}

              </button>

            </form>

            {/* TERMS */}

            {!isSignIn && (

              <p className="mt-8 text-center text-sm leading-6 text-slate-500">

                By creating an account you agree to our{" "}

                <span className="font-semibold text-emerald-500 hover:underline cursor-pointer">

                  Terms

                </span>

                {" "}and{" "}

                <span className="font-semibold text-emerald-500 hover:underline cursor-pointer">

                  Privacy Policy

                </span>

              </p>

            )}

            {/* Bottom */}

            <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-700">

              <p className="text-center text-slate-600 dark:text-slate-400">

                {isSignIn
                  ? "Don't have an account?"
                  : "Already have an account?"}

              </p>

              <Link
                to={isSignIn ? "/signup" : "/signin"}
                className="
                  group
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-semibold
                  text-emerald-500
                  transition
                  hover:text-emerald-600
                "
              >

                {isSignIn
                  ? "Create one for free"
                  : "Sign In"}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-lg dark:bg-slate-900">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-1 font-bold text-slate-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
}