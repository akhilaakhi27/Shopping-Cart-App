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
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            
            <div>
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
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="deliveryAddress" style={{ display: 'block', marginBottom: '10px' }}>
                    Delivery Address:
                </label>
                <textarea
                    id="deliveryAddress"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter your delivery address"
                    style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Payment Mode:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="paymentMode"
                            value="Credit Card"
                            onChange={(e) => setPaymentMode(e.target.value)}
                        />
                        Credit Card
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="paymentMode"
                            value="Debit Card"
                            onChange={(e) => setPaymentMode(e.target.value)}
                        />
                        Debit Card
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="paymentMode"
                            value="Net Banking"
                            onChange={(e) => setPaymentMode(e.target.value)}
                        />
                        Net Banking
                    </label>
                </div>
                <div>
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
            </div>
            <button
                onClick={handlePlaceOrder}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Place Order
            </button>
            {orderPlaced && (
                <p style={{ color: 'green', marginTop: '20px' }}>
                    Your order has been placed successfully! Redirecting to home page...
                </p>
            )}
        </div>
    );
}

export default PaymentPage;