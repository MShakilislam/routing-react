import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>This is a header section </h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Mobails">Mobails</NavLink>
                <NavLink to="/Laptops">Laptops</NavLink>
                <NavLink to="/Users">Users</NavLink>
                <NavLink to="/Users2">Users2</NavLink>
                <NavLink to="/Posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;