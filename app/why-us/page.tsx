import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const referralPoints = [
  "Rewards families for sharing their positive experiences",
  "Helps new families access quality care",
  "Strengthens our community connections",
  "Encourages trust-based growth",
];

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

      {/* Referral Discount */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-light" />
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">Family & Friends Referral Discount</span>
              <div className="h-px w-8 bg-teal-light" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-navy mb-4">
              Referral Discount <span className="italic text-teal">Program</span>
            </h2>
            <p className="text-slate text-lg">
              We value the trust families place in Waya Care. When a family refers a friend or
              loved one to our services, they receive a special referral discount as a thank-you
              for helping us support more individuals in the community.
            </p>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 gap-4">
            {referralPoints.map((p) => (
              <StaggerItem key={p} className="flex items-start gap-3 bg-teal-pale rounded-xl p-5">
                <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-navy text-sm font-medium">{p}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Footer />
    </main>
  );
}
