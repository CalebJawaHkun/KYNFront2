import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white py-24 shadow-[inset_0_1px_0_rgba(15,23,42,0.04)] dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-slate-100">
            We'd love to hear your thoughts.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Whether you have a question, feedback, feature suggestion,
            or simply want to share your experience with KYN, our inbox
            is always open.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Every message helps us build a better platform for stronger,
            more connected neighborhoods.
          </p>

        </div>

        {/* Right */}

        <form className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/90">

          <div className="grid gap-6 sm:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                First Name
              </label>

              <input
                type="text"
                placeholder="John"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950"
              />

            </div>

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950"
            />

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              Subject
            </label>

            <input
              type="text"
              placeholder="How can we help?"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950"
            />

          </div>

          <div className="mt-6">

            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950"
            />

          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-600"
          >
            <Send size={18} />

            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}