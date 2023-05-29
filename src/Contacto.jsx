export function Contacto() {
  return (
    <div>
      <h1 className="text-xl text-[#1c1b1f] font-bold dark:text-[#e5e1e6]">
        Contacto
      </h1>

      <form className="w-full font-sans">
        <div className="block">
          <label className="text-[#1c1b1f]  dark:text-[#e5e1e6]">Nombre</label>
          <input
            className="w-full rounded-lg h-[55px] p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="block">
          <label className="text-[#1c1b1f]  dark:text-[#e5e1e6]">Correo</label>
          <input
            className="w-full rounded-lg h-[55px] p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="block">
          <label className="text-[#1c1b1f]  dark:text-[#e5e1e6]">Mensaje</label>
          <textarea className="w-full rounded-lg h-[200px] p-5 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]"></textarea>
        </div>
      </form>
    </div>
  );
}
