import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h2 className='header-title'>Movie Mate</h2>
            <nav className='header-nav'>
                <ul className='header-menu'>
                    <li className='header-item'>
                        <NavLink to='/home' className='nav-link'>
                            Home
                        </NavLink>
                        <NavLink to='/movies' className='nav-link'>
                            Movies
                        </NavLink>
                        <NavLink to='/about' className='nav-link'>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};


export default Header;