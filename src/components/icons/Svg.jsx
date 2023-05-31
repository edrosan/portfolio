export function Svg({ children}) {
  return (
    <svg
      className={`w-[20px] h-[24px] fill-[#1c1b1f] group-hover:fill-[#5148d7] dark:fill-[#e5e1e6] dark:group-hover:fill-[#c3c0ff]`}
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}
