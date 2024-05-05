import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const Button = ({ icon, children, onClick, className }) => {
    return (
        <button className={"icon-button " + className} onClick={onClick} >
            {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
            {children}
        </button>
    );
};

export default Button;