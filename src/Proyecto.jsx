export function Proyecto({ imagenProyecto, linkTo, tecnologias }) {
  const tecUsadas = [...tecnologias];

  return (
    <a
      href={linkTo}
      className="w-full h-[200px]  rounded-lg shadow-md	 relative"
    >
      <img className="object-cover w-full h-full rounded-lg" src={imagenProyecto} />

      <div className="absolute bottom-0 h-10 flex gap-2 justify-center items-center bg-[#5248d7dd] text-[#ffffff] w-full rounded-b-lg dark:bg-[#c3c0ff] dark:text-[#1f00a4]">
        {tecUsadas.map((tecnologia, index) => {
          // Todo crear key unica
          return <p key={tecnologia+index} className="align-middle">
            {tecnologia}
            </p>
        })}
      </div>
    </a>
  );
}
