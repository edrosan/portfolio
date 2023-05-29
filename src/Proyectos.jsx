import { Proyecto } from "./Proyecto";
import imgCalculadora from "./assets/img/calculadora.png"

export function Proyectos() {
  return (
    <div>
      <h1 className="text-xl text-zinc-600 font-bold">PROYECTOS</h1>
      <h2 className="mb-2 text-zinc-600 font-semibold">Aplicaciones Web</h2>
      <div className="flex flex-col gap-2">
        <Proyecto
          tecnologias={["HTML", "CSS", "JavaScript"]}
          imagenProyecto={imgCalculadora}
          linkTo="https://calculadora-production-8756.up.railway.app/"
        ></Proyecto>
        
      </div>
    </div>
  );
}
