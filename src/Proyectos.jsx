import { Proyecto } from "./Proyecto";

export function Proyectos() {
  return (
    <div >
      <h1 className="text-xl text-zinc-600 font-semibold">PROYECTOS</h1>
      <h2>Aplicaciones Web</h2>
      <div className="flex flex-col gap-2">
        <Proyecto img="https://images.unsplash.com/photo-1684785805426-d3cc80537a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"></Proyecto>
        <Proyecto img="https://images.unsplash.com/photo-1684524961062-1afe34e5c347?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"></Proyecto>
        <Proyecto img="https://images.unsplash.com/photo-1683470432347-7b40520fb583?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"></Proyecto>
      </div>
    </div>
  );
}
