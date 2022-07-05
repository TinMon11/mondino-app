import React, {  useState, useEffect } from "react";
import products from "../products.json"
import ItemList from "./ItemList"
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(setLoading, 2000, false);
    }, []);
    

    return (<div>
        {greeting}
        <ItemCount stock = {5} initial = {1} onAdd ={(n) => alert (`Agregados ${n}`)}/>
        <div>
            {loading ? (<h3>CARGANDO</h3>) : (<ItemList items={products}/>)}
        </div>
    </div>  
    )
}


export default ItemListContainer;