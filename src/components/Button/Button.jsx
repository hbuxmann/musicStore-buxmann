import React, { useState, useEffect } from 'react';
import './Button.css'
import { Link } from "react-router-dom";

const Button = ({classeToApply, onClick, navigateTo}) => {
    // 
    const path =  navigateTo ? navigateTo : ``;


    return (
        <Link to={path}>
            <div className='divClassButton'>
                <button  onClick={onClick} className={classeToApply}>Checkout</button>
            </div>
        </Link>
    )

}

export default Button;