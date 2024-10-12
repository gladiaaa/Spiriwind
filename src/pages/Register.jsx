import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('/register', { username, password, email })
            .then(response => {
               
            })
            .catch(error => console.error(error));
    };

    return (
        <section className="register-section">
            <h2 className="register-title">Inscription</h2>
            <form className="register-form" onSubmit={handleRegister}>
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">S'inscrire</button>
            </form>
        </section>
    );
};

export default Register;
