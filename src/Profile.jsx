import user from "../src/assets/img/user.png";
import { Titulo } from "./components/Titulo";

export function Profile() {
  return (
    <div
      id="inicio"
      className="w-full h-100% mb-24 flex flex-col items-start scroll-mt-[80px] bg-[rgb(236, 238, 239)]  md:flex-row justify-between dark:bg-[#1c1b1f]"
    >
      <div className="w-full h-full mb-4 flex flex-col ">
        <h1 
        className="text-5xl mb-1 text-[#1c1b1f]  antialiased font-bold font-sans dark:text-[#e5e1e6] lg:text-7xl lg:leading-[82px]">
          EDUARDO RODRIGUEZ
        </h1>
        <h2 className="text-5xl h-full pb-2 font-bold antialiased text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 md:text-6xl lg:h-20">
          Frontend Developer
        </h2>
        <p className="mb-4 text-3xl text-[#1c1b1f] dark:text-[#e5e1e6] ">
          Un desarrollador enfocado en el frontend que construye sitios web que
          conducen al éxito del producto en general.
        </p>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover  rounded-lg lg:w-[300px] lg:h-[300px]"
        src={user}
      />
    </div>
  );
}
