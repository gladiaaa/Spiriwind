import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Wiki from './pages/Wiki';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './components/AuthContext';

function App() {
    return (
        <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/Wiki" element={<Wiki />} />
                    <Route path="/admindashboard" element={<AdminDashboard />} />
                </Routes>
        </AuthProvider>
    );
}

export default App;
