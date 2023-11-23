import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Portfolio
            </HashLink> */}
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;