export function OpcNavbar({ children, goTo }) {
  return (
    <a
      href={goTo}
      className=" flex items-center gap-4 px-4 rounded-lg font-bold text-xl text-[#1c1b1f] dark:text-[#e5e1e6] hover:bg-[#e4e1ec] hover:text-[#47464f] dark:hover:bg-[#47464f] dark:hover:text-[#c8c5d0]"
    >
      {children}
      
    </a>
  );
}
