import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalhesPet from "./pages/Detalhes-pet";
import Pets from "./pages/Pets";
import Produtos from "./pages/Products";
import Login from "./pages/Login";

const App = () => {
  const [isLogged, setisLogged] = useState(undefined);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLogged={isLogged}/>} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login changeLog={setisLogged}/>} />
        <Route path="/detalhes-pet" element={<DetalhesPet />} />
        <Route path="/fila" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
