"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Personal Support Worker (PSW)",
  "Companion Caregiver",
  "Overnight Care Provider",
  "Not sure / General Application",
];

export default function ApplyForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div id="apply" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-2xl mx-auto scroll-mt-28">
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-teal-pale rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-navy mb-2">Application Received!</h3>
          <p className="text-slate">Thanks for your interest in joining Waya Care — we'll review your application and be in touch soon.</p>
        </motion.div>
      ) : (
        <>
          <h3 className="font-display text-2xl text-navy mb-1">Apply Now</h3>
          <p className="text-slate text-sm mb-6">
            Fill out the form below, or email your resume directly to{" "}
            <a href="mailto:care@wayacare.com?subject=Career%20Application" className="text-teal font-medium hover:underline">
              care@wayacare.com
            </a>.
          </p>

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
              <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide">Position</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition bg-white"
              >
                <option value="">Select a position...</option>
                {roles.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wide">Tell Us About Yourself</label>
              <textarea
                rows={4}
                placeholder="Experience, availability, or anything you'd like us to know..."
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
              Submit Application
            </motion.button>
          </form>
        </>
      )}
    </div>
  );
}
