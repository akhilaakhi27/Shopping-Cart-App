import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';


function ProductPage() {
    const { id } = useParams();
    const product = useSelector(state =>
        state.products.products.find(product => product.id === parseInt(id))
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedSize, setSelectedSize] = useState(null); // State for selected size

    if (!product) {
        return <p>Product not found!</p>;
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to cart.');
            return;
        }
        dispatch(addToCart({ ...product, selectedSize }));
        alert(`${product.name} (Size: ${selectedSize}) added to cart!`);
    };

    return (
        <div className="product-page">
            <div className="product-details">
                <h1 className="product-title">{product.name}</h1>
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
                <p className="product-price">Price: ₹{product.price}</p>
                <p className="product-material">Material: {product.material}</p>
                <p className="product-description">{product.description}</p>

                {/* Sizes Section */}
                <div className="product-sizes">
                    <h3>Select Size:</h3>
                    <div className="sizes-container">
                        {product.size?.map((size) => ( // Use optional chaining
                            <button
                                key={size}
                                className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                

                {/* Add to Cart and Go to Cart Buttons */}
<div className="cart-buttons-container">
    <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
    >
        Add to Cart
    </button>
    <button
        className="go-to-cart-btn"
        onClick={() => navigate('/cart')}
    >
        Go to Cart
    </button>
</div>
            </div>

            {/* Reviews Section */}
            <div className="product-reviews">
                <h3>Customer Reviews</h3>
                {product.reviews && product.reviews.length > 0 ? (
                    <ul className="reviews-list">
                        {product.reviews.map((review, index) => (
                            <li key={index} className="review-item">
                                <p className="review-user"><strong>{review.user}</strong></p>
                                <p className="review-rating">Rating: {review.rating} / 5</p>
                                <p className="review-comment">{review.comment}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews yet. Be the first to review this product!</p>
                )}
            </div>
        </div>
    );
}

export default ProductPage;