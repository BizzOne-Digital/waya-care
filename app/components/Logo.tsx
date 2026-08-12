export default function LogoMark({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div className={`${className} rounded-full bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0`}>
      <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none">
        {/* House */}
        <path d="M12 3.5L3.5 10.5V20a1 1 0 001 1h4.5v-5.5a1 1 0 011-1h4a1 1 0 011 1V21h4.5a1 1 0 001-1v-9.5L12 3.5z" fill="white" opacity="0.95" />
        {/* Drop inside the house */}
        <path d="M12 12.2c-1 1.2-1.7 2.15-1.7 2.95 0 1 .78 1.75 1.7 1.75s1.7-.75 1.7-1.75c0-.8-.7-1.75-1.7-2.95z" fill="#5C8A5C" />
      </svg>
    </div>
  );
}
