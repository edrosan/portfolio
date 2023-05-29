import user from '../src/assets/img/user.png';

export function Profile() {
  return (
    <div className="w-full bg-[#fffbff] flex flex-col items-center md:flex-row justify-between">
      <div className="w-full h-full flex flex-col ">
        <h1 className="text-4xl text-[#1c1b1f] font-bold font-sans">EDUARDO RODRIGUEZ SANCHEZ</h1>
        <p className="text-xl text-[#1c1b1f]">Programador Web</p>
      </div>
      <img
        className="w-[300px] h-[300px] object-cover  rounded-full"
        src={user}
      />
    </div>
  );
}
