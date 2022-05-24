import React, { useState, useEffect, useContext } from 'react';
import './ItemCount.css'
import Swal from 'sweetalert2'
import CartContext from '../CartContext/CartContext';



const ItemCount = ({product,  initial}) => {
    const {cartList, addItem} = useContext(CartContext);
    let prodCartFiltered = cartList.filter(p => p.item.idProduct== product.idProduct);

    // console.log('--> prodCartFiltered <-- '+JSON.stringify(prodCartFiltered));
    let initialValue;
    const [qtty, setQtty] = useState();
    useEffect(()=>{
        prodCartFiltered = cartList.filter(p => p.item.idProduct== product.idProduct);
        if (prodCartFiltered.length != 0) {
            initialValue = prodCartFiltered[0].qtty;
    
        } else {
            initialValue = initial;
        }
        setQtty(initialValue)

    }, [product]);   
    let stock   = product.stock;
    let price   = product.price * qtty;
    // 
    function showAlert() {
        Swal.fire({
            title: 'Item added!',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
    }
    // 
    function handleIncreaseButton() {
        if (qtty<stock) { 
            setQtty(qtty + 1);
        }
    }
    function handleDecreaseButton() {
        if (qtty >1 ) {
            setQtty(qtty - 1 );
        }        
    }
    function applyOnAdd() {
        showAlert();
        addItem(product, qtty);
        // onAdd(qtty, price);     
        
    }
    // 
    return (
        <>
            <div className='card'>
                <img src={product.image} alt={product.alt} width="100%" />
                <a href={product.url}><h3>{product.prodName}</h3></a>
                
                <p className="price">${price}</p>
                <div className='modifyQtty'>
                    <button onClick={() => handleDecreaseButton()} className='buttonChange'>-</button>
                    <h5>{qtty}</h5>
                    {/* <input type="text" readOnly value={initial} />  */}
                    <button onClick={() => handleIncreaseButton()} className='buttonChange'>+</button>
                </div>
                <p><button onClick={applyOnAdd}  className='addToCart'>Add to Cart</button></p>

            </div>
        </>
    )

}


export default ItemCount;