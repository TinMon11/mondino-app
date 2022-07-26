import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDetailItem } from '../firebase.js';

const ItemDetailContainer = () => {

  let { Item } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailItem(Item).then((snapshot) => {
      setData(snapshot.data())
      setTimeout(setLoading, 2000, false)
    })
  }, [Item]);



  // useEffect (()=> {
  // fetch('https://fakestoreapi.com/products/'+ Item)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setData(json);
  //     setTimeout(setLoading,2000,false);
  //   })}, [Item]);


  return (<div className="mt-10">
    {loading ? (<h2>CARGANDO DETALLE DE PRODUCTO</h2>) : (<ItemDetail item={data} />)}
  </div>
  )
}

export default ItemDetailContainer;