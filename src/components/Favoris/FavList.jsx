import FavItem from './FavItem';

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
export default FavList;