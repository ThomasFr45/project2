import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const FavItem = ({ favoris }) => {
  const [isReady, setIsReady] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favoris}`)
      .then(response => response.json().then(response => {
        setData(Object.values(response.drinks[0]));
        setIsReady(true);
      }).catch((err) => console.error(err.message)))
  }, [favoris])

  if (isReady === false) return <p>Loading...</p>
  else {
    return (
      <div className='fav-item'>
        <p className='fav-text'>{data[1]}</p>
        <img className='fav-img' src={data[16]} alt="" />
        <button className='fav-button'><Link to={`/${data[0]}`} >Voir la recette.</Link></button>
      </div>
    )
  }
}

FavItem.propTypes = {
  favoris: PropTypes.string,
};

FavItem.defaultProps = {
  favoris: null,
};
export default FavItem
