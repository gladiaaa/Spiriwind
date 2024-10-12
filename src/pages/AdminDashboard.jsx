import React, { useState } from 'react';
import Header from '../components/Header';
import Posts from './Posts';
import Users from './Users';
import Sales from './Sales';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('posts');

    return (
        <div>
            <Header />
            <div className="admin-dashboard">
                <div className="admin-nav">
                    <button onClick={() => setActiveTab('posts')}>Posts</button>
                    <button onClick={() => setActiveTab('users')}>Users</button>
                    <button onClick={() => setActiveTab('sales')}>Sales</button>
                </div>
                <div className="admin-content">
                    {activeTab === 'posts' && <Posts />}
                    {activeTab === 'users' && <Users />}
                    {activeTab === 'sales' && <Sales />}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
