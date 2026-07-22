import {
  HeartHandshake,
  MapPinned,
  Users,
} from "lucide-react";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Build Connections",
    description:
      "Help neighbors create meaningful relationships and stronger local communities.",
  },
  {
    icon: MapPinned,
    title: "Discover Local",
    description:
      "Encourage people to explore nearby places, businesses, and hidden gems.",
  },
  {
    icon: Users,
    title: "Grow Together",
    description:
      "Create opportunities for communities to share experiences and support one another.",
  },
];

export default function OurMission() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            Our Mission
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Strong communities begin with knowing one another.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            At KYN, we believe technology should strengthen real-world
            relationships, not replace them.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Our mission is to make it easier for people to discover the
            places around them, support local businesses, participate in
            community events, and connect with the neighbors who make
            every neighborhood unique.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            By bringing local information and people together in one
            place, we hope to create neighborhoods that are more
            connected, welcoming, and resilient.
          </p>

        </div>

        {/* Right */}

        <div className="space-y-6">

          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >

                <div className="flex items-start gap-5">

                  <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

                    <Icon size={24} />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                      {pillar.description}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}