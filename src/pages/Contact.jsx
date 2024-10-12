import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="section contact-section">
            <h2 className="contact-title">Contact</h2>
            <form className="contact-form">
                <label htmlFor="name">Nom:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
};

export default Contact;
