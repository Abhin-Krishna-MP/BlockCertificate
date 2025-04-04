import React, { useState } from 'react';
import './Login.css';

const Login = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login/signup logic here
        console.log('Form submitted:', formData);
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            email: '',
            password: '',
            name: '',
            confirmPassword: ''
        });
    };

    if (!isOpen) return null;

    return (
        <div className="login-login-overlay">
            <div className="login-login-backdrop" onClick={onClose}></div>
            <div className="login-login-modal">
                <div className="login-login-header">
                    <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    <button className="login-close-button" onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSubmit} className="login-login-form">
                    <div className={`login-form-container ${isLogin ? 'login-login' : 'login-signup'}`}>
                        {!isLogin && (
                            <div className="login-form-group">
                                <div className="login-input-group" data-type="text">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                    />
                                    <label>Full Name</label>
                                </div>
                            </div>
                        )}
                        <div className="login-form-group">
                            <div className="login-input-group" data-type="email">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="login-form-group">
                            <div className="login-input-group" data-type="password">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label>Password</label>
                            </div>
                        </div>
                        {!isLogin && (
                            <div className="login-form-group">
                                <div className="login-input-group" data-type="password">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                    />
                                    <label>Confirm Password</label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="login-form-actions">
                        <button type="submit" className="login-login-button">
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                    <div className="login-form-footer">
                        {isLogin ? (
                            <>
                                <a href="#" className="login-forgot-password">Forgot Password?</a>
                                <p className="login-signup-prompt">
                                    Don't have an account? 
                                    <button type="button" onClick={toggleForm} className="login-toggle-form">
                                        Sign Up
                                    </button>
                                </p>
                            </>
                        ) : (
                            <p className="login-signup-prompt">
                                Already have an account? 
                                <button type="button" onClick={toggleForm} className="login-toggle-form">
                                    Sign In
                                </button>
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
