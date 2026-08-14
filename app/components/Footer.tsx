import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12" stagger={0.08}>
          {/* Brand */}
          <StaggerItem className="lg:col-span-1">
            <span className="font-display font-bold text-xl block mb-4">Waya<span className="text-teal-light">Care</span></span>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Compassionate, personalized home care for seniors and families across the Halton Region.
            </p>
            <div className="flex gap-2">
              {["M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"].map((path, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </StaggerItem>

          {/* Services */}
          <StaggerItem>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-teal-light">Services</h4>
            <ul className="space-y-2">
              {["Personal Care", "Companionship", "Dementia Care", "Respite Care", "Overnight Care", "Hospital-to-Home", "Transportation"].map((s) => (
                <li key={s}>
                  <a href="/services" className="text-white/60 text-sm hover:text-teal-light transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Company */}
          <StaggerItem>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-teal-light">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Why Waya Care", href: "/why-us" },
                { label: "Our Promise", href: "/testimonials" },
                { label: "FAQ", href: "/faq" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 text-sm hover:text-teal-light transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-teal-light">Contact</h4>
            <ul className="space-y-3">
              {[
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "(647) 924-4532" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "info@wayacare.com" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", text: "Milton, Ontario" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-white/60 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a href="/contact" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-block hover:scale-105 transition-transform">
                Free Consultation
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Waya Care Corporation. All rights reserved. Milton, Ontario.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
