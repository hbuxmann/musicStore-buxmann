import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../CartContext/CartContext'
import './CartWidget.css'
import { Link } from "react-router-dom";


const CartWidget = () => {
    // 
    const {qttyCart} = useContext(CartContext);
    return (
        <div className='cart'>
            <Link to={`/cart`}  className='fontAwesome'> <FontAwesomeIcon icon={faCartShopping} /></Link>
            {/* <a className='fontAwesome' href=""><FontAwesomeIcon icon={faCartShopping} /></a> */}
            <p className='qtty'>{qttyCart}</p>
        </div>
    )

}

export default CartWidget;
