import React, {useContext, useEffect } from 'react';
import './ItemListCart.css';
import CartContext from '../CartContext/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus, faCartShopping, faDollarSign} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



const ItemListCart = () => {
    const {cartList, totalPriceCart, qttyCart, decreaseQtty, increaseQtty, removeItem, clear} = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if (qttyCart == 0) {
            Swal.fire(
                'Information!',
                'There are no items in your cart, please buy one!',
                'info'
            );
            navigate(`/`);
        }
    }, []);

    const buildCartLine = (p) => {
        return (
            <div className='row_line_v1'>
                <label >{p.item.shortDesc}</label>
                <lab3l >{p.item.price}</lab3l>
                <label >{p.item.price * p.qtty }</label>
                <label className='row_line_buttons align_icons'>
                    <FontAwesomeIcon onClick={() => decreaseQtty(p.item.idProduct)}  className='icon_button_action' icon={faMinus} />  
                    <label className='icon_button_action2' >{p.qtty}</label>            
                    <FontAwesomeIcon  onClick={() => increaseQtty(p.item.idProduct)} className='icon_button_action' icon={faPlus} />              
                    <FontAwesomeIcon  onClick={() => removeItem(p.item.idProduct)} className='icon_button_action' icon={faTrash} />                       
                </label>
            </div>
        )
    }

    

    const executeRemoveItems= () => { 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                clear();                
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                navigate(`/`);
            } 
        })
    }

    useEffect( () => () => console.log("unmount"), [] );

    return (
        <div>
            <div className='container_resume'>
                <div className='row_line_v2'>
                    <label>Products</label>
                    <label >Unit Price</label>
                    <label >Total Price</label>
                    <label className='align_icons'><FontAwesomeIcon icon={faCartShopping} /><b>{qttyCart}</b></label>

                </div>
                <hr />
                <div >
                    {cartList.map(p => buildCartLine(p))} 
                </div>
                <hr />
                <div className='row_line_total'>
                    <label>Total</label>
                    <label className='align_icons'><b>$ {totalPriceCart}</b></label>
                </div>           
            </div>
            <div className='div_button'>
                <Button classeToApply={'endPurchase'} onClick={executeRemoveItems} name={'Clear Cart'} />
            </div>
            
        </div>
    )

}


export default ItemListCart;
