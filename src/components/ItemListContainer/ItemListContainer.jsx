import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import ItemLoader from '../ItemLoader/ItemLoader';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, addDoc, query, where} from 'firebase/firestore';

// read product list - temporary source!
import prodJson from '../../data/product.json';



const ItemListContainer = () => {

    const {category } = useParams();
    const db = getFirestore();
    const itemCollection = collection(db, 'items');

    const [prodFiltered, setProdFiltered] = useState([]);
    const [timeLoader, setTimeLoader] = useState(500);
    // const [cat, setCat] = useState(category);
    let auxProducts = [];

    // if (category) {
    //     collectionCategoryLoader();
    // }

    // useEffect(()=>{        
    //     //
    //     initialUploadDummy();
    //     //
    //     if (category ) {
    //         console.log('Tiene categoría, viene por acá!');
    //         collectionCategoryLoader();

    //     } else {
    //         console.log('Sin RESTRICCIÓN de categoria');
    //         collectionLoader();
    //     } 
    // }, []);

    // useEffect(()=>{
    //     console.log('estoy en el useEfect de Products');
    //     products.map(p => auxProducts = [...auxProducts, <Item product={p} /> ]);
    //     setProdFiltered(auxProducts);
    //     setCat(category);
    //     // console.log('Cambiaron los productos!!!!');
    //     // console.log(JSON.stringify(auxProducts));
    // }, [products]);

    // useEffect(()=>{
    //     console.log('Categoria--> ' +cat);

    // }, [cat]);

    useEffect(()=>{
        setTimeLoader(60000);
        if(category) {
            collectionCategoryLoader();
        } else {
            collectionLoader();
        }

    }, [category]);

    function collectionLoader () {
        getDocs(itemCollection)
        .then((snapshot) => {
            let auxSnapshoot = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
            auxSnapshoot.map(p => auxProducts = [...auxProducts, <Item product={p} /> ]);
            setProdFiltered(auxProducts);
            setTimeLoader(0);
            // setProducts(auxSnapshoot);
        });
    };

    function collectionCategoryLoader () {
        const q = query (
            collection(db, 'items'),
            where ('category','==', category)
        );
        getDocs(q).then((snapshot) => {
            let auxSnapshoot = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
            auxSnapshoot.map(p => auxProducts = [...auxProducts, <Item product={p} /> ]);
            setProdFiltered(auxProducts);
            setTimeLoader(0);
            // setProducts(auxSnapshoot);
        }); 
    };

    const initialUploadDummy = () => {
        // este proceso tiene como objetivo cargar por unica vez los items que antes se venían utilizando desde un JSON
        const itemCollection = collection(db, 'items');
        getDocs(itemCollection)
        .then(snapshot => { 
            // snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));           
            let auxSnapshoot = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }));
            if (auxSnapshoot.length== 0)  {
                prodJson.map(p => {
                    addDoc(itemCollection, p)
                        .then(({id})=> console.log(id))
                        .catch(error => console.error('error addDoc: '+error));

                });

            } else {
                console.log('No se requiere cargar nuevamente los items Dummy');
            }
        })
        .catch(error => console.error(error));
    }
    return (
        <div >
            <ItemLoader setTime={timeLoader}/>
            <ItemList products={prodFiltered} />
            {/* <ItemList products={products} /> */}
        </div>
    )

}


export default ItemListContainer;