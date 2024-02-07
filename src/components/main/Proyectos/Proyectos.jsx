import { Proyecto } from "./Proyecto";
import { Titulo } from "../../common/Titulo";
import jelWeb from "../../../assets/img/jel-web-3.png";
import karyoWeb from "../../../assets/img/karyo-web.png";

export function Proyectos() {
  return (
    <div
      id="proyectos"
      className="mb-16 w-auto h-auto scroll-mt-[50px]  lg:my-16"
    >
      <Titulo>Proyectos</Titulo>

      <h2 className="text-xl mb-4 text-[#1c1b1f] font-semibold dark:text-[#e5e1e6]">
        Aplicaciones web
      </h2>

      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Proyecto
          imagenProyecto={jelWeb}
          linkTo="https://jel-team.vercel.app/"
          nombre="Sistema de votación descentralizado"
          tecnologias={["React Js", "Tailwind CSS", "Rust", "Substrate"]}
          descripcion="Sistema de votación descentralizado basado en blockchain"
        />

        <Proyecto
          imagenProyecto={karyoWeb}
          linkTo="https://karyodiagnosticoveterinario.com/"
          nombre="Diagnostico veterinario Karyo"
          tecnologias={["React Js", "Tailwind CSS", "Leaf PHP", "MySQL"]}
          descripcion="Sistema de agenda y diagnostico veterinario"
        />

        {/* <Proyecto
          imagenProyecto={imgCalculadora}
          linkTo="https://calculadora-production-8756.up.railway.app/"
          nombre="Calculadora"
          tecnologias={["HTML", "CSS", "JavaScript"]}
          descripcion="Calculadora web básica"
        />


        
        <Proyecto
          imagenProyecto={imgContadorClics}
          linkTo="https://edrosan.github.io/contador_clics/"
          nombre="Contador clics"
          tecnologias={["React", "CSS"]}
          descripcion="Contador basico de clics"
        ></Proyecto> */}
      </div>
    </div>
  );
}
