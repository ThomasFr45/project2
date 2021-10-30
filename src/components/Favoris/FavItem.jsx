import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const FavItem = ({ favoris }) => {
  console.log(favoris)
  const [isReady, setIsReady] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favoris}`)
      .then(response => response.json().then(response => {
        setData(Object.values(response.drinks[0]));
        setIsReady(true);
      }))
  }, [favoris])
  if (isReady === false) return <p>Loading...</p>
  else {
    return (
      <div className='fav-item'>
        <p className='fav-text'>{data[1]}</p>
        <img className='fav-img' src={data[16]} alt="" />
        <button className='fav-button'><Link to={`/${name}`} >Voir la recette.</Link></button>
      </div>
    )
  }
}
export default FavItem
