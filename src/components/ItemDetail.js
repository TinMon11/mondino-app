import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail ({item}) {

    return (

        <div className='card w-10/12 m-auto flex flex-row flex-wrap justify-center bg-base-100 shadow-xl'>
           
            {/* <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></img></figure> */}

                <div id="imagenProducto" >
                    <img src={item.image} className="m-auto h-4/6 max-h-full md:max-h-screen" alt="Album"/>
                </div>
            
            <div className="text-center w-6/12">
                <h1 className="card-title justify-center m-auto text-5xl p-10">{item.title}</h1>
                <p className='text-center justify-center m-auto text-xl p-10'>{item.description}</p>
                <p className='text-center justify-center m-auto text-xl  p-10 font-bold'>Precio ${item.price}</p>
                <div className="card-actions justify-center">
                <ItemCount stock = {5} initial = {1} onAdd ={(n) => alert (`Agregados ${n}`)}/>
                </div>
            </div>
        </div>   
    )
}

export default ItemDetail;




