import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Waya Care | Home Care in the Greater Toronto Area",
  description:
    "Get in touch with Waya Care for a free home care consultation. Serving the Greater Toronto Area.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About"
        highlight="Your Care Needs"
        description="Whether you're looking for support for yourself, a parent, or someone you love — we're here to listen. Free, no-obligation consultation."
      />

      <Contact />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl text-navy mb-3">
            Prefer to <span className="italic text-teal">Book a Time Directly?</span>
          </h2>
          <p className="text-slate text-lg mb-8">
            Pick a time that works for you and we'll call to talk through your needs.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              src="https://calendly.com/wayacare-info/30min"
              title="Book a Free Consultation"
              width="100%"
              height="700"
              frameBorder="0"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="font-semibold text-navy mb-1">Call Us</p>
            <p className="text-slate text-sm">(647) 924-4532</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="font-semibold text-navy mb-1">Email Us</p>
            <p className="text-slate text-sm">info@wayacare.com</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="font-semibold text-navy mb-1">Service Area</p>
            <p className="text-slate text-sm">Serving the Greater Toronto Area</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
