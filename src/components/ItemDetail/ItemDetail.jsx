import React, {useContext, useState } from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import CartContext from '../CartContext/CartContext'




const ItemDetail = ({product}) => {
    
    const [qtty,    setQtty]    = useState(0);
    const [price,   setPrice]   = useState(0);
    const [navigateTo,   setNavigateTo]   = useState(``);
    const {qttyCart, thereAreNoItems} = useContext(CartContext);
    const navigate = useNavigate();

    function onAdd(q, p) {        
        setQtty(q);
        setPrice(p);
    }

    const onClick = () => {
        if (qttyCart == 0) {
            thereAreNoItems();
        } else {
            navigate('/cart');
        }
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
                <Button classeToApply={'endPurchase'}  onClick={onClick} />
            </div>

        </div>

    )
   

}

export default ItemDetail;