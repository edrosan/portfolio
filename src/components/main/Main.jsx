import { Contacto } from "../../Contacto";
import { Profile } from "../../Profile";
import { Proyectos } from "../../Proyectos";
import { Skills } from "../../Skills";
import { Tooltip } from "flowbite";

export function Main() {
  return (
    <main className="w-full h-full flex flex-col mt-[50px]  px-4 py-12 md:mx-auto md:w-[1024px]">
      <Profile></Profile>

      <Skills></Skills>

      <Proyectos></Proyectos>

      <Contacto></Contacto>
    </main>
  );
}
