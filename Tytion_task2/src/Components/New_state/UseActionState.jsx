import React, { useState } from "react";
import { useFormStatus } from "react-dom";

function UseActionState() {
  // const [number ,setnumber ]= useState("")
  const sub = async () => {
    console.log("printing this function");
    await new Promise((res) => setTimeout(res, 2000));
    alert("from submited");
  };
  function Main_content() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <>
        <label>Email:-</label>
        <input type="text" />
        <br />
        <label>password:-</label>
        <input type="password" />
        <br />
        <button disabled={pending}>click me</button>
      </>
    );
  }
  return (
    <>
      <form action={sub}>
        <Main_content />
      </form>
    </>
  );
}

export default UseActionState;