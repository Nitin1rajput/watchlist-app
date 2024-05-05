import React from 'react';
import './styles.css';

const EmptyData = () => {
    return (
        <div className="empty-data">
            <span className="empty-icon">🪣</span>
            <p>No data available.</p>
        </div>
    );
};

export default EmptyData;