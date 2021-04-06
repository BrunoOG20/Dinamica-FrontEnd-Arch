import React, {useState} from 'react'

import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import Logo from '../images/arch_logo.png'

import '../styles/components/navbar.css';
import '../styles/components/sidebar.css';

export default function Navbar (){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    function userLogout(){
        alert("Deslogado com sucesso")
    }
    
    return (    
        <header> 
            <div className="container">
                <div className="logo"> 
                    <IconContext.Provider value={{ color: '#fff' }}>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </IconContext.Provider>

                    <img src={Logo} alt="Logo"/>
                </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'> 
                        </Link>
                    </li>
                        {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                        })}
                </ul>
            </nav>

            <nav className="menu-desktop">
                <ul>
                    <li className="search">
                        <input type="text" placeholder="Pesquisar"/><AiOutlineSearch/>
                    </li>
                    <Link to="/notify">
                    <li className="notify">
                        <IoIosNotifications color={'#fff'}/>
                    </li>
                    </Link>
                    
                    <li className="logout">
                        <CgProfile color={'#fff'}/>
                        <div className="logout-content">
                            <Link to="/register"><h4>Cadastrar</h4></Link>
                            <Link to="/login"><h4>Entrar</h4></Link>
                            <Link to="/"><h4 onClick={userLogout}>Logout</h4></Link>
                    </div>
                    </li>
                </ul>
            </nav>
            <div className="clear"></div>
            
            
                
            

        </div>
        
        </header>
        
    )  
}



