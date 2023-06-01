import { Correo } from "../../icons/Correo";
import { GitHub } from "../../icons/GitHub";
import { Linkedin } from "../../icons/Linkedin";
import { Marcador } from "../../icons/Marcador";
import { ElementSocial } from "./ElementSocial";

export function Social() {
  return (
    <div className="flex flex-col gap-4">
      <ElementSocial text="edrosan" goTo="https://github.com/edrosan">
        <GitHub></GitHub>
      </ElementSocial>

      <ElementSocial text="edrosan" goTo="https://www.linkedin.com/in/edrodsan/">
        <Linkedin></Linkedin>
      </ElementSocial>

      <ElementSocial text="edo.rod.san@gmail.com" goTo="mailto:edo.rod.san@gmail.com">
        <Correo></Correo>
      </ElementSocial>

      <ElementSocial text="Puebla, México." goTo="https://goo.gl/maps/cMozHTmtnrhPS2RD9">
        <Marcador></Marcador>
      </ElementSocial>

    </div>
  );
}
