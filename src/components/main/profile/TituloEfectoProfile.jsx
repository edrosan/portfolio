export function TituloEfectoProfile({children}) {
  return (
    <h2 className="w-full pb-2 h-auto text-4xl  font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  dark:from-pink-300 dark:via-purple-300 dark:to-indigo-400 md:text-5xl  lg:leading-[70px] lg:mb-2 lg:tracking-wide">
      {children}
    </h2>
  );
  
}
