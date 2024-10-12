import React, { useState } from 'react';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', 'admin'); 
        formData.append('date', new Date().toISOString().slice(0, 19).replace('T', ' ')); 
        formData.append('image', image);

        try {
            const response = await fetch('/php/add_post.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Ajouter un Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titre:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddPost;
