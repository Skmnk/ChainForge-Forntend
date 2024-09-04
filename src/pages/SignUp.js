// SignUp.js
import React, { useState , useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import './Pages.css';
import {registerUser} from '../services/AuthServices'
const SignUp = () => {

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
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [changeInpassword, setChangeInpassword] = useState(false)
    const [passwordRequirements, setPasswordRequirements] = useState({
        hasLowercase: false,
        hasUppercase: false,
        hasNumber: false,
        hasSpecialChar: false,
        isLongEnough: false
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const validatePassword = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        if (name === 'password') {
            setChangeInpassword(true)
            setPasswordRequirements({
                hasLowercase: /[a-z]/.test(value),
                hasUppercase: /[A-Z]/.test(value),
                hasNumber: /\d/.test(value),
                hasSpecialChar: /[@$!%*?&]/.test(value),
                isLongEnough: value.length >= 8
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!validatePassword(formData.password)) {
            newErrors.password = "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit form logic
            console.log("Form submitted successfully");
        }

        try {
            const result = await registerUser(formData.name, formData.email, formData.password, formData.confirmPassword);
            // console.log(`backend result ${JSON.stringify(result.message)}`)
            setSuccess(result.message);
            setError(null);
            // Handle successful registration (e.g., redirect to login)
        } catch (error) {
            setError(error.msg || 'Registration failed');
            setSuccess(null);
        }
    };

    useEffect(() => {
        if (success === "User registered successfully") {
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after 2 seconds
            }, 2000);
        }
    }, [success, navigate]);

    return (
        <>
        {isLoading ? <Loading /> : (
                <div className="signup-container">
            
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
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
                    {errors.password && <small className="error">{errors.password}</small>}
                    {changeInpassword && (
                         <div className="password-requirements">
                         <label>
                             <input
                                 type="checkbox"
                                 checked={passwordRequirements.hasLowercase}
                                 readOnly
                             />
                             At least one lowercase letter
                         </label>
                         <label>
                             <input
                                 type="checkbox"
                                 checked={passwordRequirements.hasUppercase}
                                 readOnly
                             />
                             At least one uppercase letter
                         </label>
                         <label>
                             <input
                                 type="checkbox"
                                 checked={passwordRequirements.hasNumber}
                                 readOnly
                             />
                             At least one number
                         </label>
                         <label>
                             <input
                                 type="checkbox"
                                 checked={passwordRequirements.hasSpecialChar}
                                 readOnly
                             />
                             At least one special character
                         </label>
                         <label>
                             <input
                                 type="checkbox"
                                 checked={passwordRequirements.isLongEnough}
                                 readOnly
                             />
                             At least 8 characters
                         </label>
                     </div>
                    )}
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
                    <br />
                    <br />
                    <button type="submit">Sign Up</button>
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
                
                <p>Already registered? <Link to="/login" className='link'>Login</Link></p>
            </div>
        )}
        </>
    );
};

export default SignUp;
