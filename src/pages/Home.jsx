import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://62.210.219.124/get_post.php')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="home-container">
                {posts.length ? (
                    posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="post-header">
                                <h2>{post.title}</h2>
                                <div className="post-meta">
                                    <span><FaUser className="icon" /> {post.username}</span>
                                    <span><FaCalendarAlt className="icon" /> {new Date(post.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div className="post-image">
                                {post.image_url && <img src={`http://62.210.219.124/uploads/${post.image_url}`} alt={post.title} />}
                            </div>
                            <div className="post-content">
                                <p>{post.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucun post disponible.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
