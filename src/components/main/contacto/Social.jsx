import { Correo } from "../../icons/Correo";
import { GitHub } from "../../icons/GitHub";
import { Linkedin } from "../../icons/Linkedin";
import { Svg } from "../../icons/Svg";
import { ElementSocial } from "./ElementSocial";

export function Social() {
  return (
    <div className="flex flex-col gap-4">
      <ElementSocial text="edrosan">
        <GitHub></GitHub>
      </ElementSocial>

      <ElementSocial text="edrosan">
        <Linkedin></Linkedin>
      </ElementSocial>

      <ElementSocial text="edo.rod.san@gmail.com">
        <Correo></Correo>
      </ElementSocial>

    </div>
  );
}
