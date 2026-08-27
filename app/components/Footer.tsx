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
              Compassionate, personalized home care for seniors and families across the Greater Toronto Area.
            </p>
            <div className="flex gap-2">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/waya.care?igsh=MTR6d2p3cTRvNzBtaw%3D%3D&utm_source=qr",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.802c-3.153 0-3.507.012-4.744.069-2.67.121-3.915 1.387-4.036 4.036-.057 1.237-.067 1.605-.067 4.63 0 3.023.011 3.393.067 4.629.121 2.646 1.363 3.915 4.036 4.036 1.237.057 1.591.069 4.744.069 3.153 0 3.507-.012 4.744-.069 2.668-.121 3.915-1.393 4.036-4.036.057-1.236.067-1.606.067-4.629 0-3.025-.011-3.393-.067-4.63-.121-2.649-1.365-3.915-4.036-4.036-1.237-.057-1.591-.069-4.744-.069zm0 4.883a5.152 5.152 0 110 10.304 5.152 5.152 0 010-10.304zm0 8.499a3.347 3.347 0 100-6.694 3.347 3.347 0 000 6.694zm6.406-8.702a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1KeDArNeVg/?mibextid=wwXlfr",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
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

            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 mt-8 text-teal-light">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <a href="/milton" className="text-white/60 text-sm hover:text-teal-light transition-colors">Milton, ON</a>
              </li>
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
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "care@wayacare.com" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", text: "Serving Greater Toronto Area" },
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
              <a href="https://calendly.com/wayacare-info/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-block hover:scale-105 transition-transform">
                Free Consultation
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Waya Care Corporation. All rights reserved. Serving the Greater Toronto Area.
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
