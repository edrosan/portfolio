import { Svg } from "../../icons/Svg";

export function ElementSocial({ children, text }) {
  return (
    <div className="w-full h-auto flex items-center gap-4">
      <Svg w="w-[50px]" h="h-[50px]">
        {children}
      </Svg>
      <p className="text-[#1c1b1f] dark:text-[#e5e1e6]">{text}</p>
    </div>
  );
}
