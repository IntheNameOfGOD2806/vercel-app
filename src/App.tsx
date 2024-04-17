import "./App.css";
import { useState } from "react";
function App() {
  const [state, setState] = useState(0);
  const name = "dat";
  return (
    <>
      <h1>{name}</h1>
      {state}
      <br />
      <button
        style={{ cursor: "pointer", backgroundColor: "red" }}
        onClick={() =>
          setState((state) => {
            return state + 1;
          })
        }
      >
        BUTTON
      </button>
    </>
  );
}

export default App;
