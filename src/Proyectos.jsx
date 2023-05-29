import { Proyecto } from "./Proyecto";
import imgCalculadora from "./assets/img/calculadora.png";

export function Proyectos() {
  return (
    <div className="mb-16 w-auto">
      <h1 className="text-xl text-[#1c1b1f] font-bold dark:text-[#e5e1e6]">
        PROYECTOS
      </h1>
      <h2 className="mb-2 text-[#1c1b1f] font-semibold dark:text-[#e5e1e6]">
        Aplicaciones Web
      </h2>

      <div className="w-full grid grid-cols-1 gap-4">
        <Proyecto
          tecnologias={["HTML", "CSS", "JavaScript"]}
          imagenProyecto={imgCalculadora}
          linkTo="https://calculadora-production-8756.up.railway.app/"
        ></Proyecto>

        <Proyecto
          tecnologias={["HTML", "CSS", "JavaScript"]}
          imagenProyecto={imgCalculadora}
          linkTo="https://calculadora-production-8756.up.railway.app/"
        ></Proyecto>

        <Proyecto
          tecnologias={["HTML", "CSS", "JavaScript"]}
          imagenProyecto={imgCalculadora}
          linkTo="https://calculadora-production-8756.up.railway.app/"
        ></Proyecto>
      </div>
    </div>
  );
}
