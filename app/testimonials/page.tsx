import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Testimonials — Families Trust Waya Care | Milton, Ontario",
  description:
    "Read what families across Milton, Oakville, and Burlington say about their experience with Waya Care's home care services.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Testimonials"
        title="Heard From the"
        highlight="Families We Serve"
        description="We measure success one family at a time. Here's what that looks like in their own words."
      />

      <Testimonials />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-navy mb-4">
            Your Family Could Be <span className="italic text-teal">Next</span>
          </h2>
          <p className="text-slate text-lg mb-8 leading-relaxed">
            Every relationship on this page started the same way — with a simple, no-pressure
            conversation about what care actually looks like for that family.
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
