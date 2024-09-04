import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register User
export const registerUser = async (name, email, password, confirmPassword) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/register`, {
            name,
            email,
            password,
            confirmPassword,
            
        });
        return response.data; // This will include the token if registration is successful
    } catch (error) {
        throw error.response.data; // Handle or throw errors
    }
};

// Login User
export const loginUser = async (email, password) => {
    console.log(`trying to try ${email}`)
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/login`, {
            email,
            password,
        });
        return response.data; 
    } catch (error) {
        throw JSON.stringify(error.response.data); // Handle or throw errors
    }
    
};
