import React, {  useState } from "react";
import ItemDetail from "./ItemDetail";

const itemPrueba = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);

    
    const promesa = new Promise ( (resolve,reject) => {
        resolve(false)
    })
    
    promesa.then((param)=> {
        setTimeout(setLoading,5000,param)
        setTimeout(setItem,5000,itemPrueba)
    }).catch(()=> alert("Error en la carga"))
    

    return (<div className="mt-10">
                {loading ? (<h3>CARGANDO DETALLE PRODUCTO!</h3>) : (<ItemDetail item={item}/>)}
            </div>
            )
}


export default ItemDetailContainer;