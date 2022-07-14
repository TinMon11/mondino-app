import React, {  useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

// const itemPrueba = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}


const ItemDetailContainer = () => {

    let {Item} = useParams ();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect (()=> {
    fetch('https://fakestoreapi.com/products/'+ Item)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setTimeout(setLoading,2000,false);
      })}, [Item]);
      

    return (<div className="mt-10">
                {loading ? (<h2>CARGANDO DETALLE DE PRODUCTO</h2>) : (<ItemDetail item={data}/>)}
            </div>
            )
}


export default ItemDetailContainer;