// LeftCard.jsx

import Stat from "./Stat";

export default function LeftCard() {
  return (
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
  );
}