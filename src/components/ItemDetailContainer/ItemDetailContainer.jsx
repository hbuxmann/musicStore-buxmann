import React, { useEffect, useState } from 'react';
import ItemLoader from '../ItemLoader/ItemLoader';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

// read product list - temporary source!
import prodJson from '../../data/product.json';



const ItemDetailContainer = () => {
    const {id } = useParams();
    //busco si el producto ya está en el carrito para traerlo junto con la cantidad. 
    // const {cartList} = useContext(CartContext);

    // const prodCartFiltered = cartList.filter(p => p.item.idProduct== id);
    // console.log('Encontrado? -->'+JSON.stringify(prodCartFiltered, null, 2));


    const productFiltered = prodJson.filter (p => p.idProduct === parseInt(id));
    const productItemDetail = <ItemDetail product={productFiltered[0]} /> ;

    const [prod, setProd] = useState(productFiltered[0]);
    const [idDisplay, setIdDisplay] = useState('displayNone');

    useEffect(()=>{
        setProd(productFiltered); 
        console.log('prod-->'+prod.idProduct);
        setTimeout(() => {            
            setIdDisplay('');
        }, 3000);
    }, []);

    useEffect(()=>{
        console.log('prod 2-->'+prod.brand);
    }, [prod]);


    return (
        <div>
            <ItemLoader setTime={2900}/>
            <div id={idDisplay}>
                {productItemDetail}
            </div>
        </div>
    )
   

}

export default ItemDetailContainer;