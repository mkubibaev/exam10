import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-info">
            <NavLink to="/" className="navbar-brand">Sitename</NavLink>
        </nav>
    );
};

export default Header;
