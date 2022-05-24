import React, { useEffect, useState } from 'react';
import ItemLoader from '../ItemLoader/ItemLoader';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import {collection, getDocs, getFirestore,  query, where} from 'firebase/firestore';
let timeLoader = 60000;

// read product list - temporary source!
// import prodJson from '../../data/product.json';

const ItemDetailContainer = () => {
    const {id } = useParams();
    const db = getFirestore();

    const itemCollection = collection(db, 'items');
    const [prod, setProd] = useState([]);
    const productItemDetail = <ItemDetail product={prod} /> ;
    const [idDisplay, setIdDisplay] = useState('displayNone');

    useEffect(()=>{
        const q = query (
            collection(db, 'items'),
            where ('idProduct','==', parseInt(id))
        );
        getDocs(q).then((snapshot) => {
            // console.log(JSON.stringify(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))));
            let auxProd = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
            setProd(auxProd[0]); 
            timeLoader = 200;
            setIdDisplay('');       
        }); 
        // setTimeout(() => {            
        //     setIdDisplay('');
        // }, 3000);
    }, []);

    return (
        <div>
            <ItemLoader setTime={timeLoader}/>
            <div id={idDisplay}>
                {productItemDetail}
            </div>
        </div>
    )
   

}

export default ItemDetailContainer;