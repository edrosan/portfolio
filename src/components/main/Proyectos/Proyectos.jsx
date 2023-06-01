import { Proyecto } from "./Proyecto";
import { Titulo } from "../../general/Titulo";
import imgCalculadora from "../../../assets/img/calculadora.png";
import imgContadorClics from "../../../assets/img/contador-clics.png";

export function Proyectos() {
  return (
    <div id="proyectos" className="mb-16 w-auto h-auto scroll-mt-[50px]  ">
      <Titulo>Proyectos</Titulo>
      
      <h2 className="text-xl mb-4 text-[#1c1b1f] font-semibold dark:text-[#e5e1e6]">
        Aplicaciones web
      </h2>

      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Proyecto
          imagenProyecto={imgCalculadora}
          linkTo="https://calculadora-production-8756.up.railway.app/"
          nombre="Calculadora"
          tecnologias={["HTML", "CSS", "JavaScript"]}
          descripcion="Calculadora web básica"
        ></Proyecto>

        <Proyecto
          imagenProyecto={imgContadorClics}
          linkTo="https://edrosan.github.io/contador_clics/"
          nombre="Contador clics"
          tecnologias={["React", "CSS"]}
          descripcion="Contador basico de clics"
        ></Proyecto>

      </div>
    </div>
  );
}
