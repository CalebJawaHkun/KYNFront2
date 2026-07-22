import {
  Mail,
  MapPinned,
  Clock3,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@kyn.app",
    description: "For support, feedback, and general inquiries.",
  },
  {
    icon: MessageCircle,
    title: "Community",
    value: "Join Our Discord",
    description: "Connect with other members and stay updated.",
  },
  {
    icon: MapPinned,
    title: "Location",
    value: "Yangon, Myanmar",
    description: "Serving communities, one neighborhood at a time.",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Within 24 Hours",
    description: "Monday – Friday during business hours.",
  },
];

export default function ContactOptions() {
  return (
    <section className="bg-white py-24 shadow-[inset_0_1px_0_rgba(15,23,42,0.04)] dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            Contact Options
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Choose the best way to reach us.
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Whether you have a question, feedback, or simply want to say
            hello, we're always happy to hear from you.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <div
                key={contact.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/90"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 transition group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400">

                  <Icon size={28} />

                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {contact.title}
                </h3>

                <p className="mt-3 font-medium text-emerald-600 dark:text-emerald-400">
                  {contact.value}
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {contact.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}