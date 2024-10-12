import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://62.210.219.124/login.php', { username, password })
            .then(response => {
                if (response.data.status === 'success') {
                    navigate(response.data.redirect);
                } else {
                    setError(response.data.message);
                }
            })
            .catch(() => setError('Erreur de connexion'));
        };

    return (
        <div className="login-container">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <label>Nom d'utilisateur:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <label>Mot de passe:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {error && <p className="error">{error}</p>}
                <button type="submit">Connexion</button>
            </form>
        </div>
    );
};

export default Login;
