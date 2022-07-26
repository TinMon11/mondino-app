import React from 'react'
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartContext from '../context/CartContext';


function ItemDetail({ item }) {

    const [sendStatus, setsendSatus] = useState(false);
    const {addItem} = useContext(CartContext)

    function onAddEvent(n) {
        setsendSatus(true)
        addItem({...item, quantity: n}); 
    }   
    
    return (

        <div className='card w-10/12 m-auto flex flex-row flex-wrap justify-center bg-base-100 shadow-xl'>

            <div className="w-6/12" id="imagenProducto" >
                <img src={item.image} className="m-auto max-h-full md:max-h-screen" alt="Album" />
            </div>

            <div className="text-center w-6/12"> 
                <h1 className="card-title justify-center m-auto text-3xl p-10">{item.title}</h1>
                <p className='text-center justify-center m-auto text-l p-10'>{item.description}</p>
                <p className='text-center justify-center m-auto text-xl  p-10 font-bold'>Precio ${item.price}</p>
                <div className='flex flex-col'>
                    {sendStatus ? <NavLink to="/cart" className="btn btn-primary bg-primary w-24 mx-auto">Ver Carrito</NavLink> : <div className="card-actions justify-center"><ItemCount stock={item.stock} initial={1} onAdd={(n) => onAddEvent(n)} /></div>}
                    <Link to={"/"}><button className="btn btn-accent w-24 my-5">Volver</button></Link>
                </div>
            </div>
        </div>
    )
}


export default ItemDetail;




