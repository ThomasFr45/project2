import React, { useState } from 'react';
import SearchResult from './SearchResult';
function Search({ drinks,favoris, setFavoris }) {
  const [searchValue, setSearchValue] = useState("");
  console.log(drinks.filter(drink => drink[1].includes(searchValue)))
  return (
    <div className="search-body">
      <input
        className="search-bar"
        value={searchValue}
        type="text"
        placeholder="Type here..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <SearchResult data={drinks.filter(drink => drink[1].includes(searchValue))} favoris={favoris} setFavoris={setFavoris}/>
    </div>
  );
}

export default Search;
