import { useEffect, useState } from "react";
import "./App.module.css";
import Gradients from "./components/Gradients/Gradients";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      <Gradients />
      <Main />
    </div>
  );
}

export default App;
