import React from 'react';
import Button from '../Button';
import './styles.css';

const ErrorModal = ({ errorMessage, onClose }) => {
    return (
        <div className="error-modal">
            <div className="error-modal-content">
                <span className='modal-heading'>Error</span>
                <p className='modal-message'>{errorMessage}</p>
                <Button className='modal-btn' onClick={onClose}>Close</Button>
            </div>
        </div>
    );
};

export default ErrorModal;