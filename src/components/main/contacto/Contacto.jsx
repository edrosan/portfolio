import { Titulo } from "../../general/Titulo";
import { Formulario } from "./Formulario";
import { Social } from "./Social";

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
