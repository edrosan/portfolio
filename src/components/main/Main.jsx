import { Contacto } from "../../Contacto";
import { Profile } from "../../Profile";
import { Proyectos } from "../../Proyectos";
import { Skills } from "../../Skills";
import { Tooltip } from "flowbite";

export function Main() {
  return (
    <main className="mt-[50px] mx-4 flex flex-col  md:mx-auto md:w-[1024px]">
      <Profile></Profile>

      {/* <Skills></Skills> */}

      {/* <Proyectos></Proyectos> */}

      {/* <Contacto></Contacto> */}
    </main>
  );
}
