import Banniere from '../Banniere';
import Footer from '../Footer';
import FavList from './FavList';
import PropTypes from 'prop-types'

const Favoris = ({ favoris, setFavoris }) => {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Banniere title="Retrouvez vos cocktails favoris ici !"/>
        <FavList favoris={favoris} setFavoris={setFavoris}/>
      </div>
      <Footer />
    </div>
  )
}

Favoris.propTypes = {
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Favoris.defaultProps = {
  favoris: [],
};

export default Favoris;