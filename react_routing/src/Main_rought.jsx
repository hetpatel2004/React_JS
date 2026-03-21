import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Index from './Components/Index'
import Home from "./Components/Home";
import About from "./Components/About";
import Contect from "./Components/Contect";
import Error_404 from "./Error";
import Login from "./Components/Login";
import Person from "./Components/Person";
import { Suspense } from "react";
import Useeffect from "./Components/Useeffect";
import Card01 from "./Components/Card01";

function Main_rought() {
  const Index = lazy(() => import("./Components/Index"));
  const Contect = lazy(() => import("./Components/Contect"));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<p>it's Loading...</p>}>
            <Index />
          </Suspense>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="contect"
          element={
            <Suspense fallback={<p>it's Loading...</p>}>
              <Contect />
            </Suspense>
          }
        />
        <Route path="person" element={<Person />} />
        <Route path="useeffect" element={<Useeffect />} />
        <Route path="*" element={<Error_404 />} />
        <Route path="login" element={<Login />} />
        <Route path="person/card01/:id" element={<Card01 />} />

      </Route>
    </Routes>
  );
}

export default Main_rought;
