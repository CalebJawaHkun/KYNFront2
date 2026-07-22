import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I create a KYN account?",
    answer:
      "KYN uses secure OAuth authentication. Simply choose your preferred provider, such as Google or GitHub, to get started—no separate password required.",
  },
  {
    question: "Is KYN free to use?",
    answer:
      "Yes. KYN is completely free to join and explore your local community.",
  },
  {
    question: "Can I recommend new features?",
    answer:
      "Absolutely! We love hearing ideas from our community. Feature suggestions help shape the future of KYN.",
  },
  {
    question: "How do I report incorrect information?",
    answer:
      "Use the contact form below or reach out through our support email. We'll review and update information as quickly as possible.",
  },
  {
    question: "When can I expect a response?",
    answer:
      "Our team aims to reply to all inquiries within 24 hours on business days.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            Frequently Asked Questionss
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Answers to common questions.
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know before reaching out.
          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-4">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950
                "
              >
                
                <button
                  onClick={() =>
                    setOpen(active ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-white"
                >

                  <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">

                    {faq.question}

                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      active ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 leading-8 text-slate-700 dark:text-slate-400">

                      {faq.answer}

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