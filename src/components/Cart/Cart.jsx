
import React, { useState, useEffect, useContext } from 'react';
import './Cart.css'
import ItemLoader from '../ItemLoader/ItemLoader';
import CartContext from '../CartContext/CartContext';

const Cart = () => {
    // 
    const [idDisplay, setIdDisplay] = useState('displayNone');

    const {cartList} = useContext(CartContext);

    useEffect(()=>{
        setTimeout(() => {            
            setIdDisplay('');
        }, 2500);
    }, []);

    return (
        <>
            <ItemLoader setTime={1500}/>
            <div id={idDisplay}>  
                <h2>Hola yo soy el Cart! (muy pobreton)</h2>
                <p>{JSON.stringify(cartList, null, 2)}</p>
            </div>
        </>
    )
  

}


export default Cart;