import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Cart from "./views/Cart"
import ItemListContainer from "./views/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer";
import Checkout from "./views/Checkout"
import OrderById from "./views/SearchOrder"
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
          <Route path="/order/:OrderId" element={<OrderById />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>


  )
}
export default App;


