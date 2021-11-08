import FavItem from './FavItem';
import PropTypes from 'prop-types';

const FavList = ({ favoris, setFavoris }) => {

  const handleUnfav = (id) => {
    setFavoris(favoris.filter((item) => item !== id))
  }

  if (!favoris[0]) return <h3>You might want to add something to your favorite</h3>
  else  {
    return (
      <div className='favorite-list'>
        {favoris.map((fav) => (
          <div key={fav} className="itemContent">
            <button className='item-button' onClick={() => handleUnfav(fav)}>Unfav</button>
            <FavItem favoris={fav}/>
          </div>
        ))}
      </div>
    )
  }
}

FavList.propTypes = {
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

FavList.defaultProps = {
  favoris: [],
};
export default FavList;