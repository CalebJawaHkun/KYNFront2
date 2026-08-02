// OAuthButton.jsx

import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ loading, toOAuth }) {
  return (
    <button
      type="button"
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
  );
}