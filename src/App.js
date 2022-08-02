import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout"
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
      <BrowserRouter>
      <CartProvider>
        <div>
          <div className="App">
            <NavBar />
          </div>
          <Outlet />
        </div>
        <Routes>
          <Route path="/" element={<div className='flex-row flex-wrap'><ItemListContainer /></div>} />
          <Route path="/category/:nombreCategoria" element={<div className='flex-row flex-wrap'><ItemListContainer /></div>} />
          <Route path="/producto/:Item" element={<ItemDetailContainer />} />
          <Route path="/producto/:Item" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>


  )
}
export default App;


