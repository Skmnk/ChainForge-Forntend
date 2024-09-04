import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">ChainForge Technologies</a>
            <div className="navbar-menu">
                <span className="navbar-dots">⋮</span>
            </div>
        </nav>
    );
};

export default NavBar;