import Categories from './Categories.jsx';
import Random from './Random.jsx';
import Banniere from '../Banniere.jsx';
import Footer from '../Footer.jsx';
import PropTypes from 'prop-types'
const Home = ({ data, favoris, setFavoris, drinks  }) => {
  const alcool = ['Vodka', 'Gin', 'Whisky', 'Rhum', 'Autre']
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Banniere title="Une envie de cocktail ? Vous êtes au bon endroit !"/>
        <div className='home-articles'>
          {alcool.map((alcool, index) => (
            <Categories key={alcool} item={data[index]} title={alcool} favoris={favoris} setFavoris={setFavoris}/>
          ))}
        </div>
        <Random item={drinks} favoris={favoris} setFavoris={setFavoris} />
      </div>
      <Footer />
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
  drinks: PropTypes.array,
};

Home.defaultProps = {
  data: [],
  favoris: [],
  drinks: [],
};

export default Home
