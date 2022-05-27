import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import  './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const navBar = () => {

    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

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
        let search = document.getElementById("search").value;    
        let search2 = document.getElementById("search2").value;       
        console.log('X: ' + e.clientX);
        console.log('Y: ' + e.clientY); 
        console.log('value: '+search);
        if (search != '' || search2 != '') {
            setParams({
                query: (search !='' ? search : search2)
            });
            console.log('params: '+params.get('query'));
            document.getElementById("search").value = '';
            document.getElementById("search2").value = '';
            navigate('/search/?query='+ (search !='' ? search : search2));
        }
 
    }

    function handlerKey(e){
        if (e.key === 'Enter'){
            clickPosition(e);
        }
    }
    // 
    return (
        <div>
            <nav className="contentTopBar">
                {/* <div>
                   <a className='burguerMenu' href="" onClick={openNav}><FontAwesomeIcon icon={faBars} /></a>
                </div> */}
                <div className='burguerMenu'>
                   {/* <a  href="" onClick={openNav}></a> */}
                   <Link to={``} > <FontAwesomeIcon icon={faBars} onClick={openNav} /> </Link>
                </div>
                <div>
                    <img className='logo' src="/images/construccion-logo.jpg" alt="logo en construcción" width="100" height="50"/>
                </div>
                <ul className="items-left">
                    <li><input type="text" className="hideTablet"  placeholder="Buscar..." name="search" id="search" onKeyDown={handlerKey}/></li>
                    {/* <li ><a className="hideTablet" href=""><FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickPosition} /></a></li> */}
                    <li className="hideTablet">
                        <Link to={``}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickPosition} />
                        </Link>
                    </li>
                    
                    {/* <li ><a className="hideDesktop" href="">inicio</a></li> */}
                    <li className="hideDesktop" ><Link to={`/`}>inicio</Link></li>
                    {/* <li ><a className="hideDesktop" href="">inicio</a></li> */}
                    <li className="hideDesktop"><Link to={``} >tienda</Link></li>
                    <li class="dropdown">
                        {/* <a className="hideDesktop dropbtn" href="">categoría</a> */}
                        {/* <li className="hideDesktop dropbtn"><Link to={``} >categoría</Link></li> */}
                        <Link to={``} className="hideDesktop dropbtn">categoría</Link>
                        <div class="dropdown-content">
                            <Link to={`/category/supersport`}>Super Sport</Link>
                            <Link to={`/category/scrambler`}>Scrambler Cafe</Link>
                            <Link to={`/category/naked`}>Naked</Link>
                            <Link to={`/category/cross`}>Cross</Link>
                            <Link to={`/`}>All</Link>
                        </div>
                    </li>
                    {/* <li ><a className="hideDesktop" href="">contáctanos</a></li> */}
                    <li className="hideDesktop"><Link to={``} >contáctanos</Link></li>
                </ul>
                <div id="myNav" className="overlay">
                    {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
                    <Link to={``} onClick={closeNav} className="closebtn" >&times;</Link>
                    <div className="overlay-content">
                        <div className='searchLeftBar'>
                            <input type="text" placeholder="Buscar..." name="search2"  id="search2"  onKeyDown={handlerKey}/>
                            {/* <a className="hideTablet" href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a> */}
                            <Link to={``} className="hideTablet">
                                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickPosition}/>
                            </Link>
                        </div>
                        <li><Link to={`/`}>inicio</Link></li>
                        {/* <a className="hideDesktop" href="">inicio</a> */}
                        <Link to={``} className="hideDesktop" >tienda</Link>
                        <div class="dropdown">
                            <Link to={``} className="hideDesktop dropbtn" >categoría</Link>
                            <div class="dropdown-content">
                                <Link to={`/category/supersport`}>Super Sport</Link>
                                <Link to={`/category/scrambler`}>Scrambler Cafe</Link>
                                <Link to={`/category/naked`}>Naked</Link>
                                <Link to={`/category/cross`}>Cross</Link>
                                <Link to={`/`}>All</Link>
                                {/* <a href="#">Super Sport</a>
                                <a href="#">Scrambler</a>
                                <a href="#">Naked</a>
                                <a href="#">Cross</a> */}
                            </div>
                        </div>                        
                        <Link to={``} className="hideDesktop" >contáctanos</Link>
                        {/* <a className="hideDesktop" href="">tienda</a>
                        <a className="hideDesktop" href="">categoría</a>
                        <a className="hideDesktop" href="">contáctanos</a> */}
                    </div>
                </div>
                <ul className="items-right">
                    {/* <li ><a className="hideDesktop" href="">acceder/registrarse</a></li> */}
                    <li><Link to={``} className="hideDesktop" >acceder/registrarse</Link></li>
                    <li ><CartWidget qtty='2'/></li>     
                </ul>
                
            </nav>
        </div>
    )
}

// Ref.: ttps://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar2

export default navBar;