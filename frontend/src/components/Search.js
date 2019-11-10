import React from 'react';

const Search = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}

export default Search;
