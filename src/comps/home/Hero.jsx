import {
  ArrowRight,
  MapPinned,
  Users,
  Compass,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col-reverse items-center gap-16 px-6 py-20 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1">

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">

            <MapPinned size={16} />

            Know Your Neighborhood

          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white lg:text-7xl">

            Discover the

            <span className="block text-emerald-500">
              community around you.
            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">

            KYN helps you explore nearby places, discover local events,
            connect with neighbors, and support businesses that make
            your community unique.

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-semibold text-white transition hover:bg-emerald-600">

              Get Started

              <ArrowRight size={18} />

            </button>

            <button className="rounded-full border border-slate-300 px-7 py-3 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">

              Learn More

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex flex-1 justify-center">

          <img
            src="/src/assets/hero.png"
            alt="Neighborhood"
            className="w-full max-w-xl rounded-3xl object-cover shadow-2xl"
          />

          {/* Floating Card 1 */}

          <div className="absolute -left-6 top-10 hidden rounded-2xl border bg-white/90 p-4 shadow-xl backdrop-blur lg:block dark:border-slate-700 dark:bg-slate-900/90">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">

                <Compass
                  size={20}
                  className="text-emerald-500"
                />

              </div>

              <div>

                <h4 className="font-semibold text-slate-900 dark:text-slate-100">

                  Explore

                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-400">

                  Hidden gems nearby

                </p>

              </div>

            </div>

          </div>

          {/* Floating Card 2 */}

          <div className="absolute -bottom-6 right-0 hidden rounded-2xl border bg-white/90 p-4 shadow-xl backdrop-blur lg:block dark:border-slate-700 dark:bg-slate-900/90">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-sky-100 p-2 dark:bg-sky-900">

                <Users
                  size={20}
                  className="text-sky-500"
                />

              </div>

              <div>

                <h4 className="font-semibold text-slate-900 dark:text-slate-100">

                  Community

                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-400">

                  Meet people around you

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}