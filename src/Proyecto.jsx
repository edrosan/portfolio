export function Proyecto({ imagenProyecto, linkTo, tecnologias }) {
  const tecUsadas = [...tecnologias];

  return (
    <a
      href={linkTo}
      className="w-full h-[200px] bg-white border border-gray-200 rounded-lg shadow-md	 relative"
    >
      <img className="object-cover w-full h-full rounded-lg" src={imagenProyecto} />

      <div className="absolute bottom-0 h-10 flex gap-2 justify-center items-center bg-indigo-500 text-zinc-50 w-full rounded-b-lg">
        {tecUsadas.map((tecnologia, index) => {
          // Todo crear key unica
          console.log(tecnologia+index)
          return <p key={tecnologia+index} className="align-middle">
            {tecnologia}
            </p>
        })}
      </div>
    </a>
  );
}
