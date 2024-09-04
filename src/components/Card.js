import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    return (
        <div className="card">
            <h2 className='H2'>Welcome to ChainForge Technologies</h2>
            <p>If you are a new user, please sign up. If you are an existing user, please log in.</p>
            <div className="card-buttons">
                <button className="btn-signup" onClick={() => navigate('/signup')}>Sign Up</button>
                <button className="btn-login" onClick={() => navigate('/login')}>Log In</button>
            </div>
        </div>
    );
};

export default Card;
