import { useState } from "react";
import { DarkMode } from "./components/icons/DarkMode";
import { LightMode } from "./components/icons/LightMode";
import { Tooltip } from "./Tooltip";
import { Svg } from "./components/icons/Svg";

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
        className="w-auto h-full hover:bg-[#e4e1ec] hover:text-[#47464f] dark:hover:bg-[#47464f] dark:hover:text-[#c8c5d0] px-4 rounded-lg"
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

      <Tooltip name={name}>{isDarkMode ? "Modo oscuro" : "Modo claro"}</Tooltip>
    </>
  );
}
