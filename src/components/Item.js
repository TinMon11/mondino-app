import React from 'react'
import ItemCount from './ItemCount'

const Item = ({id,title,description,price,image}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl text-center">
        <figure>
            <img src= {image} className = "pt-4 max-h-48" alt = {title}></img>
        </figure>
        <div className="card-body ">
            <h2 className="card-title justify-center">{title}</h2>
            <p className='overflow-y-auto h-24'>{description}</p>
            <p className='font-bold'>$ {price}</p>
        </div>
        <div className="card-actions justify-center">
        <button className="btn btn-primary bg-primary w-9/12 mb-4">Ver Más</button>
        </div>
    </div>
  )
}

export default Item