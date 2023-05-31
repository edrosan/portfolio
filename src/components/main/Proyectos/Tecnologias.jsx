export function Tecnologias( {tecnologias}) {
  const tecUsadas = [...tecnologias];
  
  return (
    <div className="text-sm flex flex-wrap justify-between">
      {tecUsadas.map((tecnologia, index) => {
        // Todo crear key unica
        return (
          <p key={tecnologia + index} className="align-middle inline-block">
            {tecnologia}
          </p>
        );
      })}
    </div>
  );
}
