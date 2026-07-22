import {
  Users,
  Pin,
  CalendarDays,
  Store,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    title: "Community Members",
    desc: "Growing every day",
  },
  {
    icon: Pin,
    value: "500+",
    title: "Local Places",
    desc: "Hidden gems & landmarks",
  },
  {
    icon: CalendarDays,
    value: "120+",
    title: "Community Events",
    desc: "Shared by neighbors",
  },
  {
    icon: Store,
    value: "250+",
    title: "Local Businesses",
    desc: "Supporting local growth",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >

                <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">

                  <Icon size={24} />

                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">

                  {stat.value}

                </h2>

                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">

                  {stat.title}

                </h3>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">

                  {stat.desc}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}