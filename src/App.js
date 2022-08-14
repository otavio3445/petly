import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetalhesPet from "./pages/Detalhes-pet";
import Pets from "./pages/Pets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/produtos" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/detalhes-pet" element={<DetalhesPet />} />
        <Route path="/fila" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
