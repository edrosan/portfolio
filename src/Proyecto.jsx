import { ImgProyecto } from "./components/main/Proyectos/ImgProyecto";
import { InfoProyecto } from "./components/main/Proyectos/InfoProyecto";

export function Proyecto({
  imagenProyecto,
  linkTo,
  nombre,
  descripcion,
  tecnologias,
}) {
  return (
    <a
      href={linkTo}
      className="w-full flex flex-col rounded-lg border border-[#e4e1ec] dark:border-none"
      target="_blank"
      rel="noreferrer"
    >
      <ImgProyecto img={imagenProyecto}></ImgProyecto>

      <InfoProyecto
        nombre={nombre}
        tecnologias={tecnologias}
        descripcion={descripcion}
      ></InfoProyecto>
    </a>
  );
}
