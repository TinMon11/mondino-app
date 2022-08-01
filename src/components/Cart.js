import React, { useState } from 'react'
import CartItem from './CartItem';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { sendOrder } from "../firebase.js"


function Cart() {

  const { cart, clearAll, totalItems, totalPrice } = useContext(CartContext)
  const [idOrder, setIdOrder] = useState("")

  const placeOrder = () =>  {
    console.log("Se sube la orden")
    sendOrder(cart, totalPrice)
    setIdOrder("Probaando")
  }

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
          <div>
            <button className="btn btn-primary w-48 mr-10" onClick={placeOrder}>PLACE ORDER</button>
            <button className="btn btn-primary w-48" onClick={clearAll}>CLEAR ALL</button>
            
            {idOrder !== "" &&
            <div className="mt-10 alert alert-success shadow-lg w-8/12 m-auto">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLineCap="round" strokeLineJoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Your order has been placed. Order ID : {idOrder} </span>
              </div>
            </div>
            }

          </div>
          :
          <div>
            <h1 className='mb-10'>EMPTY CART</h1>
            <Link to="../">
              <button className="btn btn-primary btn-block w-48">VIEW PRODUCTS</button>
            </Link>
          </div>
        }
      </div>
    </section>

  )
}

export default Cart;