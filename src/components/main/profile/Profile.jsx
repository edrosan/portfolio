import user from "../../../../src/assets/img/lalo.jpg";
import { ImgProfile } from "./ImgProfile";
import { InfoProfile } from "./InfoProfile";
import { TituloEfectoProfile } from "./TituloEfectoProfile";
import { TituloProfile } from "./TituloProfile";

export function Profile() {
  return (
    <div
      id="inicio"
      className="w-full h-auto mb-16 flex flex-col items-start scroll-mt-[80px]   lg:flex-row lg:items-center justify-between dark:bg-[#1c1b1f] lg:mt-8 lg:mb-16"
    >
      <div className="w-full h-auto mb-4 flex flex-col lg:w-auto lg:tracking-wide">
        <TituloProfile>EDUARDO RODRIGUEZ</TituloProfile>

        <TituloEfectoProfile>Frontend Developer</TituloEfectoProfile>

        <InfoProfile>
          Desarrollador web enfocado en el frontend que construye sitios que
          conducen al éxito del producto.
        </InfoProfile>
      </div>
      
      <ImgProfile img={user}></ImgProfile>
    </div>
  );
}
