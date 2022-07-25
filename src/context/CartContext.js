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
        } else {
            const index = cart.findIndex(x => x.id === item.id)
            const cart_ = cart.slice()
            cart_[index].quantity = cart_[index].quantity+ item.quantity
            setCart(cart_)
            alert("El producto ya está agregado en el Cart. Se suman las cantidades")
        }
        }


        const deleteItem = (id) => {
            const _items = cart.filter(el => el.id !== id);
            setCart(_items);
        };

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

    export { CartProvider };
    export default CartContext;


