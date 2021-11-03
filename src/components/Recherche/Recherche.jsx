import Banniere from '../Banniere';
import Footer from '../Footer';
import Search from './Search';
import PropTypes from 'prop-types';

const Recherche = ({ drinks, favoris, setFavoris }) => {
  return(
    <div className='page-container'>
      <div className='content-wrap'>
        <Banniere title="Une envie particulière?"/>
        <Search drinks={drinks} favoris={favoris} setFavoris={setFavoris}/>
      </div>
      <Footer />
    </div>
  )
}
Recherche.propTypes = {
  drinks: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.object,
};

Recherche.defaultProps = {
  drinks: [],
  favoris: PropTypes.array,
};
export default Recherche;