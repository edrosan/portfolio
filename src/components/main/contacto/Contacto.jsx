import { Titulo } from "../../common/Titulo";
import { Formulario } from "./Formulario";
import { Social } from "./Social";


export function Contacto() {
  

  return (
    <div id="contacto" className="">
      <Titulo>Contactame</Titulo>

      <div className="flex flex-col gap-4">
        <Formulario></Formulario>

        {/* <button onClick={action}>click</button> */}
        <Social></Social>
      </div>
    </div>
  );
}
