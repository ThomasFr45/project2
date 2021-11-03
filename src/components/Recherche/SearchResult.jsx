import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchResult = ({data, favoris, setFavoris, checkbox }) => {
  const handleFav = (id) => {
    setFavoris([...favoris, id])
  }
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id))
  }
  let test = data;
  checkbox.map(item => test = test.filter(drink => drink.includes(item)))
  return(
    <div className="search-listResult">
      {
        checkbox[0] ? test.map((drink, idx) => (
          <div key={idx} className="search-items">
            <p>{drink[1]}</p>
            <img src={drink[16]} alt="" />
            <button className='fav-button'><Link to={`/${drink[0]}`} >Voir la recette.</Link></button>
            {favoris.includes(drink[0]) ? <button onClick={() => handleUnfav(drink[0])}>Unfav</button> : <button onClick={() => handleFav(drink[0])}>Fav</button>}
          </div>
        ))
          : data.map((drink, idx) => (
            <div key={idx} className="search-items">
              <p>{drink[1]}</p>
              <img src={drink[16]} alt="" />
              <button className='fav-button'><Link to={`/${drink[0]}`} >Voir la recette.</Link></button>
              {favoris.includes(drink[0]) ? <button onClick={() => handleUnfav(drink[0])}>Unfav</button> : <button onClick={() => handleFav(drink[0])}>Fav</button>}
            </div>
          ))
      }
    </div>
  );
}

SearchResult.propTypes = {
  data: PropTypes.string,
  checkbox: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.object,
};

SearchResult.defaultProps = {
  data: '',
  checkbox: [],
  favoris: PropTypes.array,
};

export default SearchResult;