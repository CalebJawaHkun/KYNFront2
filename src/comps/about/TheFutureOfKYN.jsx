import {
  Map,
  Megaphone,
  HandHeart,
  Star,
  ArrowRight,
} from "lucide-react";

const roadmap = [
  {
    icon: Map,
    title: "Community Maps",
    description:
      "Discover more local places through community-contributed locations and neighborhood guides.",
  },
  {
    icon: Megaphone,
    title: "Local Bulletin Boards",
    description:
      "Stay informed with neighborhood announcements, events, and community updates.",
  },
  {
    icon: HandHeart,
    title: "Volunteer Initiatives",
    description:
      "Support local causes and participate in projects that make a positive impact.",
  },
  {
    icon: Star,
    title: "Trusted Recommendations",
    description:
      "Share and discover trusted recommendations from people who know the area best.",
  },
];

export default function TheFuture() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            The Future of KYN
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            We're only getting started.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Our vision extends beyond discovering places. We want to help
            neighborhoods become more connected, informed, and empowered
            through technology that brings people together.
          </p>

        </div>

        {/* Roadmap */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {roadmap.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 transition group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing CTA */}

        <div className="mt-20 rounded-[2rem] bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-14 text-center text-white shadow-2xl">

          <h3 className="text-3xl font-bold">
            Be Part of the Journey
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-50">
            KYN is growing with its community. Join us as we build a
            platform that helps people discover, connect, and belong.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 transition duration-300 hover:scale-105 hover:bg-slate-100">
            Join KYN
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}