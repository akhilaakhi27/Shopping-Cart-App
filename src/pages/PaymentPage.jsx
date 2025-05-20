import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [paymentMode, setPaymentMode] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        if (!deliveryAddress || !paymentMode) {
            alert('Please fill in all the details before placing the order.');
            return;
        }
        setOrderPlaced(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="payment-page-container">
            <div className="order-summary">
                <h2>Order Summary</h2>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.product.id}>
                            {item.product.name} - ₹{item.product.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
                <h3>Total Amount: ₹{totalAmount}</h3>
            </div>
            <div>
                <label htmlFor="deliveryAddress" className="payment-label">
                    Delivery Address:
                </label>
                <textarea
                    id="deliveryAddress"
                    className="payment-textarea"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter your delivery address"
                />
            </div>
            <div className="payment-modes">
                <div className="payment-label">Payment Mode:</div>
                <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="Credit Card"
                        onChange={(e) => setPaymentMode(e.target.value)}
                    />
                    Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="Debit Card"
                        onChange={(e) => setPaymentMode(e.target.value)}
                    />
                    Debit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="Net Banking"
                        onChange={(e) => setPaymentMode(e.target.value)}
                    />
                    Net Banking
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="Cash on Delivery"
                        onChange={(e) => setPaymentMode(e.target.value)}
                    />
                    Cash on Delivery
                </label>
            </div>
            <button
                onClick={handlePlaceOrder}
                className="place-order-btn"
            >
                Place Order
            </button>
            {orderPlaced && (
                <p className="order-success">
                    Your order has been placed successfully! Redirecting to home page...
                </p>
            )}
        </div>
    );
}

export default PaymentPage;