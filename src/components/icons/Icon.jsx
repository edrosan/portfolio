import { Tooltips } from "../common/Tooltips";
import { Svg } from "./Svg";
import { Tooltip }  from "flowbite";




export function Icon({ children, goTo, name, textTooltip }) {
  return (
    <>
      <a
        data-tooltip-target={`tooltip-${name}`}
        href={goTo}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 flex items-center  rounded-lg  hover:bg-[#e4e1ec] hover:text-[#47464f] dark:hover:bg-[#47464f] dark:hover:text-[#c8c5d0] "
      >
        <Svg>{children}</Svg>
      </a>

      <Tooltips name={name}>{textTooltip}</Tooltips>
    </>
  );
}
