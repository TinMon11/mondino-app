import React, {  useState, useEffect } from "react";
import ItemList from "./ItemList"
import {useParams } from "react-router-dom";
import { getItems, getItemsFiltered } from '../firebase.js';


const ItemListContainer = () => {

    let {nombreCategoria} = useParams()
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    
    
    useEffect(() => {

    (nombreCategoria === undefined ? (getItems()) : getItemsFiltered(nombreCategoria)).then((snapshot) => {
        setProducts(
          snapshot.docs.map((document) => ({
            ...document.data(),
          }))
        );
        setTimeout(setLoading,2000,false);
      });
    }, [nombreCategoria]);
  
          
    return (<div>
        <div>
            {loading ? (<h2>CARGANDO PRODUCTOS</h2>) : (<ItemList items={products}/>)}
            
        </div>
    </div>  
    )
}


export default ItemListContainer;