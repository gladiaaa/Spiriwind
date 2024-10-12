import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sales = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        axios.get('http://62.210.219.124/get_sales.php')
            .then(response => setSales(response.data))
            .catch(error => console.error('Error fetching sales:', error));
    }, []);

    return (
        <div className="sales">
            <h2>Ventes</h2>
            <ul className="sales-list">
                {sales.map(sale => (
                    <li key={sale.id} className="sales-item">
                        {sale.product_name} - {sale.amount}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sales;
