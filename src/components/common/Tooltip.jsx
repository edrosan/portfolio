

export function Tooltip({ name, children }) {
  return (
    <div
      id={`tooltip-${name}`}
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium border border-[#e4e1ec] shadow-md text-[#1c1b1f] bg-[#fffbff] rounded-lg opacity-0 tooltip dark:bg-[#1c1b1f] dark:text-[#e5e1e6] dark:border-[#47464f]"
    >
      {children}
    </div>
  );
}
