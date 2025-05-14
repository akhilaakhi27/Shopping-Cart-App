import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg'

const Home = () => {
return (
    <div className="homepage">
        <header className="header">
            <div className="logo-container">
                <img 
                    src={logo}
                    alt="Kurtha Kouture Logo" 
                    className="logo"
                />
                <h1 className="store-name">Kurtha Kouture</h1>
            </div>
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
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/g/8/xl-grey-vindyavasini-original-imah28zhhzspwfnr.jpeg?q=70" alt="Kurtha 1" />
                    <h4>Floral Kurtha</h4>
                    <p>₹999</p>
                </div>
                <div className="product-card">
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/7/e/l/m-1025-shree-bdree-original-imah3hbnxy2negnb.jpeg?q=70" alt="Kurtha 2" />
                    <h4>Elegant Green Kurtha</h4>
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
