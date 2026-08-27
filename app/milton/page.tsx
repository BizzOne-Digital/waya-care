import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Trusted Senior In-Home Care Services in Milton, ON | Waya Care",
  description:
    "Proudly serving families across Milton, Ontario. Personalized senior support, dementia care, and companion care from local, consistent caregivers.",
};

const services = [
  {
    title: "Personal & Daily Living Care",
    desc: "Hands-on assistance with bathing, dressing, grooming, meal preparation, and safe mobility support.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Milton Companion Care",
    desc: "Social interaction, cognitive engagement, and transportation to local appointments, grocery shopping, or community events.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Specialized Dementia & Alzheimer's Care",
    desc: "Safe, structured routine management and memory care tailored specifically for cognitive health.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Hospital-to-Home Transition Support",
    desc: "Coordinating smooth care plans following patient discharges from Milton District Hospital or surrounding healthcare facilities.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
];

export default function MiltonPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Milton, ON"
        title="Compassionate In-Home"
        highlight="Senior Care in Milton, Ontario"
        description="Founded right here in Milton, Ontario, Waya Care Corporation is deeply committed to supporting our neighbours."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-slate text-lg leading-relaxed">
              We help seniors, adults with disabilities, and individuals recovering from illnesses
              live safely, independently, and comfortably in the Milton communities they call home.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-teal-light" />
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">Why Milton Families Choose Us</span>
              <div className="h-px w-8 bg-teal-light" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-navy mb-4">
              Why Milton Families <span className="italic text-teal">Choose Waya Care</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              We believe that exceptional home care requires truly understanding the person behind
              the care. Unlike massive, corporate care networks that send a rotating roster of
              strangers into your home, Waya Care commits to a consistent caregiver match. Your
              loved one will always see a familiar, trusted face who knows their routines,
              preferences, and personality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl text-navy mb-4">
              Senior Support Services We Provide <span className="italic text-teal">in Milton</span>
            </h2>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <StaggerItem key={i} className="flex gap-4 p-6 rounded-2xl bg-cream hover:bg-teal-pale transition-colors hover:-translate-y-1 duration-300">
                <div className="w-11 h-11 bg-teal-pale rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{s.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Reveal className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Schedule a Free <span className="italic text-teal-light">Milton Home Care Consultation</span>
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We are proud to serve our local Milton community. Let's have a real, no-pressure
            conversation about what matters most to your family. Call our Milton care line at{" "}
            <a href="tel:6479244532" className="text-teal-light font-semibold hover:underline">
              (647) 924-4532
            </a>{" "}
            or email{" "}
            <a href="mailto:care@wayacare.com" className="text-teal-light font-semibold hover:underline">
              care@wayacare.com
            </a>{" "}
            to speak with a care coordinator today.
          </p>
          <a
            href="https://calendly.com/wayacare-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-base inline-block"
          >
            Book a Free Consultation
          </a>
        </div>
      </Reveal>

      <Footer />
    </main>
  );
}
