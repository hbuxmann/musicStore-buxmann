import React, { useState, useEffect } from 'react';
import './Button.css'
import { Link } from "react-router-dom";

const Button = ({classeToApply, onClick, navigateTo, name}) => {
    // 

     return (
        
        // <Link to={path}>
            <div className='divClassButton'>
                <button  onClick={onClick} className={classeToApply}>{name ? name: 'Checkout'}</button>
            </div>
        // </Link>
    )

}

export default Button;