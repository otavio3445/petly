import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalhesPet from "./pages/Detalhes-pet";
import Pets from "./pages/Pets";
import Produtos from "./pages/Products";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Cadastro from "./pages/Cadastro";

const App = () => {
  const [isLogged, setisLogged] = useState(undefined);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLogged={isLogged}/>} />
        <Route path="/pets" element={<Pets isLogged={isLogged}/>} />
        <Route path="/perfil" element={<Perfil isLogged={isLogged} changeLog={setisLogged}/>} />
        <Route path="/produtos" element={<Produtos isLogged={isLogged}/>} />
        <Route path="/login" element={<Login changeLog={setisLogged} isLogged={isLogged}/>} />
        <Route path="/cadastro" element={<Cadastro changeLog={setisLogged} isLogged={isLogged}/>} />
        <Route path="/detalhes-pet" element={<DetalhesPet isLogged={isLogged}/>} />
        <Route path="/fila" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
