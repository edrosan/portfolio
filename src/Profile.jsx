import user from '../src/assets/img/user.png';

export function Profile() {
  return (
    <div className="w-full mb-16 bg-[#fffbff] flex flex-col items-center md:flex-row justify-between dark:bg-[#1c1b1f]">
      <div className="w-full h-full mb-4 flex flex-col ">
        <h1 className="text-4xl mb-4 text-[#1c1b1f] font-bold font-sans dark:text-[#e5e1e6]">EDUARDO RODRIGUEZ SANCHEZ</h1>
        <p className="text-xl text-[#1c1b1f] dark:text-[#e5e1e6]">
        Un desarrollador web enfocado en frontend que construye el frontend de sitios web y aplicaciones web que conducen al éxito del producto en general.
        </p>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover  rounded-full"
        src={user}
      />
    </div>
  );
}
