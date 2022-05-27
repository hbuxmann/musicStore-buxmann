import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {Routes, Route} from 'react-router-dom';
import {CartProvider} from './components/CartContext/CartContext'
import UserFormContainer from './components/UserFormContainer/UserFormContainer';


function App() {
  return (
    <CartProvider>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <ItemListContainer  />} />
          <Route exact path="/category/:category" element={ <ItemListContainer  />} />         
          <Route exact path="/item/:id" element={ <ItemDetailContainer  />} />  
          <Route exact path="/cart" element={ <Cart  />} />
          <Route exact path="/cart/user" element={ <UserFormContainer  />} /> 
          <Route path="/search/" element={ <ItemListContainer  />} />           
        </Routes>
      </div>      
    </CartProvider>    
  );
}

export default App;
