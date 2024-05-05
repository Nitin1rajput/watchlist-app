import React from 'react';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css'

const NavLinkButton = ({ to, children, icon, ...props }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <button
            className={`nav-button ${isActive ? 'active' : ''}`}
            {...props}
        >
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
            {children}
        </button>
    );
};

export default NavLinkButton;