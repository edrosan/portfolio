import { useForm } from "react-hook-form";
import { SubmitButton } from "./SubmitButton";
import { Input } from "./Input";
import { Label } from "./Label";

export function Formulario() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = "https://send-email-production.up.railway.app/api/v1/emails/"
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log(response)
    })
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mb-8 font-sans rounded-lg p-4  border border-[#e4e1ec] shadow-lg dark:border-[#47464f]"
    >
      <h2 className="text-xl mb-4 text-[#1c1b1f] font-semibold dark:text-[#e5e1e6]">
        Envia un correo rapido
      </h2>
      <div className="block mb-4">
        <Label forInput="name">Nombre</Label>
        <Input register={register} placeholder="Ingresa tu nombre" name="name" type="text" />
      </div>
      <div className="block mb-4">
        <Label forInput="email">Correo</Label>
        <Input register={register} placeholder="Ingresa tu correo" name="email" type="email" />
      </div>
      <div className="block mb-4">
        <Label forInput="message">Mensaje</Label>
        <textarea {...register("message")} className="w-full rounded-lg h-[200px] mt-2 p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"></textarea>
      </div>

      <SubmitButton>Enviar correo</SubmitButton>
    </form>
  );
}
