import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export default function About() {
  const values = [
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "Compassionate Caregivers",
      desc: "We believe great care begins with people who genuinely care. Our team is selected for warmth, reliability, and skill.",
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Personalized Plans",
      desc: "Every care plan is built around the individual — their routines, preferences, and goals. No one-size-fits-all.",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Family Peace of Mind",
      desc: "Families stay informed and supported. We ensure you feel confident in every step of your loved one's care.",
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reliable & Consistent",
      desc: "Dependable scheduling, responsive communication, and consistent caregivers you can count on.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image grid */}
          <Reveal y={40} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                  alt="Caregiver with senior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8 transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                  alt="Home care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <Reveal delay={0.3} y={20} className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 border border-teal-pale">
              <div className="w-12 h-12 bg-teal-pale rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">Licensed & Insured</p>
                <p className="text-slate text-xs">Ontario Registered Corp.</p>
              </div>
            </Reveal>
          </Reveal>

          {/* Right: Content */}
          <div className="lg:pl-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-teal-light" />
                <span className="text-teal text-sm font-semibold tracking-widest uppercase">About Waya Care</span>
              </div>
              <h2 className="font-display text-4xl text-navy mb-6 leading-tight">
                Compassionate Care.<br />
                <span className="italic text-teal">Built on Trust.</span>
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Founded in Milton, Ontario, Waya Care Corporation was created with one conviction: quality care begins with truly understanding the person behind the care.
              </p>
              <p className="text-slate leading-relaxed mb-8">
                We help seniors, adults with disabilities, and individuals needing support live safely, comfortably, and independently — in the place they call home. Our caregivers build relationships grounded in trust, respect, dignity, and consistency.
              </p>
            </Reveal>

            {/* Values grid */}
            <StaggerGroup className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <StaggerItem key={i} className="flex gap-3 p-4 rounded-xl bg-cream hover:bg-teal-pale transition-colors hover:-translate-y-1 duration-300">
                  <div className="w-10 h-10 bg-teal-pale rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">{v.title}</p>
                    <p className="text-slate text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.2} className="mt-8">
              <a href="/contact" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-full inline-block hover:scale-105 transition-transform">
                Learn More About Us
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
