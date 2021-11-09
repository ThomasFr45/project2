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
      <input type="checkbox" name="checkbox1" onChange={() => (
        handleCheck("Lemon"),
        handleCheck("lemon")
      )}/>
      <label htmlFor="checkbox1">Lemon</label>
      <input type="checkbox" name="checkbox2" onChange={() => handleCheck("Soda Water")}/>
      <label htmlFor="checkbox2">Soda Water</label>
      <input type="checkbox" name="checkbox3" onChange={() => handleCheck("Orange Juice")}/>
      <label htmlFor="checkbox3">Orange Juice</label>
      <SearchResult data={drinks.filter(drink => drink[1].includes(searchValue))} favoris={favoris} setFavoris={setFavoris} checkbox={checkedList}/>
    </div>
  );
}

Search.propTypes = {
  drinks: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Search.defaultProps = {
  drinks: [],
  favoris: PropTypes.array,
};

export default Search;
