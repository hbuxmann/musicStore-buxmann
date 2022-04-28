import React, { useState, useEffect } from 'react';
import './ItemLoader.css'




const ItemLoader = ({product, onAdd}) => {

let myVar;
const [loaderDisplay, setLoaderDisplays] = useState('');
const [loaderText, SetLoaderText] = useState('');

function myFunction() {
  myVar = setTimeout(showPage, 2850);
}

function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
    setLoaderDisplays('displayNone');
    SetLoaderText('myDiv');
}

    useEffect(()=>{
        setLoaderDisplays('loader');
        SetLoaderText('displayNone');
        myFunction();

    }, []);
    
    return (
    <>
    <div id={loaderDisplay} ></div>
    {/* <div  id={loaderText} className='animate-bottom'>
        <h2>Tada!</h2>
        <p>Some text in my newly loaded page..</p>
    </div> */}

    </>
)

}


export default ItemLoader;