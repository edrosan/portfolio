export function Proyecto({ imagenProyecto, linkTo, tecnologias }) {
  const tecUsadas = [...tecnologias];

  return (
    <a
      href={linkTo}
      className="w-full  rounded-lg relative border border-gray-200  shadow-lg dark:border-none"
    >
      <img
        className="object-cover  h-full rounded-lg"
        src={imagenProyecto}
      />

      <div className="absolute bottom-0 h-10 flex gap-2 justify-center items-center bg-[#5248d7dd] text-[#ffffff] w-full rounded-b-lg dark:bg-[#372abfcc] dark:text-[#e3dfff]">
        {tecUsadas.map((tecnologia, index) => {
          // Todo crear key unica
          return (
            <p key={tecnologia + index} className="align-middle">
              {tecnologia}
            </p>
          );
        })}
      </div>
    </a>
  );
}
