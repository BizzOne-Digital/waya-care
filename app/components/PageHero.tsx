import Link from "next/link";
import { Reveal } from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="relative bg-navy pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-teal/40" />
      <Reveal className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-5">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-teal-light">{eyebrow}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-white mb-5">
          {title} {highlight && <span className="italic text-teal-light">{highlight}</span>}
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">{description}</p>
      </Reveal>
    </section>
  );
}
