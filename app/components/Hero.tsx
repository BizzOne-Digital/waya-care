"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover md:hidden"
        style={{ backgroundImage: "url('/mobile-hero.png')", backgroundPosition: "top center" }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* Overlay: dark at top for text contrast, fading to show the photo below (mobile) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, #0F2A4A 0%, #0F2A4A 40%, rgba(15,42,74,0.85) 60%, rgba(15,42,74,0.35) 100%)",
        }}
      />

      {/* Overlay: transparent over the photo on the left, dark toward the right for text contrast (desktop) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,42,74,0.05) 0%, rgba(15,42,74,0.7) 35%, rgba(15,42,74,0.98) 55%, #0F2A4A 70%, #0F2A4A 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-24 pb-16 w-full flex justify-end">
        <div className="max-w-xl w-full">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            <div className="h-px w-8 md:w-10 bg-teal-light" />
            <span className="text-teal-light text-xs md:text-sm font-semibold tracking-widest uppercase">
              Milton, Ontario · Halton Region
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white mb-3 md:mb-6 leading-tight"
            style={{
              fontSize: "clamp(1.9rem, 7vw, 4rem)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            Compassionate Care.{" "}
            <span className="italic text-teal-light">Right at Home.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/85 text-sm sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.35s",
            }}
          >
            Personalized home care that helps your loved ones live safely, comfortably, and independently. Dependable support — when you need it most.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 md:gap-4 mb-5 md:mb-12"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.5s",
            }}
          >
            <a
              href="/contact"
              className="btn-primary text-white font-semibold px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21s-6.716-4.35-9.428-8.06C.24 9.51 1.1 5.6 4.318 4.05c2.1-1.01 4.53-.38 5.868 1.42L12 7.64l1.814-2.17c1.338-1.8 3.768-2.43 5.868-1.42 3.218 1.55 4.078 5.46 1.746 8.89C18.716 16.65 12 21 12 21z" />
              </svg>
              Request a Free Consultation
            </a>
            <a
              href="/services"
              className="btn-outline text-white font-semibold px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-base inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Explore Services
            </a>
          </div>

          {/* Trust stats */}
          <div
            className="flex flex-wrap gap-3 md:gap-6"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "all 0.7s ease 0.65s",
            }}
          >
            {[
              { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197", label: "Seniors Supported" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Compassionate Caregivers" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Trusted by Families" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 max-w-[9rem]">
                <div className="w-7 h-7 md:w-10 md:h-10 rounded-full border border-white/30 bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <span className="text-white/80 text-xs md:text-sm leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 900 0 600 30C300 60 0 20 0 40Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
