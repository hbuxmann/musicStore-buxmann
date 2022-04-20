import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'


const CartWidget = ({qtty}) => {
    // 
    return (
        <div className='cart'>
            <a className='fontAwesome' href=""><FontAwesomeIcon icon={faCartShopping} /></a>
            {qtty ? <p className='qtty'>{qtty}</p> : null }
        </div>
    )

}

export default CartWidget;
