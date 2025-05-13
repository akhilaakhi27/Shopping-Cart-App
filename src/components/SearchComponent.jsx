import React, { useState } from 'react';

function SearchComponent({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term); 
    };

    return (
        <div className="search-bar">
            <input 
                
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search for products..."
            />
        </div>
    );
}

export default SearchComponent;