import { Svg } from "../../icons/Svg";

export function ElementSocial({ children, text, goTo = "#" }) {
  return (
    <a
      href={goTo}
      target="_blank"
      rel="noreferrer"
      className="w-full h-auto flex items-end gap-4"
    >
      <Svg w="w-[35px]" h="h-[35px]">
        {children}
      </Svg>
      <p className="text-[#1c1b1f] dark:text-[#e5e1e6]">{text}</p>
    </a>
  );
}
