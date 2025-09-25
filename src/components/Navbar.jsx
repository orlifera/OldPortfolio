import React, { useEffect, useState } from 'react';
import Switch from './Switch';
import MobileNav from './MobileNav';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            { size > 768 ? (
                <nav id="menu">
                    <a id="logo" to="/">
                        <p>Orlando Ferazzani</p>
                    </a>
                    <ul>
                        { navLinks.map((navLink) => (
                            <li key={ navLink.to }>
                                <NavLink activeClassName="active" to={ navLink.to }>
                                    <span lang="en">{ navLink.label }</span>
                                </NavLink>
                            </li>
                        )) }
                        <li className="switch">
                            <Switch />
                        </li>
                    </ul>
                </nav>
            ) : (
                <MobileNav />
            ) }
        </>
    );
}

// Define dynamic navigation links
const navLinks = [
    { to: '/', label: 'Tic Tac Toe' },
    { to: '/about', label: 'Spotify Widget' },
    { to: '/kanban', label: 'Kanban' },
];

export default Navbar;
