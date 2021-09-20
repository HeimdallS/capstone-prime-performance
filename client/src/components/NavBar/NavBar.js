import React, {useState} from 'react';
import * as AiIcon from "react-icons/ai";
import {Link} from "react-router-dom";
import {NavBarData} from './NavBarData';
import "./NavBar.scss";

function NavBar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="burger">
                <Link to="#" className="burger__bar">
                    <AiIcon.AiOutlineBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'burger__menu burger__menu--active' : 'burger__menu'}>
                <ul className="burger__menu-items" onClick={showSidebar}>
                    <li className="burger__toggle">
                        <Link to="#" className="burger__bar">
                            <AiIcon.AiOutlineClose />
                        </Link>
                    </li>
                    {NavBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.className}>
                                <Link to={item.path} className ="burger__direct">
                                    {item.icon}
                                    <span className="burger__path-name">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar
