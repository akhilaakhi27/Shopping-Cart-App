import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import './CartPage.css'; // Assuming you have a CSS file for styling

function CartPage() {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1 className="cart-title">Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty. Add some items to see them here!</p>
            ) : (
                <div className="cart-container">
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.product.id} className="cart-item">
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.product.name}</h3>
                                    <p className="cart-item-price">Price: ₹{item.product.price}</p>
                                    <div className="cart-item-quantity">
                                        <button
                                            onClick={() => dispatch(decreaseQuantity(item.product))}
                                            className="quantity-button"
                                        >
                                            -
                                        </button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(increaseQuantity(item.product))}
                                            className="quantity-button"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.product))}
                                        className="remove-button"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Total Amount: ₹{totalAmount}</h2>
                        <button
                            className="checkout-button"
                            onClick={() => navigate('/payment')}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;