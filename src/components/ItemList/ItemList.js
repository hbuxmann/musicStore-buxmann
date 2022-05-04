import React from 'react';
import './ItemList.css';



const ItemList = ({products}) => {

    return (
        <div >
            <ul className='display'>
                {products.map(p => <li>{p}</li>)}  
            </ul>                  
        </div>
    )

}

export default ItemList;
