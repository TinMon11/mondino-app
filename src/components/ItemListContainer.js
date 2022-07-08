import React, {  useState } from "react";
import products from "../products.json"
import ItemList from "./ItemList"


const ItemListContainer = ({ greeting }) => {


    const [loading, setLoading] = useState(true);

    
    const promesa = new Promise ( (resolve,reject) => {
        resolve(false)
    })
    
    promesa.then((param)=> {
        setTimeout(setLoading,2000,param)
    }).catch(()=> alert("Error en la carga"))
    

    return (<div>
        {greeting}
        <div>
            {loading ? (<h3>CARGANDO</h3>) : (<ItemList items={products}/>)}
        </div>
    </div>  
    )
}


export default ItemListContainer;