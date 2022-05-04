import React, { useEffect, useState } from 'react';
import ItemLoader from '../ItemLoader/ItemLoader';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';





const ItemDetailContainer = ({product}) => {


    const [prod, setProducts] = useState([]);
    const [idDisplay, setIdDisplay] = useState('displayNone');

    useEffect(()=>{        
        setTimeout(() => {
            setProducts(product);
            setIdDisplay('');
        }, 3000);
    }, []);

    return (
        <div>
            <ItemLoader setTime={2900}/>
            <div id={idDisplay}>
                <ItemDetail product={prod} />
            </div>
        </div>
    )
   

}

export default ItemDetailContainer;