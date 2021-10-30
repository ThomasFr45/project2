import Banniere from '../Banniere';
import Footer from '../Footer';
import Search from './Search';

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

export default Recherche;