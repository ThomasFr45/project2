import Categories from './Categories.jsx';
import Random from './Random.jsx';
import Banniere from '../Banniere.jsx';
import Footer from '../Footer.jsx';
const Home = ({ data, favoris, setFavoris  }) => {
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
        <Random item={data} favoris={favoris} setFavoris={setFavoris} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
