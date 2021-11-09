import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchResult = ({data, favoris, setFavoris, checkbox }) => {
  const handleFav = (id) => {
    setFavoris([...favoris, id])
  }
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id))
  }
  let filter = data;
  checkbox.map(item => filter = filter.filter(drink => drink.includes(item)))
  return(
    <div className="search-listResult">
      {
        checkbox[0] ? filter.map((drink, idx) => (
          <div key={idx} className="search-items">
            {favoris.includes(drink[0]) ? <div className='isFavorite' onClick={() => handleUnfav(drink[0])}/> : <div className='notFavorite' onClick={() => handleFav(drink[0])}/>}
            <>
              <p>{drink[1]}</p>
              <img src={drink[16]} alt="" />
              <button className='fav-button'><Link to={`/${drink[0]}`} >Recipe</Link></button>
            </>
          </div>
        ))
          : data.map((drink, idx) => (
            <div key={idx} className="search-items">
              {favoris.includes(drink[0]) ? <div className='isFavorite' onClick={() => handleUnfav(drink[0])}/> : <div className='notFavorite' onClick={() => handleFav(drink[0])}/>}
              <>
                <p>{drink[1]}</p>
                <img src={drink[16]} alt="" />
                <button className='fav-button'><Link to={`/${drink[0]}`} >Recipe</Link></button>
              </>
            </div>
          ))
      }
    </div>
  );
}

SearchResult.propTypes = {
  data: PropTypes.array,
  checkbox: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

SearchResult.defaultProps = {
  data: [],
  checkbox: [],
  favoris: PropTypes.array,
};

export default SearchResult;