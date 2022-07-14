import React, {  useState, useEffect } from "react";
import ItemList from "./ItemList"


const ItemListContainer = ({}) => {


    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((json) => {
            setTimeout(setLoading,2000,false);
            setProducts(json);
          })
          .catch((err) => {
            alert('Ocurrio un error inesperado'+err);
          });
      }, [products]);

      console.table(products)

    return (<div>
        <div>
            {loading ? (<h3>CARGANDO</h3>) : (<ItemList items={products}/>)}
            
        </div>
    </div>  
    )
}


export default ItemListContainer;