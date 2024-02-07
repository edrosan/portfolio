import { useState } from "react";
import { DarkMode } from "../icons/DarkMode";
import { LightMode } from "../icons/LightMode";
import { Tooltips } from "../common/Tooltips";
import { Svg } from "../icons/Svg";

export function ButtonDarkMode({ darkMode, changeDarkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  const name = "bottom";

  const changeIconDarkMode = () => {
    changeDarkMode();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button
        data-tooltip-target={`tooltip-${name}`}
        data-tooltip-placement="bottom"
        type="button "
        className="group w-auto h-full hover:bg-[#e4e1ec] hover:text-[#47464f] dark:hover:bg-[#47464f] dark:hover:text-[#c8c5d0] px-4 rounded-lg"
        onClick={changeIconDarkMode}
      >
        {isDarkMode ? (
          <Svg>
            <DarkMode></DarkMode>
          </Svg>
        ) : (
          <Svg>
            <LightMode></LightMode>
          </Svg>
        )}
      </button>

      <Tooltips name={name}>{isDarkMode ? "Modo oscuro" : "Modo claro"}</Tooltips>
    </>
  );
}
