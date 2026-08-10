"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Margaret T.",
    role: "Daughter of a Waya Care client",
    location: "Milton, ON",
    quote: "The caregiver assigned to my mother is extraordinary. She's patient, kind, and genuinely invested in my mom's wellbeing. For the first time in years, I don't worry every hour of the day.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80",
  },
  {
    name: "Robert H.",
    role: "Waya Care client",
    location: "Oakville, ON",
    quote: "After my surgery, coming home felt overwhelming. Waya Care made the transition smooth and stress-free. They anticipated my needs before I even had to ask.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&q=80",
  },
  {
    name: "Sandra K.",
    role: "Family caregiver — respite client",
    location: "Burlington, ON",
    quote: "As a full-time caregiver for my father, I was running on empty. The respite support from Waya Care gave me breathing room. When I come back, I'm a better daughter.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&q=80",
  },
  {
    name: "James & Patricia W.",
    role: "Adult children of a dementia client",
    location: "Milton, ON",
    quote: "Caring for someone with Alzheimer's is incredibly difficult. Waya Care brought structure, calm, and genuine compassion into our father's daily life. We trust them completely.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80",
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
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">Families Trust Us</span>
            <div className="h-px w-8 bg-teal-light" />
          </div>
          <h2 className="font-display text-4xl text-navy mb-4">
            Heard From the <span className="italic text-teal">Families We Serve</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: avatars nav */}
          <div className="lg:col-span-1 flex lg:flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${active === i ? "bg-teal-pale" : "hover:bg-gray-50"}`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`w-12 h-12 rounded-full object-cover border-2 transition-all ${active === i ? "border-teal scale-110" : "border-transparent"}`}
                />
                <span className={`text-xs font-medium hidden lg:block ${active === i ? "text-teal" : "text-slate"}`}>
                  {t.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Right: testimonial */}
          <div className="lg:col-span-4">
            <div className="testimonial-card rounded-2xl p-8 sm:p-10 border border-teal-pale relative overflow-hidden">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-teal/10 font-display text-8xl leading-none select-none">"</div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array(testimonials[active].stars).fill(0).map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  <blockquote className="font-display text-navy text-xl sm:text-2xl leading-relaxed italic mb-8">
                    "{testimonials[active].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[active].avatar}
                      alt={testimonials[active].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-teal"
                    />
                    <div>
                      <p className="font-semibold text-navy">{testimonials[active].name}</p>
                      <p className="text-slate text-sm">{testimonials[active].role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3.5 h-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="text-slate text-xs">{testimonials[active].location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              <div className="flex gap-3 mt-6 pt-6 border-t border-teal-pale">
                <button
                  onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-teal/30 flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white text-teal transition-all hover:scale-110"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActive((active + 1) % testimonials.length)}
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
