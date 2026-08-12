import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Promise — Waya Care | Home Care in Milton, Ontario",
  description:
    "Waya Care is a new, local home care company. Here's exactly what we commit to for every family we serve across Milton, Oakville, and Burlington.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Our Promise"
        title="What We Commit to"
        highlight="Every Family"
        description="We're a new company in the Halton Region, so instead of pointing to reviews, we're telling you exactly what to expect."
      />

      <Testimonials />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-navy mb-4">
            Be Part of Our <span className="italic text-teal">First Families</span>
          </h2>
          <p className="text-slate text-lg mb-8 leading-relaxed">
            Every relationship starts the same way — a simple, no-pressure conversation about what
            care actually looks like for your family.
          </p>
          <a
            href="/contact"
            className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-base inline-block"
          >
            Start the Conversation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
