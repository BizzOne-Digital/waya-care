import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Waya Care | Home Care in the GTA",
  description:
    "Answers to common questions about Waya Care's home care services, pricing, caregiver vetting, scheduling, and coverage across the Greater Toronto Area.",
};

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="FAQ"
        title="Common Questions,"
        highlight="Answered"
        description="Can't find what you're looking for? Reach out directly — we're happy to walk through your specific situation."
      />

      <FAQ />

      <section className="py-16 bg-teal-pale">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl text-navy mb-3">Still have a question?</h2>
          <p className="text-slate mb-6">
            Call, email, or send us a message and we'll get back to you within one business day.
          </p>
          <a
            href="/contact"
            className="btn-primary text-white font-semibold px-7 py-3.5 rounded-full inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
