import Banniere from '../Banniere';
import Footer from '../Footer';

const Recherche = () => {
  return(
    <div className='page-container'>
      <div className='content-wrap'>
        <Banniere title="Une envie particulière?"/>
        <p>Search Here</p>
      </div>
      <Footer />
    </div>
  )
}

export default Recherche;