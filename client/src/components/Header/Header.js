import React from 'react'
import {NavLink} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Header() {

    return (
        <div>
            <NavLink to='/' className="header__title">Prime Performance</NavLink>
            <NavBar />
        </div>
    )
}

export default Header
