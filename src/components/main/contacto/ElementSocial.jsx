import { Svg } from "../../icons/Svg";

export function ElementSocial({ children, text, goTo = "#" }) {
  return (
    <a
      href={goTo}
      target="_blank"
      rel="noreferrer"
      className="w-full h-auto flex items-end gap-4 md:gap-2"
    >
      <Svg w="w-[35px] md:w-[30px]" h="h-[35px] md:h-[30px]">
        {children}
      </Svg>
      <p className="text-[#1c1b1f] dark:text-[#e5e1e6]">{text}</p>
    </a>
  );
}
