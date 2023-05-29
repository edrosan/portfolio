import user from '../src/assets/img/user.png';

export function Profile() {
  return (
    <div className="w-full flex justify-between">
      <div className="w-auto h-full flex flex-col ">
        <h1 className="text-2xl text-zinc-600 font-bold font-sans">EDUARDO RODRIGUEZ SANCHEZ</h1>
        <p className="text-xl text-zinc-600">Programador Web</p>
      </div>
      <img
        className="w-[300px] h-[300px] object-cover  rounded-full"
        src={user}
      />
    </div>
  );
}
