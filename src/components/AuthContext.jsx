import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://62.210.219.124/auth.php', { username, password });
            if (response.data.success) {
                setUser(response.data.user);
                return { success: true };
            } else {
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            return { success: false, message: 'An error occurred during login.' };
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
