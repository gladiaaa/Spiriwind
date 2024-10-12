import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Post.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [username] = useState('testuser'); // Use a default or dynamically set username

    useEffect(() => {
        axios.get('http://62.210.219.124/get_post.php')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handleAddPost = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('username', username);

        axios.post('http://62.210.219.124/add_post.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            alert('Post added successfully');
            setPosts([...posts, response.data]);
        })
        .catch(error => alert('Failed to add post'));
    };

    const handleDeletePost = (id) => {
        axios.delete(`http://62.210.219.124/delete_post.php?id=${id}`)
            .then(response => {
                if (response.data.status === 'success') {
                    setPosts(posts.filter(post => post.id !== id));
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => alert('Failed to delete post'));
    };

    return (
        <div className="posts">
            <form onSubmit={handleAddPost} className="form">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                <button type="submit">Ajouter</button>
            </form>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <button onClick={() => handleDeletePost(post.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
