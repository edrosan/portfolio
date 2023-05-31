import user from "../src/assets/img/user.png";
import { Titulo } from "./components/Titulo";
import { ImgProfile } from "./components/main/profile/ImgProfile";
import { InfoProfile } from "./components/main/profile/InfoProfile";
import { TituloEfectoProfile } from "./components/main/profile/TituloEfectoProfile";
import { TituloProfile } from "./components/main/profile/TituloProfile";

export function Profile() {
  return (
    <div
      id="inicio"
      className="flex flex-col items-start scroll-mt-[80px]  md:flex-row justify-between dark:bg-[#1c1b1f]"
    >
      <div className="w-auto h-auto mb-4 flex flex-col ">
        <TituloProfile>EDUARDO RODRIGUEZ</TituloProfile>

        <TituloEfectoProfile>Frontend Developer</TituloEfectoProfile>

        <InfoProfile>
          Un desarrollador enfocado en el frontend que construye sitios web que
          conducen al éxito del producto en general.
        </InfoProfile>
      </div>
      
      <ImgProfile img={user}></ImgProfile>
    </div>
  );
}
