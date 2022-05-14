import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import ItemLoader from '../ItemLoader/ItemLoader';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

// read product list - temporary source!
import prodJson from '../../data/product.json';



const ItemListContainer = () => {

    const {category } = useParams();
    // 
    console.log('Category-->'+category);
    const [products, setProducts] = useState();
    let auxProducts = [];

    if (category ) {
        const productsFiltered = prodJson.filter (p => p.category === category);
        productsFiltered.map(p => auxProducts = [...auxProducts, <Item product={p} /> ]); 

    } else {
        prodJson.map(p => auxProducts = [...auxProducts, <Item product={p} /> ]);
    }
 
    useEffect(()=>{  
        const db = getFirestore();
        const itemCollection = collection(db, 'products');
        

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
            <ItemLoader setTime={2900}/>
            <ItemList products={auxProducts} />
        </div>
    )

}


export default ItemListContainer;