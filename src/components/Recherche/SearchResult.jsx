import { Link } from 'react-router-dom';

const SearchResult = ({data, favoris, setFavoris}) => {
  const handleFav = (id) => {
    setFavoris([...favoris, id])
  }
  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id))
  }
  return(
    <div className="search-listResult">
      {data.map((drink, idx) => (
        <div key={idx} className="search-items">
          <p>{drink[1]}</p>
          <img src={drink[16]} alt="" />
          <button className='fav-button'><Link to={`/${drink[1]}`} >Voir la recette.</Link></button>
          {favoris.includes(drink[0]) ? <button onClick={() => handleUnfav(drink[0])}>Unfav</button> : <button onClick={() => handleFav(drink[0])}>Fav</button>}
        </div>
      ))}
    </div>
  );
}

export default SearchResult;