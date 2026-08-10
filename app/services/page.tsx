import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Services from "../components/Services";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Home Care Services — Waya Care | Milton & Halton Region",
  description:
    "Explore Waya Care's full range of home care services: personal care, companionship, dementia support, respite care, overnight care, hospital-to-home support, and transportation.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Services"
        title="Home Care Services"
        highlight="Built Around You"
        description="From a few hours of companionship to full-time, around-the-clock support — every service is shaped around your family's real needs, not a fixed package."
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-display text-3xl text-teal mb-1">Flexible</p>
            <p className="text-slate text-sm">Hourly, daily, overnight, or 24-hour care — scaled up or down as needs change.</p>
          </div>
          <div>
            <p className="font-display text-3xl text-teal mb-1">Consistent</p>
            <p className="text-slate text-sm">Matched caregivers who stay with your family, not a rotating roster of strangers.</p>
          </div>
          <div>
            <p className="font-display text-3xl text-teal mb-1">Transparent</p>
            <p className="text-slate text-sm">Clear care plans and regular updates, so you always know what's happening.</p>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Not Sure Which Service <span className="italic text-teal-light">Fits Your Situation?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Most families start with a free, no-obligation consultation. We'll ask about the
            person you're caring for, talk through options, and recommend a plan — with zero
            pressure to commit.
          </p>
          <a
            href="/contact"
            className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-base inline-block"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
