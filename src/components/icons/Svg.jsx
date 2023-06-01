export function Svg({ children, w="w-[24px]", h="h-[24px]"}) {

  

  return (
    <svg
      className={`${w} ${h} m-0 flex justify-start fill-[#1c1b1f] group-hover:fill-[#5148d7] dark:fill-[#e5e1e6] dark:group-hover:fill-[#c3c0ff]`}
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}
