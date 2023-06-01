import { Input } from "./Input";
import { Label } from "./Label";
import { SubmitButton } from "./SubmitButton";

export function Formulario() {
  return (
    <form className="w-full mb-8 font-sans rounded-lg p-4  border border-[#e4e1ec] shadow-lg dark:border-[#47464f]">
      <h2 className="text-xl mb-4 text-[#1c1b1f] font-semibold dark:text-[#e5e1e6]">
        Envia un correo rapido
      </h2>
      <div className="block mb-4">
        <Label forInput="nombre">Nombre</Label>
        <Input placeholder="Ingresa tu nombre" name="nombre" type="text" />
      </div>
      <div className="block mb-4">
        <Label forInput="correo">Correo</Label>
        <Input placeholder="Ingresa tu correo" name="correo" type="email" />
      </div>
      <div className="block mb-4">
        <Label forInput="mensaje">Mensaje</Label>
        <textarea className="w-full rounded-lg h-[200px] mt-2 p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"></textarea>
      </div>

      <SubmitButton>Enviar correo</SubmitButton>
    </form>
  );
}
