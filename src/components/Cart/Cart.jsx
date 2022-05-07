
import React, { useState, useEffect } from 'react';
import './Cart.css'
import ItemLoader from '../ItemLoader/ItemLoader';

const Cart = () => {
    // 
    const [idDisplay, setIdDisplay] = useState('displayNone');

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
            </div>
        </>
    )
  

}


export default Cart;