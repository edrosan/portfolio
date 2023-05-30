import { useState } from "react";
import { IconDarkMode } from "./IconDarkMode";
import { IconLightMode } from "./IconLightMode";

export function ButtonDarkMode({ darkMode, changeDarkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  const changeIconDarkMode = () => {
    changeDarkMode();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button
        data-tooltip-target="tooltip-bottom"
        data-tooltip-placement="bottom"
        type="button "
        className="w-auto h-full hover:bg-[#e4e1ec] hover:text-[#47464f] dark:hover:bg-[#47464f] dark:hover:text-[#c8c5d0] px-4 rounded-lg"
        onClick={changeIconDarkMode}
      >
        {isDarkMode ? (
          <IconDarkMode></IconDarkMode>
        ) : (
          <IconLightMode></IconLightMode>
        )}
      </button>

      <div
        id="tooltip-bottom"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#ffffff] bg-[#5e5c71] rounded-lg shadow-sm opacity-0 tooltip dark:bg-[#c7c4dd] dark:text-[#2f2e42]"
      >
        {isDarkMode ? "Modo oscuro" : "Modo claro"}

        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}
