import user from "../src/assets/img/user.png";

export function Profile() {
  return (
    <div id="inicio" className="w-full h-100% mb-24 scroll-mt-[50px] bg-[#fffbff] flex flex-col items-center md:flex-row justify-between dark:bg-[#1c1b1f]">
      <div className="w-full h-full mb-4 flex flex-col ">
        <h1 className="text-4xl mb-8 text-[#1c1b1f] font-bold font-sans dark:text-[#e5e1e6]">
          EDUARDO RODRIGUEZ
        </h1>
        <p className="mb-4 text-xl text-[#1c1b1f] dark:text-[#e5e1e6]">
          Un desarrollador web enfocado en frontend que construye el frontend de
          sitios web y aplicaciones web que conducen al éxito del producto en
          general.
        </p>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover  rounded-full lg:w-[300px] lg:h-[300px]"
        src={user}
      />
    </div>
  );
}
