import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 justify-around ">
        { items.map((item) => (
            <Item 
            id = {item.id}
            title = {item.title}
            description = {item.description}
            price = {item.price}
            image = {item.image}
            key = {item.id}
        />))}
    </div>
    )
  }


export default ItemList