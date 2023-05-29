import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-2 bg-white w-[200px] h-[200px] flex flex-col border border-gray-200 rounded-lg shadow">
        <div>
          <img
            className="w-auto h-auto object-cover rounded-full"
            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          />
        </div>
        <div>
          <h1>Eduardo</h1>
          <p>Programador web</p>
        </div>
      </div>
    </>
  );
}

export default App;
