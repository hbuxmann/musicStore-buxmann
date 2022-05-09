import React, {createContext, useContext, useState} from "react";

export const CartContext = createContext();




export const CartProvider = ({children}) => {
    //    
    const[cartList, setCartList] = useState([]);
    const addItem = (item, qtty) => {
        const auxItem = {
            item   : item,
            qtty    : qtty};

        if(isInCart(item.idProduct)){
            removeItem(item.idProduct);
        } 
        setCartList([...cartList, auxItem]);       

    }
    const removeItem = (itemId) => {
        const cartListAux = cartList.filter(prodInCart => prodInCart.item.idProduct != itemId);
        setCartList(cartListAux);        
    }
    const clear = () => {
        setCartList([]);
    }
    const isInCart = (itemId) => {
        // 
        const itemFound = cartList.find(prodInCart => prodInCart.item.idProduct == itemId);
        if(itemFound == undefined) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <CartContext.Provider 
            value={
                {
                    cartList, 
                    addItem,
                    removeItem,
                    clear,
                    isInCart                    
                }
            }
        >
            {children}
        </CartContext.Provider>

    )
}
export default CartContext;
