import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <ItemListContainer  />} />
        <Route exact path="/category/:category" element={ <ItemListContainer  />} /> 
        <Route exact path="/item/:id" element={ <ItemDetailContainer  />} />  
        <Route exact path="/cart" element={ <Cart  />} />        
      </Routes>
      
    </div>    
  );
}

export default App;
