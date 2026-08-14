import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export default function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "Personalized Care Plans",
      desc: "Every client receives care shaped around their needs, routines, and preferences — not a generic template.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      number: "02",
      title: "Trusted Caregiver Relationships",
      desc: "We build consistent caregiver-client matches. Familiar faces create comfort, safety, and real connection.",
      icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
    },
    {
      number: "03",
      title: "Transparent Communication",
      desc: "Families are never left wondering. We keep you informed, involved, and confident every step of the way.",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      number: "04",
      title: "Flexible & Scalable Support",
      desc: "A few hours a week or around-the-clock care — we adjust as your family's needs evolve over time.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      number: "05",
      title: "Respect & Dignity Always",
      desc: "Every client deserves patience, dignity, and respect — regardless of age, ability, or level of care required.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
    {
      number: "06",
      title: "Locally Rooted, GTA-Wide",
      desc: "Proudly serving the Greater Toronto Area, we're committed to caring for our neighbours the same way we'd want for our own families.",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-light/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-teal-light" />
            <span className="text-teal-light text-sm font-semibold tracking-widest uppercase">Our Difference</span>
            <div className="h-px w-8 bg-teal-light" />
          </div>
          <h2 className="font-display text-white text-4xl mb-4">
            Why Families Choose <span className="italic text-teal-light">Waya Care</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We don't just provide care — we become a trusted part of your family's journey.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <StaggerItem
              key={i}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-teal-light/40 hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/40 group-hover:scale-110 transition-all">
                  <svg className="w-5 h-5 text-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <span className="text-teal-light/40 font-display font-bold text-2xl">{r.number}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* CTA strip */}
        <Reveal delay={0.1} className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-teal to-teal-light text-center">
          <h3 className="font-display text-white text-2xl mb-3">Ready to get started?</h3>
          <p className="text-white/85 mb-6">Let's talk about your family's care needs — no obligation, no pressure.</p>
          <a href="/contact" className="bg-white text-teal font-bold px-8 py-3.5 rounded-full inline-block hover:shadow-xl transition-all hover:-translate-y-1">
            Book a Free Care Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
