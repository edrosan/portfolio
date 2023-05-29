import iconNight from "./assets/img/night.png"
import iconGitHub from "./assets/img/github.png"

export function Navbar( { changeDarkMode} ) {
  return (
    <div className="flex justify-end gap-3 w-full h-8">
      <div className="w-auto h-full"><img title="GitHub" alt="icono de GitHub" className=" w-auto h-full" src={iconGitHub} /></div>
      
      <div className="w-auto h-full">
        <button className="w-auto h-full" onClick={changeDarkMode}>
          <img className=" w-auto h-full" src={iconNight} />
        </button>
      </div>
    </div>
  );
}
