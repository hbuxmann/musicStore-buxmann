import React, {useContext, useEffect, useState } from 'react';
import './UserFormCart.css';
import { useForm } from 'react-hook-form';
import CartContext from '../CartContext/CartContext'
import Swal from 'sweetalert2';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import ItemLoader from '../ItemLoader/ItemLoader';


const UserFormCart = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {qttyCart, cartList, totalPriceCart, clear} = useContext(CartContext);
    const [loaderTime, setLoaderTime] = useState(0);
    const navigate = useNavigate();
    const today = new Date();
    // 
    // const onSubmit = (data) => {        
    //     console.log(data);
    //     console.log('Nombre: '+data.nombre);
    //     console.log('email: '+data.email);
    //     console.log('Telefono: '+data.telefono);
    //     sendOrder(data);
    // }

    const errorMessage = (data) => {
        return console.log(data);
    }

    const sendOrder = (data) => {
        const auxCartList  = cartList.map(item => {
            return({
            id : item.item.id,
            idProduct : item.item.idProduct,
            name: item.item.alt,
            price : item.item.price,
            qtty : item.qtty
        })});
        // console.log('AuxCartList->'+ JSON.stringify( auxCartList));
        setLoaderTime(10000); 
        const order = {
            buyer : { name: data.nombre, emai: data.email, telefono: data.telefono},
            items : auxCartList,
            total : totalPriceCart,
            date  : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        };
        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
        .then(({id}) =>{ 
            Swal.fire(
                'Congrats!',
                'Your Ticket #'+id+' for a total $'+totalPriceCart,
                'success'
            );            
            console.log(id);
            setLoaderTime(0); 
            navigate('/');
            clear();   
        }        
        )
        .catch(error => console.error(error));
        // navigate('/');
        // clear();        
    }

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

    return (
        <>
        <ItemLoader setTime={loaderTime} />
        {/* <h2>Hola soy el formulario!</h2> */}
        <form className='container_user_form' onSubmit={handleSubmit(sendOrder)}>
        {/* <form className='container_user_form' > */}

            <div className='item_row_form'>
                <label >Nombre y Apellido</label>
                <input type={'text'} {...register('nombre', {
                    required: true,
                    maxLength: 30
                })} />
                {/* {errors.nombre && <label>Nombre es requerido y debe ser inferior a 30</label>} */}
            </div>
            <div className='item_row_form'> 
                <label >e-mail</label>
                <input type={'text'} {...register('email', {
                    required: true,
                    // pattern: /^[^\s@]+@[^\s@]+\[^\s@]+$/i
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
                })} />
            </div>
            <div className='item_row_form'>
                <label >Telefono</label>
                <input type={'text'} {...register('telefono', {
                    required: true,
                    maxLength: 30
                })} />
                 {/* {errors.telefono && <label>Telefono es requerido y debe ser inferior a 30</label>} */}
            </div>
            <div>
                {errors.nombre && <p>Ingresá tu nombre</p>}
                {errors.email && <p>Ingresá un correo</p>}
                {errors.telefono && <p>Ingresá un numero de teléfono</p>}
            </div>
            {/* <Button classeToApply={'endPurchase'} onClick={onSubmit} name={'Enviar'} /> */}
            <Button classeToApply={'endPurchase'}  name={'Enviar'} />


        </form>            
        </>
    )

}

export default UserFormCart;
