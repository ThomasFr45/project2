import React, { useState } from 'react';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';
function Search({ drinks, favoris, setFavoris }) {
  const [searchValue, setSearchValue] = useState("");
  const [checkedList, setCheckedList] = useState([]);
  const handleCheck = (checkItem) => {
    if (checkedList.includes(checkItem)) {
      setCheckedList(checkedList.filter(item => item !== checkItem))
    }
    else setCheckedList([...checkedList, checkItem]);
  }
  return (
    <div className="search-body">
      <input
        className="search-bar"
        value={searchValue}
        type="text"
        placeholder="Type here..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <input type="checkbox" name="Sprite" onChange={() => handleCheck("Sprite")}/>
      <label htmlFor="Sprite">Sprite</label>
      <input type="checkbox" name="Soda Water" onChange={() => handleCheck("Soda Water")}/>
      <label htmlFor="Soda Water">Soda Water</label>
      <input type="checkbox" name="Orange Juice" onChange={() => handleCheck("Orange Juice")}/>
      <label htmlFor="Orange Juice">Orange Juice</label>
      <SearchResult data={drinks.filter(drink => drink[1].includes(searchValue))} favoris={favoris} setFavoris={setFavoris} checkbox={checkedList}/>
    </div>
  );
}

Search.propTypes = {
  drinks: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.object,
};

Search.defaultProps = {
  drinks: [],
  favoris: PropTypes.array,
};

export default Search;
