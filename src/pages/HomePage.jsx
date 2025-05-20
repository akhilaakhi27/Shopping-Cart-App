import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent';

function HomePage() {
    const products = useSelector(state => state.products.products); 
    const cartItems = useSelector(state => state.cart.items); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [filteredProducts, setFilteredProducts] = useState(products); 
    const [notification, setNotification] = useState(''); 

    const handleSearch = (searchTerm) => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); 
        setNotification(`${product.name} added to cart!`); 
        setTimeout(() => setNotification(''), 3000);
    };

    return (
        <div className='home-page'>
            <h1 className="page-title">Welcome to Kurta Store</h1>
            <div className="search-container">
                <SearchComponent onSearch={handleSearch} />
                <div className="action-buttons">
                    <button className="login-button" onClick={() => navigate('/login')}>Login</button>
                    
                    <div className="cart-button-container">
                        <button className="go-to-cart-button" onClick={() => navigate('/cart')}>🛒</button>
                        <span className="cart-count">{cartItems.length}</span>
                    </div>
                </div>
            </div>
            {notification && <div className="notification">{notification}</div>}
            <div className="product-list">
                {filteredProducts.length === 0 ? (
                    <p className="no-results">Sorry!!! No matching Product found.</p>
                ) : (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product">
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '150px', height: '150px', cursor: 'pointer' }}
                                onClick={() => navigate(`/product/${product.id}`)}
                            />
                            <h2>{product.name}</h2>
                            <p>Price: ₹{product.price}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default HomePage;