export function Contacto() {
  return (
    <div>
      <h1 className="text-xl text-[#1c1b1f] font-bold dark:text-[#e5e1e6]">Contacto</h1>

      <form className="w-full">
        <div className="block">
          <label className="text-[#1c1b1f] dark:text-[#e5e1e6]">Nombre</label>
          <input className="w-full rounded-lg h-10 bg-[#e4e1ec] text-[#47464f] outline-none  dark:bg-[#47464f] dark:text-[#c8c5d0]" />
        </div>
      </form>
    </div>
  );
}
