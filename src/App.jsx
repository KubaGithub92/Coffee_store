import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Coffee from "./pages/Coffee";
import Cart from "./pages/Cart";
import { useState } from "react";
import CartContext from "./CartContext";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="coffee" element={<Coffee />} />
            <Route path="story" element={<Story />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
