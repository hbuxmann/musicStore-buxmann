import React, { useState, useEffect } from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';




const ItemDetail = ({product}) => {
    
    const [qtty,    setQtty]    = useState(0);
    const [price,   setPrice]   = useState(0);

    function onAdd(q, p) {        
        setQtty(q);
        setPrice(p);
        // console.log('La cantidad es: '+qtty+' precio:'+price);
        // console.log('La cantidad es: '+q+' precio:'+p);    
    }
   
    

    return (
        <div className='itemDetailContainer'>
            <div className='leftItemDetail'>
                 <div className='imagesMulti'>
                    <div className = 'imageMiniDetailContainer'>
                        <label ><b>Marca: </b>{product.brand}</label>
                        <label ><b>Modelo: </b>{product.prodName}</label>
                        <label ><b>Año: </b>{product.year}</label>
                        <label ><b>Kilometros: </b>{product.miles}</label>
                        <label ><b>Cilindrada: </b>{product.cylinder}</label>
                        <label ><b>Categoria: </b>{product.category}</label>
                        <label ><b>ID Producto: </b>{product.idProduct}</label>
                    </div>
                    <div className = 'imageDetailContainer'>
                        <img  src={product.image} alt={product.alt} width="100%" />
                    </div>
                </div>
                <p> {product.description}</p>
            </div>
            <div className='rightItemDetail'>
                <ItemCount product={product} onAdd={onAdd} initial={1}/>
                <Button classeToApply={'endPurchase'} navigateTo={`/cart`} />
            </div>

        </div>

    )
   

}

export default ItemDetail;