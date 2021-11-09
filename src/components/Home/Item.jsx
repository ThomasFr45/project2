import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ name, img, id, favoris, setFavoris }) => {
  const handleFav = (id) => {
    setFavoris([...favoris, id]);
  }
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id))
  }
  return (
    <div className="itemContent">
      {favoris.includes(id) ? <div className="isFavorite" onClick={() => handleUnfav(id)}/> : <div className="notFavorite" onClick={() => handleFav(id)}/>}
      <h4 className="center">{name}</h4>
      <Link to={`/${id}`} >
        <img src={img} alt="" className="center" />
      </Link>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Item.defaultProps = {
  id: '',
  img: '',
  name: '',
  favoris: [],
};

export default Item;
