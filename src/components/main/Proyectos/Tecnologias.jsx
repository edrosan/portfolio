export function Tecnologias( {tecnologias}) {
  const tecUsadas = [...tecnologias];
  const tecnologiasString = tecUsadas.join(" ")

  console.log(tecnologiasString);
  
  return (
    <div className="text-sm flex flex-wrap ">
      <p>{tecnologiasString}</p>
    </div>
  );
}
