import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './page/Home';
import About from "./page/About";

const App: React.FC=() =>{

  return(

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  )
}

export default App;