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
        <Proyecto
          tecnologias={["HTML", "CSS", "JavaScript"]}
          img="https://images.unsplash.com/photo-1684524961062-1afe34e5c347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
        ></Proyecto>
        <Proyecto
          tecnologias={["HTML", "CSS", "JavaScript"]}
          img="https://images.unsplash.com/photo-1683470432347-7b40520fb583?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        ></Proyecto>
      </div>
    </div>
  );
}
