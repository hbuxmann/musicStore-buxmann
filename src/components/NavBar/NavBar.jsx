import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import  './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const navBar = () => {

    function openNav(e) {
        e.preventDefault();
        document.getElementById("myNav").style.width = "80%";        
    }    
    function closeNav(e) {
        e.preventDefault();
        document.getElementById("myNav").style.width = "0%";        
    }
    function clickPosition(e) {
        e.preventDefault();
        console.log('X: ' + e.clientX);
        console.log('Y: ' + e.clientY);         
    }
    // 
    return (
        <div>
            <nav className="contentTopBar">
                <div>
                   <a className='burguerMenu' href="" onClick={openNav}><FontAwesomeIcon icon={faBars} /></a>
                </div>
                <div>
                    <img className='logo' src="/images/construccion-logo.jpg" alt="logo en construcción" width="100" height="50"/>
                </div>
                <ul className="items-left">
                    <li><input type="text" className="hideTablet"  placeholder="Buscar..." name="search" /></li>
                    <li ><a className="hideTablet" href=""><FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickPosition} /></a></li>
                    
                    <li ><a className="hideDesktop" href="">inicio</a></li>
                    <li ><a className="hideDesktop" href="">tienda</a></li>
                    <li ><a className="hideDesktop" href="">soporte</a></li>
                    <li ><a className="hideDesktop" href="">contáctanos</a></li>          
                </ul>
                <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="overlay-content">
                        <div className='searchLeftBar'>
                            <input type="text" placeholder="Buscar..." name="search" />
                            <a className="hideTablet" href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        </div>
                        <a className="hideDesktop" href="">inicio</a>
                        <a className="hideDesktop" href="">tienda</a>
                        <a className="hideDesktop" href="">soporte</a>
                        <a className="hideDesktop" href="">contáctanos</a>
                    </div>
                </div>
                <ul className="items-right">
                    <li ><a className="hideDesktop" href="">acceder/registrarse</a></li>
                    <li ><CartWidget qtty='2'/></li>     
                </ul>
                
            </nav>
        </div>
    )
}

export default navBar;