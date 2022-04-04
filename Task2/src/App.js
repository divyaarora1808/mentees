import { createContext, useState } from "react";
import Calculator from "./Compnents/Calculator";

export const ColorContext = createContext();

function App() {
  function toggle() {
    const bg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = bg === "white" ? "black" : "white";
    setState(bg === "black" ? true : false);
    const color = document.body.style.color;
    document.body.style.color = color === "black" ? "white" : "black";
  }
  const [state, setState] = useState(false);
  return (
    <>
      <div className="flex justify-end mt-3">
        <button onClick={toggle} className="text-2xl mr-5">
          Toggle
        </button>
      </div>
      <div
        className=" items-center flex justify-center"
        style={{ minHeight: "100vh" }}
      >
        <ColorContext.Provider value={{ state, setState }}>
          {" "}
          <Calculator />
        </ColorContext.Provider>
      </div>
    </>
  );
}

export default App;
