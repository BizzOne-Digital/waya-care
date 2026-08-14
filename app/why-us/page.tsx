import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Why Choose Waya Care | Home Care in the Greater Toronto Area",
  description:
    "See what sets Waya Care apart: personalized care plans, consistent caregiver relationships, transparent communication, and deep local roots across the Greater Toronto Area.",
};

export default function WhyUsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Why Waya"
        title="Why Families Choose"
        highlight="Waya Care"
        description="There are a lot of home care options in the Greater Toronto Area. Here's what actually makes families stay with us."
      />

      <WhyUs />

      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl text-navy mb-4">
              Care Shouldn't Feel Like a <span className="italic text-teal">Gamble</span>
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Many families come to us after a frustrating experience elsewhere — a different
              caregiver every week, vague updates, or a plan that never adjusted as needs changed.
            </p>
            <p className="text-slate leading-relaxed">
              We fix that by keeping care simple to understand: one care plan, one point of
              contact, and caregivers who are genuinely matched to your family — not just
              whoever's on the schedule.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="font-semibold text-navy mb-4">What you can expect from day one</h3>
            <ul className="space-y-3 text-slate text-sm">
              <li className="flex gap-2"><span className="text-teal font-bold">1.</span> A free consultation to understand your needs</li>
              <li className="flex gap-2"><span className="text-teal font-bold">2.</span> A care plan built around routines and preferences</li>
              <li className="flex gap-2"><span className="text-teal font-bold">3.</span> A caregiver match introduced before care begins</li>
              <li className="flex gap-2"><span className="text-teal font-bold">4.</span> Ongoing check-ins and adjustments as needs evolve</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
