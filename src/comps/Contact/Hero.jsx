import { Mail, MessageCircle, ArrowRight } from "lucide-react";

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

            <Mail size={16} />

            Contact Us

          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white lg:text-6xl">

            We'd love to

            <span className="block text-emerald-500">

              hear from you.

            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">

            Whether you have a question, feedback, a feature idea,
            or simply want to say hello, we're always happy to listen.
            Together, we can continue building stronger communities
            through KYN.

          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-emerald-600">

            Send a Message

            <ArrowRight size={18} />

          </button>

        </div>

        {/* Right */}

        <div className="relative flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt="Customer Support"
            className="w-full max-w-xl rounded-3xl object-cover shadow-2xl"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur lg:block dark:border-slate-700 dark:bg-slate-900/90">

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/40">

                <MessageCircle
                  size={22}
                  className="text-emerald-500"
                />

              </div>

              <div>

                <h3 className="font-semibold text-slate-900 dark:text-white">

                  Friendly Support

                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400">

                  We usually respond within 24 hours.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}