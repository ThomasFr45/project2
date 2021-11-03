import Banniere from '../Banniere';
import Footer from '../Footer';
import FavList from './FavList';
import PropTypes from 'prop-types'

const Favoris = ({ favoris }) => {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Banniere title="Retrouvez vos cocktails favoris ici !"/>
        <FavList favoris={favoris}/>
      </div>
      <Footer />
    </div>
  )
}

Favoris.propTypes = {
  favoris: PropTypes.array,
};

Favoris.defaultProps = {
  favoris: [],
};

export default Favoris;