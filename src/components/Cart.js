import React from 'react'
import CartItem from './CartItem';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { sendOrder } from "../firebase.js"


function Cart() {

  const { cart, clearAll, totalItems, totalPrice } = useContext(CartContext)

  return (

    <section>
      {cart.length > 0 &&
        <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">ITEMS IN CART: {totalItems}</div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">TOTAL ${totalPrice}</div>
        </div>}
      <div className="flex flex-column flex-wrap gap-3 w-4/5 m-auto justify-around">
        {cart.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            id={item.id}
            key={item.id}
          />))}
      </div>

      <div className='mt-10 text-center'>

        {cart.length > 0 ?
          <button className="btn btn-primary w-48 mr-10" onClick={sendOrder(cart, totalPrice)}>PLACE ORDER</button>
          :
          <Link to="../">
            <h1 className='mb-10'>EMPTY CART</h1><button className="btn btn-primary btn-block w-48 mr-10">VIEW PRODUCTS</button>
          </Link>}

        <button className="btn btn-primary  w-48" onClick={clearAll}>CLEAR ALL</button>
      </div>
    </section>

  )
}

export default Cart;