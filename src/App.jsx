import { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Header changeDarkMode={changeDarkMode}></Header>

      <Main></Main>
    </>
  );
}

export default App;
