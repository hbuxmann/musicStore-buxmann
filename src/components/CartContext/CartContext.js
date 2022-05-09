import React, {createContext, useContext, useState} from "react";

export const CartContext = createContext();




export const CartProvider = ({children}) => {
    //    
    const[cartList, setCartList] = useState([]);
    const[qttyCart, setQttyCart] = useState(0);

    const addItem = (item, qtty) => {
        const auxItem = {
            item   : item,
            qtty    : qtty};

        if(isInCart(item.idProduct)){
             let auxCartList = cartList.map (p => updateItem(p, item.idProduct, qtty) );
            setCartList(auxCartList); 
        } else {
            setCartList([...cartList, auxItem]); 
        }              
        setQttyCart(qttyCart+qtty);
    }

    const updateItem = (prod, idProd,  qtty) => {
        // console.log('Prod: '+prod.item.idProduct);
        // console.log('Prod: '+JSON.stringify(prod, null, 2));
        // console.log('idProd: '+idProd);
        // console.log('qtty: '+qtty);
        let aux = prod;
        if (prod.item.idProduct == idProd ) {            
            aux.qtty += qtty;
            console.log('hay coincidencia!!!')
        } 
        return aux;        
    }

    const removeItem = (itemId) => {
        const itemFound = cartList.find(prodInCart => prodInCart.item.idProduct == itemId);
        console.log('itemFound-->' + itemFound)
        const cartListAux = cartList.filter(prodInCart => prodInCart.item.idProduct != itemId);
        setCartList(cartListAux);
        setQttyCart(qttyCart - itemFound.qtty);
    }
    const clear = () => {
        setCartList([]);
        setQttyCart(0);
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
                    qttyCart, 
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
