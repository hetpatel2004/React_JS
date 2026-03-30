import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseReducer from "./Hooks/UseReducer/UseReducer";
import UseReducer_main from "./Hooks/UseReducer/UseReducer_main";


let name = "het";
const user = {
  name: "Amit",
  role: "Frontend Developer",
};
let check = true;
function App() {
  return (
    <>
      <UseReducer_main/>
    </>
  );
}
export default App;
