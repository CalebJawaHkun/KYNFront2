import {
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Community First",
    description:
      "People come before popularity. Every interaction should help create a welcoming and supportive neighborhood.",
  },
  {
    icon: MapPinned,
    title: "Local Discovery",
    description:
      "Every neighborhood has its own hidden gems, stories, and businesses waiting to be explored.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Respect",
    description:
      "Healthy communities grow through kindness, transparency, and mutual respect for one another.",
  },
  {
    icon: Sparkles,
    title: "Simple for Everyone",
    description:
      "KYN is designed to be intuitive, accessible, and welcoming for everyone, regardless of technical experience.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            Our Values
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            The principles that guide everything we build.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Every feature, every update, and every community interaction
            is built around these core values.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 transition group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">

                  <Icon size={28} />

                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}