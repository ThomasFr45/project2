import FavItem from './FavItem';
import PropTypes from 'prop-types';

const FavList = ({ favoris }) => {
  if (!favoris[0]) return <h3>You might want to add something to your favorite</h3>
  else  {
    return (
      <div className='favorite-list'>
        {favoris.map((fav, index) => <FavItem key={index} favoris={fav}/>)}
      </div>
    )
  }
}

FavList.propTypes = {
  favoris: PropTypes.array,
};

FavList.defaultProps = {
  favoris: [],
};
export default FavList;