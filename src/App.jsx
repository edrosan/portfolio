import { useState } from "react";
import "./App.css";

import { Profile } from "./Profile";
import { Proyectos } from "./Proyectos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>menu</div>
      <main className="w-full h-full flex flex-col  px-36 py-12 ">
        <Profile></Profile>

        <Proyectos></Proyectos>
        <div>
          <h1>ACERCA</h1>
        </div>
        <div>
          <h1>CONTACTO</h1>
        </div>
      </main>
    </>
  );
}

export default App;
