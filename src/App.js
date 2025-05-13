import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';

function App() {
    return (
        <Router>
            <Routes>
                
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/account" element={<AccountPage />} />
                
            </Routes>
        </Router>
    );
}

export default App;
