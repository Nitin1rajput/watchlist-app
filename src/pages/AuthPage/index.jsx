import React, { useState } from 'react';

import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const { signIn } = useAuth()
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(email);
        navigate('/');
    };

    return (
        <div className="signin-container">
            <div className="card">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button className='signin-btn' type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;