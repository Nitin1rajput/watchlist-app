import React, { useState } from 'react';
import { useSearch } from '../../context/SearchContext'

import './styles.css';

const SearchBar = ({ onSearch, hideSubmitButton }) => {
    const { searchTerm, setSearchTerm } = useSearch();
    const [text, setText] = useState(searchTerm);

    const handleSearch = (e) => {
        e.preventDefault();

        setSearchTerm(text);
    };
    return (
        <form className='search-bar' onSubmit={handleSearch}>
            <span className="search-icon">🔍</span> {/* Replace with an actual icon */}
            <input
                type="text"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="search-input"
            />
            {
                !hideSubmitButton && <button type='submit' className="search-button">
                    Search
                </button>
            }

        </form>

    );
};

export default SearchBar;