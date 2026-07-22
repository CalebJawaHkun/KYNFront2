import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function TermsAndBottom({ isSignIn }) {
  return (
    <>
      {/* TERMS */}
      {!isSignIn && (
        <p className="mt-8 text-center text-sm leading-6 text-slate-500">
          By creating an account you agree to our{" "}
          <span className="cursor-pointer font-semibold text-emerald-500 hover:underline">
            Terms
          </span>{" "}
          and{" "}
          <span className="cursor-pointer font-semibold text-emerald-500 hover:underline">
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
          {isSignIn ? "Create one for free" : "Sign In"}

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </>
  );
}