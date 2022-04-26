import React from 'react';

function Search() {
    return (
        <form action="/" className="search">
            <input placeholder="Search..." type="url" name="keyword" id="keyword" />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;