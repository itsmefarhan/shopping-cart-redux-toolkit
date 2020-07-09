import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":productId" element={<Product />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
