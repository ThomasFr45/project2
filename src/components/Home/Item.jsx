import React from 'react';
import { Link } from 'react-router-dom';

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
      <button className='item-button'><Link to={`/${name}`} >Voir la recette.</Link></button>
    </div>
  );
};

export default Item;
