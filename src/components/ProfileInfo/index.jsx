import React, { useState } from 'react';
import Button from '../Button';
import { useAuth } from '../../context/AuthContext';

import './styles.css';

const ProfileInfo = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const { auth, signOut } = useAuth();
    console.log(auth.user.username);
    const username = auth.user.username;

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    return (
        <div className="profile-info-container">
            <div className="avatar-container">
                <img
                    src={'https://ui-avatars.com/api/?name=' + (username || 'R')}
                    alt={username[0]}
                    className="profile-avatar"
                />
            </div>
            <div className="username-container">
                <span className="username">{username}</span>
            </div>
            <div className="menu-container" onClick={toggleTooltip}>
                <div className="three-dots">⋮</div>
                {showTooltip && (
                    <div className="tooltip">
                        <Button onClick={() => signOut()} >Sign Out</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileInfo;
