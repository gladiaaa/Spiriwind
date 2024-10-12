import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://62.210.219.124/get_users.php');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://62.210.219.124/add_user.php', {
                username,
                email,
                password,
                role
            });
            if (response.data.status === 'success') {
                alert('User added successfully');
                fetchUsers(); // Refresh the users list
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Failed to add user');
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await axios.delete('http://62.210.219.124/delete_user.php', { data: { id } });
            if (response.data.status === 'success') {
                alert('User deleted successfully');
                fetchUsers(); // Refresh the users list
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Failed to delete user');
        }
    };

    const handleUpdateUser = async (id) => {
        try {
            const response = await axios.put('http://62.210.219.124/update_user.php', {
                id,
                username,
                email,
                password,
                role
            });
            if (response.data.status === 'success') {
                alert('User updated successfully');
                fetchUsers(); // Refresh the users list
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert('Failed to update user');
        }
    };

    return (
        <div className="users">
            <form onSubmit={handleAddUser} className="form">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                    <option value="Community Manager">Community Manager</option>
                </select>
                <button type="submit">Add User</button>
            </form>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <h3>{user.username}</h3>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        <button onClick={() => handleUpdateUser(user.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
