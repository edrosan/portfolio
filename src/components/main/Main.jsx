import { Contacto } from "../../Contacto";
import { Profile } from "../../Profile";
import { Proyectos } from "../../Proyectos";
import { Skills } from "../../Skills";
import { Tooltip } from "flowbite";

export function Main() {
  return (
    <main className="mt-20 mx-4 flex flex-col md:w-auto xl:w-[1024px] xl:mx-auto">
      <Profile></Profile>

      {/* <Skills></Skills> */}

      {/* <Proyectos></Proyectos> */}

      {/* <Contacto></Contacto> */}
    </main>
  );
}
