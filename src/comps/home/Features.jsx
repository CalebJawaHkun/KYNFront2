import {
  Compass,
  MapPinned,
  Users,
  Store,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Discover Hidden Gems",
    description:
      "Explore cafés, parks, landmarks, and unique local spots shared by your community.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Connect With Neighbors",
    description:
      "Meet people nearby, exchange recommendations, and build stronger community relationships.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Store,
    title: "Support Local Businesses",
    description:
      "Help small businesses grow by discovering, sharing, and recommending local services.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need to explore your community.
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            KYN makes discovering your neighborhood simple, enjoyable,
            and meaningful.
          </p>

        </div>

        <div className="space-y-24">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Image */}

                <div>

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-[350px] w-full rounded-3xl object-cover shadow-xl"
                  />

                </div>

                {/* Content */}

                <div>

                  <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

                    <Icon size={28} />

                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {feature.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}