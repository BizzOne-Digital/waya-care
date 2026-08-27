import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Promise — Waya Care | Home Care in the Greater Toronto Area",
  description:
    "As a locally-owned agency, we don't route you through a corporate call center. Here's exactly what we commit to for every family we serve.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Our Promise"
        title="What We Commit to"
        highlight="Every Family"
        description="As a locally-owned agency, we don't route you through a corporate call center. You get direct, 24/7 personal support."
      />

      <Testimonials />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-navy mb-4">
            Direct, Personal <span className="italic text-teal">Support</span>
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
