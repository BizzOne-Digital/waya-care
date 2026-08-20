import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us — Waya Care | Home Care in the Greater Toronto Area",
  description:
    "Learn about Waya Care Corporation — our story, our mission, and the caregivers who deliver compassionate home care across the Greater Toronto Area.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="About Us"
        title="The Story Behind"
        highlight="Waya Care"
        description="A local, family-founded home care company built on one belief: real care starts with truly knowing the person behind it."
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl text-navy mb-4">
              Why We Started <span className="italic text-teal">Waya Care</span>
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Waya Care Corporation was founded in Milton, Ontario after our own family
              experienced how difficult it can be to find home care that feels personal instead
              of transactional. Too often, care plans are generic, caregivers change constantly,
              and families are left guessing about what's really happening at home.
            </p>
            <p className="text-slate leading-relaxed mb-4">
              We built Waya Care to be different. Every relationship starts with a real
              conversation — about routines, preferences, medical needs, and the small details
              that make someone feel like themselves. From there, we match a consistent caregiver
              who fits, not just whoever is available.
            </p>
            <p className="text-slate leading-relaxed">
              Today, we proudly serve seniors, adults with disabilities, and individuals recovering
              from illness or surgery across the Greater Toronto Area — with the same commitment
              we started with.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-teal-pale rounded-2xl p-6">
              <p className="font-display text-3xl text-navy mb-1">100%</p>
              <p className="text-slate text-sm">Personalized care plans, never one-size-fits-all</p>
            </div>
            <div className="bg-teal-pale rounded-2xl p-6">
              <p className="font-display text-3xl text-navy mb-1">24/7</p>
              <p className="text-slate text-sm">Support available when families need it most</p>
            </div>
            <div className="bg-navy rounded-2xl p-6">
              <p className="font-display text-3xl text-white mb-1">Local</p>
              <p className="text-white/70 text-sm">Proudly serving the Greater Toronto Area</p>
            </div>
            <div className="bg-navy rounded-2xl p-6">
              <p className="font-display text-3xl text-white mb-1">Reliable</p>
              <p className="text-white/70 text-sm">Insured, registered, and background-checked</p>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section className="py-20 bg-teal-pale">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-navy mb-4">
            Our Mission, <span className="italic text-teal">In One Sentence</span>
          </h2>
          <p className="text-slate text-lg leading-relaxed">
            To help every person we serve live safely, comfortably, and with dignity in the place
            they call home — supported by a caregiver they know and trust.
          </p>
          <p className="text-slate/70 text-sm mt-6">
            Waya Care is a Canadian registered corporation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
