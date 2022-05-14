import React, {createContext, useContext, useState} from "react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export const CartContext = createContext();


export const CartProvider = ({children}) => {
    //    
    const[cartList, setCartList] = useState([]);
    const[qttyCart, setQttyCart] = useState(0);
    const[totalPriceCart, setTotalPriceCart] = useState(0);

    const navigate = useNavigate();

    const executeRemoveItems= () => { 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                clear();                
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                navigate(`/`);
            } 
        })
    }

    const thereAreNoItems = () => {
        if (qttyCart == 0) {
            Swal.fire(
                'Information!',
                'There are no items in your cart, please buy one!',
                'info'
            );
            
        };
        return true;
    }



    // const addItem = (item, qtty) => {
    //     const auxItem = {
    //         item   : item,
    //         qtty    : qtty};

    //     if(isInCart(item.idProduct)){
    //          let auxCartList = cartList.map (p => updateItem(p, item.idProduct, qtty) );
    //         setCartList(auxCartList); 
    //     } else {
    //         setCartList([...cartList, auxItem]); 
    //     }              
    //     setQttyCart(qttyCart+qtty);
    //     setTotalPriceCart(totalPriceCart + item.price * qtty );
    // }

    const updateItem = (prod, idProd,  qtty) => {
        let aux = prod;
        if (prod.item.idProduct == idProd ) {            
            aux.qtty = qtty;
        } 
        return aux;        
    }

    const addItem = (item, qtty) => {
        const auxItem = {
            item   : item,
            qtty    : qtty};
        let actualQtty = 0;

        const itemFound = cartList.filter(prodInCart => prodInCart.item.idProduct == item.idProduct);
        if (itemFound.length != 0){
            actualQtty = itemFound[0].qtty;
        }

        if(isInCart(item.idProduct)){
             let auxCartList = cartList.map (p => updateItem(p, item.idProduct, qtty) );
            setCartList(auxCartList); 
        } else {
            setCartList([...cartList, auxItem]); 
        }              
        setQttyCart(qttyCart+qtty - actualQtty);
        setTotalPriceCart(totalPriceCart + item.price * qtty - item.price * actualQtty );
    }
    // const updateItemV2 = (prod, idProd,  qtty) => {
    //     let aux = prod;
    //     if (prod.item.idProduct == idProd ) {            
    //         aux.qtty = qtty;
    //     } 
    //     return aux;        
    // }




    const removeItem = (itemId) => {
        if (cartList.length == 1) {
            executeRemoveItems();
        } else {
            const itemFound = cartList.find(prodInCart => prodInCart.item.idProduct == itemId);
            const cartListAux = cartList.filter(prodInCart => prodInCart.item.idProduct != itemId);
            setCartList(cartListAux);

            setQttyCart(qttyCart - itemFound.qtty);
            setTotalPriceCart(totalPriceCart -  itemFound.item.price * itemFound.qtty );
        }
    }

    const decreaseQtty = (itemId) => {
        if (qttyCart == 1) {
            executeRemoveItems();
        } else {
            const itemFound = cartList.find(prodInCart => prodInCart.item.idProduct == itemId);
            if (itemFound.qtty == 1) {
                removeItem(itemId);
            } else {
                let auxCartList = cartList.map (p => updateItem(p, itemId, itemFound.qtty-1  ) );
                setCartList(auxCartList);     
            }
            setQttyCart(qttyCart -1);
            setTotalPriceCart(totalPriceCart -  itemFound.item.price );
        }
    }
    const increaseQtty = (itemId) => {
        const itemFound = cartList.find(prodInCart => prodInCart.item.idProduct == itemId);
        let auxCartList = cartList.map (p => updateItem(p, itemId,  itemFound.qtty + 1 ) );
        setQttyCart(qttyCart + 1);
        setTotalPriceCart(totalPriceCart +  itemFound.item.price );
    }

    const clear = () => {
        setCartList([]);
        setQttyCart(0);
        setTotalPriceCart(0);
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
                    totalPriceCart,
                    addItem,
                    // addItemV2,
                    removeItem,
                    clear,
                    isInCart,
                    decreaseQtty,
                    increaseQtty,
                    thereAreNoItems
                }
            }
        >
            {children}
        </CartContext.Provider>

    )
}
export default CartContext;
