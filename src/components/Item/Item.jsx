import React from 'react';
import { Link } from "react-router-dom";
import './Item.css';



const Item = ({product}) => {
    // 
    return (
        <div className="card_item">
            {/* <Link to={product.url}><img className="image_item" src={product.image} alt="Product" width="100%" /></Link> */}
            <Link to={'/item/' + product.idProduct}><img className="image_item" src={product.image} alt="Product" width="100%" /></Link>
            <div className="container">
                <h4><b>{product.prodName}</b></h4>
                <p className="price_item">${product.price}</p>
                <p>{product.shortDesc}</p> 
            </div>
        </div>
    )

}

export default Item;
