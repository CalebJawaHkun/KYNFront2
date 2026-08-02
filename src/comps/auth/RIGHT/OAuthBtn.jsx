import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaDiscord } from "react-icons/fa";

const providerStyles = {
  google: {
    icon: <FcGoogle className="h-5 w-5" />,
    label: "Continue with Google",
    classes:
      "border-slate-300 bg-white text-slate-800 hover:border-emerald-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900",
  },
  github: {
    icon: <FaGithub className="h-5 w-5 text-white" />,
    label: "Continue with GitHub",
    classes:
      "border-slate-300 bg-slate-900 text-white hover:border-slate-700 hover:bg-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700",
  },
  discord: {
    icon: <FaDiscord className="h-5 w-5 text-[#5865F2]" />,
    label: "Continue with Discord",
    classes:
      "border-[#5865F2]/30 bg-[#5865F2]/10 text-slate-900 hover:border-[#5865F2] hover:bg-[#5865F2]/20 dark:text-white dark:bg-[#5865F2]/20 dark:hover:bg-[#5865F2]/30",
  },
};

export default function OAuthBtn({
  loading,
  toOAuth,
  provider = "google",
}) {
  const style = providerStyles[provider] ?? providerStyles.google;

  return (
    <button
      type="button"
      onClick={() => toOAuth?.(provider)}
      disabled={loading}
      className={`
        mt-4
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        px-6
        py-4
        font-semibold
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-xl
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${style.classes}
      `}
    >
      {style.icon}
      {style.label}
    </button>
  );
}