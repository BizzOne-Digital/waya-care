"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const promises = [
  {
    title: "You'll always know your caregiver",
    quote: "No rotating roster of strangers. We match you with a consistent caregiver who gets to know your routines, preferences, and what matters to you.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Your care plan is built around you",
    quote: "Every plan starts with a real conversation about your needs — never a generic package. It evolves with you as things change.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "You'll never be left wondering",
    quote: "Clear communication and regular updates, so families always know how their loved one is doing.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Every caregiver is vetted and trained",
    quote: "Interviews, reference checks, and background verification — we only place caregivers we'd trust with our own families.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-teal-light" />
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">Our Promise</span>
            <div className="h-px w-8 bg-teal-light" />
          </div>
          <h2 className="font-display text-4xl text-navy mb-4">
            What You Can <span className="italic text-teal">Expect From Us</span>
          </h2>
          <p className="text-slate text-lg max-w-xl mx-auto">
            Waya Care is a new, local company — so instead of asking you to trust reviews, here's exactly what we commit to for every family we serve.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: promise nav */}
          <div className="lg:col-span-1 flex lg:flex-col gap-3">
            {promises.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 lg:flex-none flex flex-col items-center lg:items-start gap-1 p-3 rounded-xl transition-all ${active === i ? "bg-teal-pale" : "hover:bg-gray-50"}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${active === i ? "bg-teal text-white" : "bg-cream text-teal"}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                  </svg>
                </div>
                <span className={`text-xs font-medium hidden lg:block text-center ${active === i ? "text-teal" : "text-slate"}`}>
                  {i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Right: promise detail */}
          <div className="lg:col-span-4">
            <div className="testimonial-card rounded-2xl p-8 sm:p-10 border border-teal-pale relative overflow-hidden">
              <div className="absolute top-6 right-8 text-teal/10 font-display text-8xl leading-none select-none">"</div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <h3 className="font-display text-navy text-2xl sm:text-3xl mb-4">{promises[active].title}</h3>
                  <blockquote className="text-slate text-lg leading-relaxed">
                    {promises[active].quote}
                  </blockquote>
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-teal-pale">
                <button
                  onClick={() => setActive((active - 1 + promises.length) % promises.length)}
                  className="w-10 h-10 rounded-full border border-teal/30 flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white text-teal transition-all hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActive((active + 1) % promises.length)}
                  className="w-10 h-10 rounded-full border border-teal/30 flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white text-teal transition-all hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
