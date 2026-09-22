import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import ApplyForm from "../components/ApplyForm";

export const metadata: Metadata = {
  title: "Careers — Join Waya Care | Greater Toronto Area",
  description:
    "Join the Waya Care team. We're hiring compassionate caregivers across the Greater Toronto Area.",
};

const values = [
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Supportive Work Culture",
    desc: "Great care begins with great caregivers. Waya Care fosters a respectful, team-focused environment where caregivers feel heard, appreciated, and supported in every aspect of their work.",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Flexible Scheduling",
    desc: "We understand that life is busy. Whether you are balancing school, family, or other commitments, Waya Care offers flexible scheduling options so you can build a work routine that fits your lifestyle.",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    title: "Consistent Assignments",
    desc: "We prioritize stable, ongoing placements. This allows caregivers to build meaningful relationships with the individuals we support, reduce stress, and deliver higher-quality care.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Ongoing Training & Skill Development",
    desc: "Waya Care invests in your growth. We provide continuous training opportunities so you can strengthen your skills, stay current with best practices, and advance confidently in your caregiving career.",
  },
  {
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    title: "Referral Bonus Program",
    desc: "We believe strong caregivers know strong caregivers. When you refer qualified team members to Waya Care, you can earn referral bonuses as part of our appreciation for helping us build a reliable, compassionate workforce.",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "Listening Campaigns",
    desc: "Waya Care runs ongoing Listening Campaigns to make our workplace better for caregivers. We actively gather feedback, suggestions, and real experiences from our team to improve policies, strengthen communication, and build a more supportive environment.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Competitive Pay & Recognition",
    desc: "Your work has impact, and we make sure it's recognized. Waya Care offers fair compensation, opportunities for bonuses, and ongoing appreciation for exceptional service.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Purpose-Driven Work",
    desc: "Every shift makes a difference. At Waya Care, you help individuals maintain independence, dignity, and comfort in their own homes. Your role is meaningful, valued, and essential.",
  },
];

const whoWeSupport = ["Individuals We Support", "People in Our Care", "Those We Support"];

const roles = [
  {
    title: "Personal Support Worker (PSW)",
    type: "Full-Time / Part-Time",
    location: "Greater Toronto Area",
  },
  {
    title: "Companion Caregiver",
    type: "Part-Time / Per-Diem",
    location: "Greater Toronto Area",
  },
  {
    title: "Overnight Care Provider",
    type: "Evenings & Overnights",
    location: "Greater Toronto Area",
  },
];

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Careers"
        title="Build a Career"
        highlight="Rooted in Care"
        description="Waya Care is growing, and we're looking for compassionate people to join our team of caregivers across the Greater Toronto Area."
      />

      {/* Why work here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-light" />
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">Why Waya Care</span>
              <div className="h-px w-8 bg-teal-light" />
            </div>
            <h2 className="font-display text-4xl text-navy mb-4">
              Why Caregivers <span className="italic text-teal">Choose Waya Care</span>
            </h2>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i} className="p-6 rounded-2xl bg-cream text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-teal-pale rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl text-white mb-4">
              Who We <span className="italic text-teal-light">Support</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Waya Care uses language that reflects dignity and respect. We refer to the people we
              serve as:
            </p>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-3 gap-4">
            {whoWeSupport.map((label) => (
              <StaggerItem key={label} className="bg-white/10 border border-white/10 rounded-xl px-6 py-5">
                <p className="text-white font-semibold">{label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <p className="text-white/60 text-sm mt-8">
              This terminology aligns with our commitment to compassionate, person-centered care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-light" />
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">Open Roles</span>
              <div className="h-px w-8 bg-teal-light" />
            </div>
            <h2 className="font-display text-4xl text-navy mb-4">
              Current <span className="italic text-teal">Opportunities</span>
            </h2>
            <p className="text-slate text-lg max-w-xl mx-auto">
              Don't see the right fit? We're always happy to hear from caring, reliable people — send us your resume anyway.
            </p>
          </Reveal>

          <StaggerGroup className="space-y-4">
            {roles.map((r, i) => (
              <StaggerItem
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-1">{r.title}</h3>
                  <p className="text-slate text-sm">{r.type} · {r.location}</p>
                </div>
                <a
                  href="#apply"
                  className="btn-primary text-white font-semibold px-6 py-3 rounded-full text-sm inline-block text-center hover:scale-105 transition-transform"
                >
                  Apply Now
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Apply */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-3xl text-white mb-4">
              Ready to Join <span className="italic text-teal-light">Our Team?</span>
            </h2>
            <p className="text-white/80 text-lg">
              Send us your resume and a bit about yourself — we'll be in touch within a few business days.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ApplyForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
