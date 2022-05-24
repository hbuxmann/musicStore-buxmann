
import React, { useState, useEffect, useContext } from 'react';
import './Cart.css'
import ItemLoader from '../ItemLoader/ItemLoader';
import CartContext from '../CartContext/CartContext';
import ItemListCart from '../ItemListCart/ItemListCart';





const Cart = () => {
    // 
    const [idDisplay, setIdDisplay] = useState('displayNone');

    const {cartList} = useContext(CartContext);

    useEffect(()=>{
        setTimeout(() => {            
            setIdDisplay('');
        }, 1500);
    }, []);

    return (
        <>
            <ItemLoader setTime={1500}/>
            <div id={idDisplay}>  
                {/* <p>{JSON.stringify(cartList, null, 2)}</p> */}
                <ItemListCart />
            </div>
        </>
    )
  

}


export default Cart;