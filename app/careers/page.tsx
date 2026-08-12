import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Join Waya Care | Milton, Ontario",
  description:
    "Join the Waya Care team. We're hiring compassionate caregivers across Milton, Oakville, Burlington, and the Halton Region.",
};

const values = [
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Meaningful Work",
    desc: "Build real relationships with the families and clients you support — not just a checklist of tasks.",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Flexible Scheduling",
    desc: "Full-time, part-time, and per-diem shifts available to fit your life.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Ongoing Support",
    desc: "You're never on your own — our team is available to support you every shift.",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    title: "Local & Community-Focused",
    desc: "Work close to home, caring for families right here in the Halton Region.",
  },
];

const roles = [
  {
    title: "Personal Support Worker (PSW)",
    type: "Full-Time / Part-Time",
    location: "Milton, Oakville, Burlington & Halton Hills",
  },
  {
    title: "Companion Caregiver",
    type: "Part-Time / Per-Diem",
    location: "Milton & Surrounding Areas",
  },
  {
    title: "Overnight Care Provider",
    type: "Evenings & Overnights",
    location: "Halton Region",
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
        description="Waya Care is growing, and we're looking for compassionate people to join our team of caregivers across the Halton Region."
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
              Why Caregivers <span className="italic text-teal">Choose Us</span>
            </h2>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  href="/contact"
                  className="btn-primary text-white font-semibold px-6 py-3 rounded-full text-sm inline-block text-center hover:scale-105 transition-transform"
                >
                  Apply Now
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <Reveal className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Ready to Join <span className="italic text-teal-light">Our Team?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Send us your resume and a bit about yourself — we'll be in touch within a few business days.
          </p>
          <a
            href="mailto:info@wayacare.com?subject=Career%20Application"
            className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-base inline-block"
          >
            Send Your Resume
          </a>
        </div>
      </Reveal>

      <Footer />
    </main>
  );
}
