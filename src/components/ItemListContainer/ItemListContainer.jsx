import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);


    const product = {
        idProduct   : 1245,
        prodName    : 'Honda CBR 300',
        description : 'Honda CBR 300 Mod 2019, 2300kms!',
        url         : 'https://moto.mercadolibre.com.ar/MLA-1129347690-honda-cbr-300-_JM',
        image       : '/images/cbr300.jpg',
        alt         : 'Honda CBR 300',
        price       : 5300,
        stock       : 5,
        initial     : 1,
    };
    let auxProducts = [];
    for (let i=1; i<9; i++) {
        auxProducts.push(<Item product={product} />);
   };

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

    // const task = new Promise((resolve, reject)=> {

    //     setTimeout(() => {
    //         console.log("3 Segundos esperado");
    //             // resolve(products); 
    //             for (let i=1; i<5; i++) {
    //                 products.push(<Item product={product}/>);
    //             };
    //         }, 3000);
    // });
    return (
        <div >
            <h1> Contenido en construccion...</h1>  
            <p> {greeting}</p>
            <ItemList products={products} />
            {/* <ItemCount product={product} onAdd={onAdd} /> */}
            {/* <Item product={product}/> */}
        </div>
    )

}


export default ItemListContainer;