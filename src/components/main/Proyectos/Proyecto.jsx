import { ImgProyecto } from "./ImgProyecto";
import { InfoProyecto } from "./InfoProyecto";

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
      className="w-full flex flex-col justify-between rounded-lg border border-[#e4e1ec] shadow-lg dark:border-none"
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
