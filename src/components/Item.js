import React from 'react'
import {Link} from "react-router-dom";

const Item = ({id,title,description,price,image}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl text-center hover:drop-shadow-2xl">
        <figure>
        <Link to={"/producto/"+id}><img src= {image} className = "pt-4 max-h-48" alt = {title}></img></Link>
        </figure>
        <div className="card-body ">
            <h2 className="card-title justify-center">{title}</h2>
            <p className='overflow-y-auto h-24'>{description}</p>
            <p className='font-bold'>$ {price}</p>
        </div>
        <div className="card-actions justify-center">
        <Link to={"/producto/"+id}><button className="btn btn-primary bg-primary w-100% mb-4">Ver Detalles</button></Link>
        </div>
    </div>
  )
}

export default Item