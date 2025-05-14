import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="store-name">Kurtha Kouture</h1>
        <nav className="navbar">
         <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>

        </nav>
      </header>

      <section className="hero">
        <h2>Elegant Kurthas for Every Occasion</h2>
        <p>Discover handcrafted elegance with our latest kurtha collection.</p>
        <button className="shop-now"><Link to="/shop">Shop Now</Link></button>
      </section>

      <section className="featured">
        <h3>Featured Products</h3>
        <div className="products">
          <div className="product-card">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/t/d/l/l-yellow-paak-tabeedah-original-imah82rczuewtryb.jpeg?q=70" alt="Kurtha 1" />
            <h4>Floral Kurtha</h4>
            <p>₹999</p>
          </div>
          <div className="product-card">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/j/v/6/xxl-dtk-589-dk-fab-original-imahawsjezxfjb2u.jpeg?q=70" alt="Kurtha 2" />
            <h4>Elegant Black Kurtha</h4>
            <p>₹1199</p>
          </div>
          <div className="product-card">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/top/i/r/m/xs-orgenza-kurti-om-fab-original-imah35yvefzccwnh.jpeg?q=70  " alt="Kurtha 3" />
            <h4>Pastel Pink Kurtha</h4>
            <p>₹899</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Kurtha Kouture. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
