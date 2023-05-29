import iconNight from "./assets/img/icon-night.svg";
import { IconLightMode } from "./IconLightMode";
import iconGitHub from "./assets/img/github.png";
import { useState } from "react";
import { IconDarkMode } from "./IconDarkMode";

export function Navbar({ changeDarkMode, darkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  const changeIconDarkMode = () => {
    changeDarkMode();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-end gap-3 w-full h-8">
      <div className="w-auto h-full">
        <img
          title="GitHub"
          alt="icono de GitHub"
          className=" w-auto h-full"
          src={iconGitHub}
        />
      </div>

      <div className="w-auto h-full">
        <button type="button" className="w-auto h-full" onClick={changeIconDarkMode} title="Dark Mode">
          {isDarkMode ? (
            <IconDarkMode></IconDarkMode>
          ) : (
            <IconLightMode></IconLightMode>
          )}
        </button>
      </div>
    </div>
  );
}
