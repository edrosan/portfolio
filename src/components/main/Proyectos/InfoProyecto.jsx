import { Tecnologias } from "./Tecnologias";
import { TextInfo } from "./TextInfo";
import { TituloInfo } from "./TituloInfo";

export function InfoProyecto({ nombre, tecnologias, descripcion }) {
  return (
    <div className="w-full flex flex-col bg-[#fffbff] text-[#1c1b1f] border border-t-[#e4e1ec] rounded-b-lg  dark:bg-[#1c1b1f] dark:text-[#e5e1e6] dark:border-[#47464f]">
      <div className="grid grid-cols-2">
        <div className="pl-2 py-2 border border-transparent border-r-[#e4e1ec] dark:border-r-[#47464f]">
          <TituloInfo>nombre</TituloInfo>
          <TextInfo>{nombre}</TextInfo>
        </div>

        <div className="flex flex-col  px-2 py-2 ">
          <TituloInfo>tecnologias</TituloInfo>
          <Tecnologias tecnologias={tecnologias}></Tecnologias>
        </div>
      </div>

      <div className="px-2 py-2  border border-transparent	 border-t-[#e4e1ec] dark:border-t-[#47464f]">
        <TituloInfo>descripcion</TituloInfo>
        <TextInfo>{descripcion}</TextInfo>
      </div>
    </div>
  );
}
