import React, {useState} from 'react';
import * as AiIcon from "react-icons/ai";
import {NavLink} from "react-router-dom";
import {NavBarData} from './NavBarData';
import "./NavBar.scss";
import {IconContext} from 'react-icons';

function NavBar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color:'#EEEBDD'}}>
            <div className="burger">
                <NavLink to="#" className="burger__bar">
                    <AiIcon.AiOutlineBars onClick={showSidebar}/>
                </NavLink>
                <NavLink to='/' className="burger__title">PRIME PERFORMANCE</NavLink>
            </div>
            <nav className={sidebar ? 'burger__menu burger__menu--active' : 'burger__menu'}>
                <ul className="burger__menu-items" onClick={showSidebar}>
                    <li className="burger__toggle">
                        <NavLink to="#" className="burger__bar">
                            <AiIcon.AiOutlineClose />
                        </NavLink>
                    </li>
                    {NavBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.className}>
                                <NavLink to={item.path} className ="burger__direct">
                                    {item.icon}
                                    <span className="burger__path-name">{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>    
        </>
    )
}

export default NavBar
