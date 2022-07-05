import { useState } from "react";

function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(initial);

    const incrementar = () => {
        if (count < stock) {setCount(count+1)}
            else {alert("Stock insuficiente")}

        return (count, incrementar)
    }

    const decrementar = () => {
        if (count > 1) { setCount(count-1)}

        return (count, decrementar)
    }
    
    return (

<div className="card w-64 bg-base-100 shadow-xl">
  <figure><img src="https://http2.mlstatic.com/D_NQ_NP_862700-MLA47307297782_082021-W.jpg" alt="Medias" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Medias BlackOut</h2>
    <p>¡Nuestro modelo favorito!</p>
    <div className="card-actions justify-around items-center">
      <button className="btn btn-circle bg-primary btn-sm" onClick={() => incrementar()}>+</button>
      <p className="font-bold text-2xl text-center">{count}</p>
      <button className="btn btn-circle bg-neutral btn-sm" onClick={() => decrementar()}>-</button>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary bg-primary w-9/12" onClick={() => onAdd(count)}>Agregar Al Carrito</button>
    </div>
  </div>
</div>
)
}

export default ItemCount;

