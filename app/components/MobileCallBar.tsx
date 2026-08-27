export default function MobileCallBar() {
  return (
    <a
      href="tel:6479244532"
      className="md:hidden fixed top-0 left-0 right-0 z-[60] h-9 bg-teal text-white flex items-center justify-center gap-2 text-sm font-semibold"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call Now: (647) 924-4532
    </a>
  );
}
