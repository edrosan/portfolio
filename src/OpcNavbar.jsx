export function OpcNavbar({ children, goTo }) {
  return (
    <a
      href={goTo}
      className="w-auto px-2 py-2 flex items-center gap-4   rounded-lg font-bold text-lg text-[#1c1b1f] hover:bg-[#fffbff] hover:text-[#5148d7] dark:text-[#e5e1e6]  dark:hover:bg-[#47464f] dark:hover:text-[#c3c0ff]"
    >
      {children}
    </a>
  );
}
