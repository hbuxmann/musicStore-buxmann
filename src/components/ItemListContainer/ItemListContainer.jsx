import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

    const product = {
        idProduct   : 1245,
        prodName    : 'Honda CBR 300',
        description : 'Honda CBR 300 Mod 2019, 2300kms!',
        urlPnt     : 'https://moto.mercadolibre.com.ar/MLA-1129347690-honda-cbr-300-_JM',
        image       : '/images/cbr300.jpg',
        alt         : 'Honda CBR 300',
        price       : 5300,
        stock       : 5,
        initial     : 1,
    };

    function onAdd(qtty, price) {
        console.log('La cantidad es: '+qtty+' precio:'+price);

    }

    return (
        <>
            <h1> Contenido en construccion...</h1>  
            <p> {greeting}</p>
            <ItemCount product={product} onAdd={onAdd} />
        </>
    )

}


export default ItemListContainer;