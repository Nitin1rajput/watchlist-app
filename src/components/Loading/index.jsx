import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css';

const Loading = ({ text }) => {
    return (
        <div className="loading-container">
            <FontAwesomeIcon icon={faSpinner} className="loading-spinner" />
            <p className="loading-text">{text || 'Loading...'}</p>
        </div>
    );
};

export default Loading;