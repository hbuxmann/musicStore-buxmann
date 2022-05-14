import React, {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../CartContext/CartContext'
import './CartWidget.css'
import { Link } from "react-router-dom";


const CartWidget = () => {
    // 
    const {qttyCart} = useContext(CartContext);
    const [navTo, setNavTo] = useState(``);
    useEffect(()=>{
        const auxNavTo = qttyCart > 0 ? `/cart` : ``;
        setNavTo(auxNavTo);
    }, []);
    // 
    useEffect(()=>{
        const auxNavTo = qttyCart > 0 ? `/cart` : ``;
        setNavTo(auxNavTo);
    }, [qttyCart]);
    return (
        <div className='cart'>
            <Link to={navTo}  className='fontAwesome'> <FontAwesomeIcon icon={faCartShopping} /></Link>
            <p className='qtty'>{qttyCart}</p>
        </div>
    )

}

export default CartWidget;
