import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ProductContext } from "./Context/ProductContext";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  const [productData, setProductData] = useState("");
  const [cart, setCart] = useState([]);
  //thinking we just push object to array on button click?
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <ProductContext.Provider
        value={{ productData, setProductData, cart, setCart, addToCart }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            {/* <Route cart={cart} path="/Cart" element={<Cart />} /> */}
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
}

export default App;
