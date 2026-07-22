import { Info, MapPinned, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[70vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

            <Info size={16} />

            About KYN

          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white lg:text-6xl">

            More than a platform.

            <span className="block text-emerald-500">

              We're building communities.

            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">

            KYN (Know Your Neighborhood) exists to bring people
            closer to the places they live. We believe stronger
            neighborhoods begin with meaningful connections,
            local discoveries, and shared experiences.

          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-emerald-600">

            Explore Our Vision

            <ArrowRight size={18} />

          </button>

        </div>

        {/* Right */}

        <div className="relative flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
            alt="Community"
            className="w-full max-w-xl rounded-3xl object-cover shadow-2xl"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur lg:block dark:border-slate-700 dark:bg-slate-900/90">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/40">

                <MapPinned
                  className="text-emerald-500"
                  size={22}
                />

              </div>

              <div>

                <h3 className="font-semibold">

                  Know Your Neighborhood

                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">

                  Connecting people, places & stories.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}