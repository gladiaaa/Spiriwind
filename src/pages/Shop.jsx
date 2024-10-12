/*
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

// Mettez à jour les chemins d'images pour correspondre à l'emplacement correct
const products = [
    {
        image: require('../assets/Gemme1.webp'),
        title: 'Gemme 1',
        price: 10,
    },
    {
        image: require('../assets/Gemme2.webp'),
        title: 'Gemme 2',
        price: 15,
    },
    {
        image: require('../assets/Gemme3.webp'),
        title: 'Gemme 3',
        price: 20,
    },
    {
        image: require('../assets/Gemme4.webp'),
        title: 'Gemme 4',
        price: 25,
    },
    {
        image: require('../assets/Gemme5.webp'),
        title: 'Gemme 5',
        price: 30,
    },
    {
        image: require('../assets/Gemme6.webp'),
        title: 'Gemme 6',
        price: 35,
    },
];

const Shop = () => {
    return (
        <div className="shop">
            <h1>Bienvenue dans la Boutique</h1>
            <div className="product-list">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;
*/
import React from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import '../styles/Shop.css';

// Mettez à jour les chemins d'images pour correspondre à l'emplacement correct
const products = [
    {
        image: require('../assets/Gemme1.webp'),
        title: '300 CRISTAUX',
        price: '2.99 EUR',
    },
    {
        image: require('../assets/Gemme2.webp'),
        title: '500 CRISTAUX',
        price: '4.99 EUR',
    },
    {
        image: require('../assets/Gemme3.webp'),
        title: '2000 CRISTAUX (+ 250 BONUS)',
        price: '19.99 EUR',
    },
    {
        image: require('../assets/Gemme4.webp'),
        title: '3500 CRISTAUX (+ 500 BONUS)',
        price: '34.99 EUR',
    },
    {
        image: require('../assets/Gemme5.webp'),
        title: '5000 CRISTAUX (+ 1000 BONUS)',
        price: '49.99 EUR',
    },
    {
        image: require('../assets/Gemme6.webp'),
        title: '10000 CRISTAUX (+ 2000 BONUS)',
        price: '99.99 EUR',
    },
];

const Shop = () => {
    return (
        <div>
            <Header />
            <div className="shop">
                <h1>Bienvenue dans la Boutique</h1>
                <div className="product-list">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
