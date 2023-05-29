import { IconLightMode } from "./IconLightMode";
import { useState } from "react";
import { IconDarkMode } from "./IconDarkMode";
import { IconGitHub } from "./IconGitHub";

export function Navbar({ changeDarkMode, darkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  const changeIconDarkMode = () => {
    changeDarkMode();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-center gap-3 w-full h-[40px]">
      
      <IconGitHub></IconGitHub>
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
