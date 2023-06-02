export function OpcNavbar({ children, goTo, changeOpenMenu }) {
  const handleClick = () => {
    changeOpenMenu()
  }

  return (
    <a
      href={goTo}
      onClick={handleClick}
      className="w-auto  px-2 py-2 flex items-center gap-4   rounded-lg font-normal text-lg text-[#1c1b1f]   hover:text-[#5148d7] dark:text-[#e5e1e6] dark:hover:text-[#c3c0ff] lg:text-base lg:font-semibold lg:py-0 "
    >
      {children}
    </a>
  );
}
