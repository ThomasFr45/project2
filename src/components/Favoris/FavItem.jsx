import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const FavItem = ({ fav, favoris, setFavoris }) => {
  const [isReady, setIsReady] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${fav}`)
      .then(response => response.json().then(response => {
        setData(Object.values(response.drinks[0]));
        setIsReady(true);
      }).catch((err) => console.error(err.message)))
  }, [favoris])
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id))
  }
  if (isReady === false) return <p>Loading...</p>
  else {
    return (
      <div className="fav-item">
        <div className='isFavorite' onClick={() => handleUnfav(fav)}/>
        <>
          <p className='fav-text'>{data[1]}</p>
          <Link to={`/${data[0]}`} >
            <img className='fav-img' src={data[16]} alt="" />
          </Link>
        </>
      </div>
    )
  }
}

FavItem.propTypes = {
  favoris: PropTypes.array,
  fav: PropTypes.string,
  setFavoris: PropTypes.func,
};

FavItem.defaultProps = {
  fav: null,
  favoris: [],
};
export default FavItem
