"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const services = [
    "Personal Care & Daily Living",
    "Companionship & Social Support",
    "Dementia & Alzheimer's Care",
    "Respite Care",
    "Overnight & 24-Hour Care",
    "Hospital-to-Home Support",
    "Transportation Support",
    "Not sure yet",
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-pale/40 clip-right hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-light" />
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h2 className="font-display text-4xl text-navy mb-6 leading-tight">
              Let's Talk About <br />
              <span className="italic text-teal">Your Care Needs</span>
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-8">
              Whether you're looking for support for yourself, a parent, or someone you love — we're here to listen. Our free consultation is no-pressure, no-obligation. Just a real conversation about what matters most.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  label: "Phone",
                  value: "(647) 924-4532",
                  href: "tel:6479244532",
                },
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  label: "Email",
                  value: "care@wayacare.com",
                  href: "mailto:care@wayacare.com",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  label: "Location",
                  value: "Serving the Greater Toronto Area",
                  href: "#",
                },
                {
                  icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                  label: "Website",
                  value: "www.wayacare.com",
                  href: "https://www.wayacare.com",
                },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-teal-pale rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-teal group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-navy font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-slate mb-3 font-medium">Follow Our Care Community</p>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/waya.care?igsh=MTR6d2p3cTRvNzBtaw%3D%3D&utm_source=qr", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.153 0-3.507.012-4.744.069-2.67.121-3.915 1.387-4.036 4.036-.057 1.237-.067 1.605-.067 4.63 0 3.023.011 3.393.067 4.629.121 2.646 1.363 3.915 4.036 4.036 1.237.057 1.591.069 4.744.069 3.153 0 3.507-.012 4.744-.069 2.668-.121 3.915-1.393 4.036-4.036.057-1.236.067-1.606.067-4.629 0-3.025-.011-3.393-.067-4.63-.121-2.649-1.365-3.915-4.036-4.036-1.237-.057-1.591-.069-4.744-.069zm0 4.883a5.152 5.152 0 110 10.304 5.152 5.152 0 010-10.304zm0 8.499a3.347 3.347 0 100-6.694 3.347 3.347 0 000 6.694zm6.406-8.702a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" },
                  { label: "Facebook", href: "https://www.facebook.com/share/1KeDArNeVg/?mibextid=wwXlfr", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "LinkedIn", href: "#", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-10 h-10 bg-teal-pale rounded-lg flex items-center justify-center hover:bg-teal hover:text-white text-teal transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.15} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-teal-pale rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="font-display text-2xl text-navy mb-2">Thank You!</h3>
                <p className="text-slate">We've received your message and will be in touch within one business day.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-2xl text-navy mb-1">Request a Free Consultation</h3>
                <p className="text-slate text-sm mb-6">Fill out the form and we'll reach out within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide">Phone</label>
                      <input
                        type="tel"
                        placeholder="(xxx) xxx-xxxx"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide">Your Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us a bit about your situation and what kind of support you're looking for..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-primary w-full text-white font-semibold py-4 rounded-xl text-base"
                  >
                    Send My Request
                  </motion.button>

                  <p className="text-center text-xs text-slate">
                    Your information is kept private and never shared.
                  </p>
                </form>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
