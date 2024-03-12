import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ProductContext } from "./Context/ProductContext";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  const [productData, setProductData] = useState("");
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <ProductContext.Provider
        value={{ productData, setProductData, cart, setCart, addToCart }}
      >
        <ToastContainer position="top-center" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
}

export default App;
