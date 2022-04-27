import React, { useState, useEffect } from 'react';
import './ItemList.css';



const ItemList = ({products}) => {
    // 
    // mount component
    useEffect(()=>{
        console.log('mount componet')
    }, []);
    return (
        <div >
            <ul className='display'>
                {products.map(p => <li>{p}</li>)}  
            </ul>                  
        </div>
    )

}

export default ItemList;
