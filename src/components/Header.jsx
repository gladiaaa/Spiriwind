import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoginModal from './LoginModal';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const toggleLogin = () => setShowLogin(!showLogin);

    const closeLogin = () => {
        setShowLogin(false);
    };

    return (
        <header className="header">
            <div className="header-bg">
                <div className="bar">
                    <nav className="nav">
                        <Link to="/">Accueil</Link>
                        <Link to="/about">À propos</Link>
                        <Link to="/rules">Règles</Link>
                        <Link to="/gallery">Galerie</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/shop">Boutique</Link>
                        <Link to="/wiki">Wiki</Link>
                    </nav>
                </div>
                <div className="header-top">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <div className="login-container">
                        {user ? (
                            <div className="user-info">
                                <button className="logout-button" onClick={logout}>Déconnexion</button>
                                <Link to="/admindashboard" className="admin-button">Admin Dashboard</Link>
                            </div>
                        ) : (
                            <button className="login-button" onClick={toggleLogin}>Connexion</button>
                        )}
                    </div>
                </div>
            </div>
            {showLogin && <LoginModal onClose={closeLogin} />}
        </header>
    );
};

export default Header;
