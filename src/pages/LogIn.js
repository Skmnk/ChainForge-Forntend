import React, { useState, useEffect } from 'react';
import './Pages.css';
import { Link,useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

import { loginUser } from '../services/AuthServices';
const LogIn = () => {

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);



    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 1000); // Loading for 2 seconds
}, []);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0 && formData.password.length >= 8) {
            // Submit form logic
            console.log("Login successful frontend validation");
        }

        try {
            console.log('last try')
            const result = await loginUser(formData.email, formData.password);
            setSuccess(result.msg);
            setError(null);
            
            // Handle successful login (e.g., save token and redirect)
        } catch (error) {
            setError(error.msg || 'Login failed');
            setSuccess(null);
        }
    };

    useEffect(() => {
        if (success === "Logged in successfully") {
            setTimeout(() => {
                navigate('/'); // Redirect to login page after 2 seconds
            }, 2000);
        }
    }, [success, navigate]);

    return (

        <>
        {isLoading ? <Loading /> : (
                <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <small className="error">{errors.email}</small>}
                    
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    
                    <button type="submit" disabled={formData.password.length < 8}>Login</button>
                </form>

                {success && (
                        <div className="success-popup">
                            <p>{success}</p>
                        </div>
                    )}
                    {
                        <div className='error-popup'>
                            <p>{error}</p>
                        </div>
                    }
                <p>Haven't registered yet? <Link to="/signup" className='link'>SignUp</Link></p>
            </div>
            )}
        </>
        
    );
};


export default LogIn;
