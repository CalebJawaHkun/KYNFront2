import {
  Heart,
  Handshake,
  Store,
  Trees,
} from "lucide-react";

const beliefs = [
  {
    icon: Heart,
    title: "Every Neighborhood Has a Story",
    description:
      "Behind every street and every corner are people, traditions, and experiences worth discovering.",
  },
  {
    icon: Handshake,
    title: "Connections Create Communities",
    description:
      "Simple conversations and shared experiences can build stronger, friendlier neighborhoods.",
  },
  {
    icon: Store,
    title: "Local Businesses Matter",
    description:
      "Supporting local shops and services helps communities thrive and keeps neighborhoods vibrant.",
  },
  {
    icon: Trees,
    title: "Small Actions Make a Big Difference",
    description:
      "Exploring, sharing, and helping one another creates positive change that grows over time.",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop"
            alt="Community gathering"
            className="h-full w-full rounded-3xl object-cover shadow-2xl"
          />

        </div>

        {/* Right */}

        <div>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            What We Believe
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Strong neighborhoods begin with strong relationships.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            We believe communities flourish when people know the places
            around them, support one another, and take pride in where
            they live. Technology should make these connections easier,
            not replace them.
          </p>

          <div className="mt-10 space-y-5">

            {beliefs.map((belief) => {
              const Icon = belief.icon;

              return (
                <div
                  key={belief.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-emerald-400 hover:shadow-md dark:border-slate-800"
                >

                  <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

                    <Icon size={22} />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {belief.title}
                    </h3>

                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      {belief.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}