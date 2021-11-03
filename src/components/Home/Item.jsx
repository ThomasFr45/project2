import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ name, img, id, favoris, setFavoris }) => {
  const handleFav = (id) => {
    setFavoris([...favoris, id])
  }
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id))
  }
  return (
    <div className="itemContent">
      {favoris.includes(id) ? <button onClick={() => handleUnfav(id)}>Unfav</button> : <button onClick={() => handleFav(id)}>Fav</button>}
      <h4 className="center">{name}</h4>
      <img src={img} alt="" className="center" />
      <button className='item-button'><Link to={`/${id}`} >Voir la recette.</Link></button>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  favoris: PropTypes.array,
  setFavoris: PropTypes.object,
};

Item.defaultProps = {
  id: '',
  img: '',
  name: '',
  favoris: PropTypes.array,
};

export default Item;
