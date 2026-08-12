"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

const services = [
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Personal Care & Daily Living",
    short: "Respectful assistance with everyday activities while preserving independence.",
    details: ["Bathing & shower assistance", "Dressing & grooming", "Meal preparation", "Medication reminders", "Light housekeeping", "Mobility & transfer support"],
    image: "https://images.unsplash.com/photo-1773227055624-07b515ba87c5?w=800&q=80",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Companionship & Social Support",
    short: "Meaningful connection beyond completing a checklist.",
    details: ["Conversation & companionship", "Walks & recreational activities", "Hobbies & meaningful activities", "Appointment accompaniment", "Community outings", "Errands & shopping"],
    image: "https://images.unsplash.com/photo-1762955913084-96ea3f986468?w=800&q=80",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Dementia & Alzheimer's Care",
    short: "Compassionate, patient support designed around changing needs.",
    details: ["Routine-based daily care", "Supervision & safety", "Meaningful activities", "Meal preparation", "Family respite relief", "Calm, familiar environment"],
    image: "https://images.unsplash.com/photo-1702648156180-25d8be9c9527?w=800&q=80",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Respite & Family Caregiver Support",
    short: "You don't have to do it alone. Take a well-earned break.",
    details: ["A few hours to full days", "Evening & weekend coverage", "Overnight respite", "Flexible scheduling", "Emotional support for families", "Consistent caregiver matching"],
    image: "https://images.unsplash.com/photo-1658314755707-1fbdf7c40145?w=800&q=80",
  },
  {
    icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
    title: "Overnight & 24-Hour Care",
    short: "Extended support through the night and around the clock.",
    details: ["Overnight supervision", "Nighttime routine help", "24-hour care options", "Safety monitoring", "Mobility assistance", "Hydration & meal support"],
    image: "https://images.unsplash.com/photo-1556085475-31c45d62938a?w=800&q=80",
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Hospital-to-Home Support",
    short: "A smoother, safer transition after a hospital stay.",
    details: ["Personal care on return", "Meal preparation", "Mobility assistance", "Appointment follow-ups", "Medication reminders", "Family coordination"],
    image: "https://images.unsplash.com/photo-1672640770474-e1d8a28fd0d2?w=800&q=80",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Transportation & Appointment Support",
    short: "Helping you stay connected to life outside the home.",
    details: ["Medical appointments", "Pharmacy visits", "Grocery shopping", "Family visits", "Community activities", "Personal errands"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-teal-light" />
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <div className="h-px w-8 bg-teal-light" />
          </div>
          <h2 className="font-display text-4xl text-navy mb-4">
            Services Tailored to <span className="italic text-teal">Every Need</span>
          </h2>
          <p className="text-slate text-lg max-w-xl mx-auto">
            From daily personal care to overnight support, we meet families where they are.
          </p>
        </Reveal>

        {/* Services Grid + Detail */}
        <Reveal delay={0.1} className="grid lg:grid-cols-3 gap-8">
          {/* Left: list */}
          <StaggerGroup className="lg:col-span-1 flex flex-col gap-2" stagger={0.06}>
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${
                    active === i
                      ? "bg-teal text-white shadow-lg"
                      : "bg-white text-navy hover:bg-teal-pale"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${active === i ? "bg-white/20 scale-110" : "bg-teal-pale"}`}>
                    <svg className={`w-5 h-5 ${active === i ? "text-white" : "text-teal"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                  </div>
                  <span className="font-medium text-sm leading-snug">{s.title}</span>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Right: detail card */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="aspect-video relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={services[active].image}
                  alt={services[active].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <motion.div
                key={active + "-caption"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute bottom-0 left-0 p-6"
              >
                <h3 className="font-display text-white text-2xl mb-1">{services[active].title}</h3>
                <p className="text-white/80 text-sm">{services[active].short}</p>
              </motion.div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-navy mb-3 text-sm uppercase tracking-wide">Services Include:</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {services[active].details.map((d, i) => (
                  <motion.div
                    key={active + "-" + i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-2 text-slate text-sm"
                  >
                    <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {d}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="/contact" className="btn-primary text-white font-semibold px-6 py-3 rounded-full text-sm inline-block hover:scale-105 transition-transform">
                  Inquire About This Service
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
