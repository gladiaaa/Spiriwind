import React from 'react';
import '../styles/Post.css';

const Post = ({ title, date, author, comments, image, description }) => {
    return (
        <div className="post-container">
            <img src={image} alt={title} className="post-image" />
            <div className="post-content">
                <h3>{title}</h3>
                <div className="post-meta">
                    <span>{author}</span> • <span>{date}</span> • <span>{comments}</span>
                </div>
                <p>{description}</p>
                <a href="/news/{title.toLowerCase().replace(/ /g, '-')}" className="btn-secondary">Lire la suite</a>
            </div>
        </div>
    );
};

export default Post;
