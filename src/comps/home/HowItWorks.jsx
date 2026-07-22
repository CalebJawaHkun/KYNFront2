import {
  LogIn,
  Compass,
  Users,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Sign In",
    description:
      "Securely continue with your preferred account using OAuth authentication.",
  },
  {
    icon: Compass,
    title: "Explore",
    description:
      "Browse nearby places, discover hidden gems, and learn what's happening around you.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "Meet neighbors, support local businesses, and become part of your community.",
  },
  {
    icon: Sparkles,
    title: "Contribute",
    description:
      "Share places, experiences, and recommendations to help others discover more.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Start exploring in just a few steps.
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Getting started with KYN is simple, secure, and takes less
            than a minute.
          </p>

        </div>

        {/* Steps */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >

                {/* Step Number */}

                <span className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100 dark:text-slate-800">
                  0{index + 1}
                </span>

                {/* Icon */}

                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">

                  <Icon size={26} />

                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}