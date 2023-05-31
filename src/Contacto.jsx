import { Titulo } from "./components/Titulo";

export function Contacto() {
  return (
    <div id="contacto" className="">

      <Titulo>CONTACTO</Titulo>

      <div className="flex gap-4">
        <form className="w-[500px] font-sans rounded-lg p-4  border border-gray-200 shadow-lg">
          <h2 className="text-xl mb-4 text-[#1c1b1f] font-semibold dark:text-[#e5e1e6]">
            Enviame un correo rapido
          </h2>
          <div className="block mb-4">
            <label className="text-[#1c1b1f] mb-2  dark:text-[#e5e1e6]">
              Nombre
            </label>
            <input
              className="w-full rounded-lg h-[55px] mt-2 p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="block mb-4">
            <label className="text-[#1c1b1f]  dark:text-[#e5e1e6]">
              Correo
            </label>
            <input
              className="w-full rounded-lg h-[55px] mt-2 p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div className="block mb-4">
            <label className="text-[#1c1b1f]  dark:text-[#e5e1e6]">
              Mensaje
            </label>
            <textarea className="w-full rounded-lg h-[200px] mt-2 p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"></textarea>
          </div>

          <button
            type="submit"
            className="text-white  h-[55px] text-[16px] items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl group relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium "
          >
            Contactar
          </button>
        </form>
        <div>tel</div>
      </div>
    </div>
  );
}
