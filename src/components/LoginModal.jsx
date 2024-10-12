import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../styles/LoginModal.css';

const LoginModal = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await login(username, password);
            if (result.success) {
                onClose();
                navigate('/admindashboard');
            } else {
                setError(result.message);
            }
        } catch (error) {
            setError('An error occurred during login.');
        }
    };

    const handleClickOutside = (e) => {
        if (e.target.className === 'login-modal') {
            onClose();
        }
    };

    return (
        <div className="login-modal" onClick={handleClickOutside}>
            <div className="login-content">
                <h2>Connexion</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <label>
                        Nom d'utilisateur:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Mot de passe:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Connexion</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
