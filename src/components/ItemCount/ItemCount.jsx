import React, { useState, useEffect } from 'react';
import './ItemCount.css'
import Swal from 'sweetalert2'
// import 'sweetalert2/themes/dark/dark.scss';

const ItemCount = ({product, onAdd, initial}) => {
    const [qtty, setQtty] = useState(initial);
    // let initial = product.initial;
    let stock   = product.stock;
    let price   = product.price * qtty;

    function showAlert() {
        Swal.fire({
            title: 'Item added!',
            // text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Continue'
          })
    }
    // mount component
    useEffect(()=>{
        console.log('mount componet')
    }, []);
    // mount component
    useEffect(()=>{
        console.log('change componet')
    }, [qtty]);
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
        onAdd(qtty, price);     
        
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