import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Het from "./het.jsx";
import Single_click from "./Events.jsx";
import Stu from "./Props.jsx";
import Greeting from "./Greeting.jsx";
import Logo from "./Logo.jsx";

let name = "het";
const user = {
  name: "Amit",
  role: "Frontend Developer",
};
let check = true;
function App() {
  return (
    <>
      <div>
        <h1>Hello Jsx</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          reiciendis?
        </p>

        <h1>name:-{name.toUpperCase()}</h1>

        <h4>User_name:-{user.name}</h4>
        <h4>User_role:-{user.role}</h4>

        <h3>{check ? "true" : "false"}</h3>
      </div>
      <div>
        <Het />
      </div>
      <div>
        <button onClick={Single_click}>Click me</button>
      </div>
      <div>
        <Stu name="het" age="20" />
      </div>
      <div>
        <Greeting />
      </div>
       <div>
      <img src="./car.jpeg" alt="photo" />
    </div>
    </>
  );
}
export default App;
