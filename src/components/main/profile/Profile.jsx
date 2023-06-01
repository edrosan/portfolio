import user from "../../../../src/assets/img/user.png";
import { ImgProfile } from "./ImgProfile";
import { InfoProfile } from "./InfoProfile";
import { TituloEfectoProfile } from "./TituloEfectoProfile";
import { TituloProfile } from "./TituloProfile";

export function Profile() {
  return (
    <div
      id="inicio"
      className="mb-16 flex flex-col items-start scroll-mt-[80px]   lg:flex-row lg:items-center justify-between dark:bg-[#1c1b1f]"
    >
      <div className="w-auto h-auto mb-4 flex flex-col ">
        <TituloProfile>EDUARDO RODRIGUEZ</TituloProfile>

        <TituloEfectoProfile>Frontend Developer</TituloEfectoProfile>

        <InfoProfile>
          Un desarrollador enfocado en el frontend que construye sitios que
          conducen al éxito del producto.
        </InfoProfile>
      </div>
      
      <ImgProfile img={user}></ImgProfile>
    </div>
  );
}
