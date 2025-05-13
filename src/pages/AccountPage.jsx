import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountPage() {
    const navigate = useNavigate();

    // Mock user data
    const user = {
        name: 'Akhila',
        email: 'akhila@gmail.com',
        phone: '+91 9876543210',
        address: 'Kozhencherry',
    };

    // Mock order history
    const orders = [
        {
            id: 1,
            date: '2023-10-01',
            total: '₹1500',
            status: 'Delivered',
        },
        {
            id: 2,
            date: '2023-09-15',
            total: '₹2500',
            status: 'Shipped',
        },
        {
            id: 3,
            date: '2023-09-01',
            total: '₹1200',
            status: 'Cancelled',
        },
    ];

    return (
        <div className="account-page">
            <h1 className="account-title">My Account</h1>
           

    
            <div className="user-info">
                <h2>Account Details</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <button
                    className="update-button"
                    onClick={() => alert('Update Account functionality coming soon!')}
                >
                    Update Account
                </button>
            </div>

            
            <div className="order-history">
                <h2>Order History</h2>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.total}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            
            <button
                className="logout-button"
                onClick={() => {
                    alert('You have been logged out.');
                    navigate('/login');
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default AccountPage;