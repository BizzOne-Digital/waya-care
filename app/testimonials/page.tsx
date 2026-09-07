import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Our Promise — Waya Care | Home Care in the Greater Toronto Area",
  description:
    "As a locally-owned agency, we don't route you through a corporate call center. Here's exactly what we commit to for every family we serve.",
};

const experiences = [
  {
    quote: "Waya Care treats my mother with dignity and patience.",
    desc: "Our caregivers build meaningful relationships with the individuals we support, ensuring comfort, safety, and independence at home.",
  },
  {
    quote: "Communication is always clear and respectful.",
    desc: "Families appreciate our proactive updates, reliable scheduling, and commitment to transparency.",
  },
  {
    quote: "The caregiver feels like part of our family.",
    desc: "Consistency matters. Waya Care prioritizes stable assignments so caregivers can truly connect with the people in their care.",
  },
];

const listeningItems = ["Feedback", "Suggestions", "Concerns", "Positive experiences", "Ideas for improvement"];

const referralPoints = [
  "Rewards families for sharing their positive experiences",
  "Helps new families access quality care",
  "Strengthens our community connections",
  "Encourages trust-based growth",
];

const trustReasons = [
  "Compassionate Caregivers who treat every individual with dignity",
  "Consistent Assignments that build trust and comfort",
  "Clear Communication with families",
  "Listening Campaigns that ensure families feel heard",
  "Referral Discounts that reward community support",
  "Purpose-Driven Care focused on independence, safety, and respect",
];

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Our Promise"
        title="What Families Say"
        highlight="About Waya Care"
        description="At Waya Care, every story matters. Families trust us because we provide compassionate, consistent, and person-centered support."
      />

      <Testimonials />

      {/* Real Experiences From Families */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-light" />
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">Real Experiences From Families</span>
              <div className="h-px w-8 bg-teal-light" />
            </div>
            <h2 className="font-display text-4xl text-navy mb-4">
              Their experiences reflect the <span className="italic text-teal">heart of our work</span>
            </h2>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {experiences.map((e, i) => (
              <StaggerItem key={i} className="testimonial-card rounded-2xl p-7 border border-teal-pale hover:-translate-y-1 transition-transform duration-300">
                <p className="font-display text-xl text-navy italic mb-3">"{e.quote}"</p>
                <p className="text-slate text-sm leading-relaxed">{e.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Listening Campaigns */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-light" />
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">Listening Campaigns From Families</span>
              <div className="h-px w-8 bg-teal-light" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-navy mb-4">
              We Listen, <span className="italic text-teal">Then We Improve</span>
            </h2>
            <p className="text-slate text-lg mb-8">
              Waya Care believes that the best way to improve our quality of care is by listening
              directly to families. Our Listening Campaigns invite families to share:
            </p>
          </Reveal>
          <StaggerGroup className="flex flex-wrap justify-center gap-3 mb-8">
            {listeningItems.map((item) => (
              <StaggerItem key={item} className="bg-white border border-teal-pale rounded-full px-5 py-2 text-navy text-sm font-medium">
                {item}
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <p className="text-slate leading-relaxed max-w-2xl mx-auto">
              This helps us strengthen our services, improve communication, and ensure every
              individual receives the highest level of care. By listening to families, we make
              Waya Care a more responsive, compassionate, and community-trusted care provider.
            </p>
          </Reveal>
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

      {/* Why Families Trust Us */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-3xl text-white mb-4">
              Why Families <span className="italic text-teal-light">Trust Waya Care</span>
            </h2>
          </Reveal>
          <StaggerGroup className="space-y-3">
            {trustReasons.map((r) => (
              <StaggerItem key={r} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <svg className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/90 text-sm">{r}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-navy mb-4">
              Share Your <span className="italic text-teal">Experience</span>
            </h2>
            <p className="text-slate text-lg mb-8">
              Your voice helps us grow.
            </p>
            <a
              href="/contact"
              className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-base inline-block"
            >
              Start the Conversation
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
