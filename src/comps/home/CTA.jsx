import { ArrowRight, MapPinned } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-16 text-center text-white shadow-2xl md:px-16">

          <div className="mx-auto max-w-3xl">

            <div className="mb-6 inline-flex rounded-full bg-white/15 p-4 backdrop-blur">

              <MapPinned size={32} />

            </div>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              Ready to Know Your Neighborhood? 
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
              Join KYN today and discover local places, connect with
              your community, and experience your neighborhood like
              never before.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-emerald-600 transition duration-300 hover:scale-105 hover:bg-slate-100">

                Get Started

                <ArrowRight size={18} />

              </button>

              <button className="rounded-full border border-white/40 px-8 py-3 font-semibold transition duration-300 hover:bg-white/10">

                Learn More

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}