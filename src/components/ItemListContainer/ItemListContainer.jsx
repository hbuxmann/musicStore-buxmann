import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import ItemLoader from '../ItemLoader/ItemLoader';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

// read product list - temporary source!
import prodJson from '../../data/product.json';


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    let auxProducts = [];

    prodJson.map(p => auxProducts = [...auxProducts, <Item product={p} /> ]);  


    useEffect(()=>{        
        setTimeout(() => {
            setProducts(auxProducts);
        }, 3000);
    }, []);

    useEffect(()=>{
        console.log('Cambio products!');
    }, [products]);

    function onAdd(qtty, price) {
        console.log('La cantidad es: '+qtty+' precio:'+price);

    }

    return (
        <div >
            {/* <h1> Contenido en construccion...</h1>  
            <p> {greeting}</p> */}
            {/* <ItemLoader setTime={2900}/> */}
            {/* <ItemDetail product={prodJson[0]}/> */}
            <ItemDetailContainer product={prodJson[0]}/>
            {/* <ItemList products={products} /> */}
            {/* <ItemCount product={product} onAdd={onAdd} /> */}
            {/* <Item product={product}/> */}
        </div>
    )

}


export default ItemListContainer;