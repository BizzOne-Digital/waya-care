"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const faqs = [
  {
    q: "What areas does Waya Care serve?",
    a: "We currently serve families across the Greater Toronto Area. Contact us to confirm availability in your neighbourhood.",
  },
  {
    q: "How do I get started with home care?",
    a: "Simply reach out to us by phone, email, or through our contact form to request a free consultation. We'll discuss your family's needs, answer your questions, and help you understand your options — no obligation required.",
  },
  {
    q: "How much does home care cost?",
    a: "Our pricing depends on the type of care, hours needed, and the specific plan created for your loved one. We offer transparent pricing and work with families to find a solution that fits. Contact us for a personalized quote.",
  },
  {
    q: "Are your caregivers trained and verified?",
    a: "Yes. All Waya Care caregivers go through a thorough selection process including interviews, reference checks, and background verification. We are committed to placing only compassionate, professional, and reliable caregivers with our clients.",
  },
  {
    q: "Can I choose or change my caregiver?",
    a: "We work to match clients with caregivers based on compatibility, care needs, and preferences. If a match isn't working well, we will work with you to find a better fit — your comfort and confidence matter to us.",
  },
  {
    q: "What if I need care on short notice?",
    a: "We understand that care needs can arise quickly. We do our best to accommodate urgent requests and will work with your schedule to arrange support as soon as possible.",
  },
  {
    q: "Do you offer overnight and 24-hour care?",
    a: "Yes. We offer overnight care and can discuss extended 24-hour care arrangements following an individualized assessment of your loved one's needs.",
  },
  {
    q: "Is Waya Care covered by insurance or government funding?",
    a: "Some clients may be eligible for government-funded care through the Home and Community Care Support Services (HCCSS). We recommend contacting your local HCCSS office to check eligibility. We also work with some private insurance plans. Contact us to discuss your specific situation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-teal-light" />
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">Common Questions</span>
            <div className="h-px w-8 bg-teal-light" />
          </div>
          <h2 className="font-display text-4xl text-navy mb-4">
            Frequently Asked <span className="italic text-teal">Questions</span>
          </h2>
          <p className="text-slate text-lg">
            Have a question not listed here? Reach out — we're happy to help.
          </p>
        </Reveal>

        <StaggerGroup className="space-y-3" stagger={0.05}>
          {faqs.map((faq, i) => (
            <StaggerItem
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-navy text-base">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-teal/30 flex items-center justify-center flex-shrink-0 transition-all ${open === i ? "bg-teal border-teal" : "bg-transparent"}`}>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${open === i ? "rotate-45 text-white" : "text-teal"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-slate leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
