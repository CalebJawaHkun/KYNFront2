import { HeartHandshake, Pin, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Community First",
    description:
      "We believe strong neighborhoods begin with meaningful connections between the people who live there.",
  },
  {
    icon: Pin,
    title: "Local Discovery",
    description:
      "From hidden cafés to nearby parks, KYN helps you uncover the places that make your neighborhood unique.",
  },
  {
    icon: ShieldCheck,
    title: "Built on Trust",
    description:
      "We're creating a welcoming platform where neighbors can share, explore, and connect with confidence.",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            About KYN
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Bringing neighborhoods closer, one connection at a time.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            <strong>KYN</strong> (Know Your Neighborhood) is a
            community-driven platform that helps people discover local
            places, connect with nearby communities, and support the
            businesses and stories that make every neighborhood unique.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Whether you've just moved in or have lived there for years,
            KYN makes it easier to explore your surroundings and feel
            connected to the people around you.
          </p>

        </div>

        {/* Right */}

        <div className="space-y-6">

          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
              >

                <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

                  <Icon size={24} />

                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}