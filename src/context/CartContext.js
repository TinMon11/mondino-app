import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        const exist = cart.find(el => el.id === itemId)
        return exist
    }

    const addItem = (item) => {
        const exist = isInCart(item.id)
        if (!exist) {
            setCart([...cart, item])
            console.log({item})
            console.log(cart)
        } else {
            alert("Ver forma para sumarlo al ya existente")
        }
    }

    const deleteItem = (item) => {

        for( var i = 0; i < cart.length; i++){ 
                                   
            if ( cart[i].id === item.id) { 
                setCart([cart.splice(i, 1)]); 
                i--; 
            }
        }
    }

    const clearAll = () => {
        setCart([])
    }


    const data = {
        cart,
        addItem,
        isInCart,
        deleteItem,
        clearAll
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };

