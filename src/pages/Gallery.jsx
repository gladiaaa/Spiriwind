import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Galerie</h2>
            <div className="gallery-content">
                <div className="gallery-item">Image 1</div>
                <div className="gallery-item">Image 2</div>
                <div className="gallery-item">Image 3</div>
            </div>
        </section>
    );
};

export default Gallery;
