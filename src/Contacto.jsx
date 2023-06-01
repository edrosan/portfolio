import { Titulo } from "./components/Titulo";
import { Formulario } from "./components/main/contacto/Formulario";
import { Social } from "./components/main/contacto/Social";

export function Contacto() {
  return (
    <div id="contacto" className="">
      <Titulo>Contactame</Titulo>

      <div className="flex flex-col gap-4">
        <Formulario></Formulario>
        <Social></Social>
      </div>
    </div>
  );
}
