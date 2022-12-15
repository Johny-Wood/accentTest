import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Layout from "./Layout";
import CatalogView from "./views/CatalogView";
import CartView from "./views/CartView";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CatalogView />} />
          <Route path="/cart" element={<CartView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
