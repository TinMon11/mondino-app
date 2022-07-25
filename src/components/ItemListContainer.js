import React, {  useState, useEffect } from "react";
import ItemList from "./ItemList"
import {useParams } from "react-router-dom";


const ItemListContainer = () => {

    let {nombreCategoria} = useParams()
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch(nombreCategoria === undefined ? 'https://fakestoreapi.com/products' : 'https://fakestoreapi.com/products/category/'+ nombreCategoria )
          .then((res) => res.json())
          .then((json) => {
            setTimeout(setLoading,2000,false);
            setProducts(json)

          })
          .catch(() => {
            alert('Ocurrio un error inesperado');
          });
      }, [nombreCategoria]);
      
      
    return (<div>
        <div>
            {loading ? (<span class="loader"></span>) : (<ItemList items={products}/>)}
            
        </div>
    </div>  
    )
}


export default ItemListContainer;