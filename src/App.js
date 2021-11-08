import React, { useEffect } from 'react'
import './Style/App.css'
import './Style/Contact.css'
import './Style/Default.css'
import './Style/Fav.css'
import './Style/Home.css'
import './Style/Search.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Favoris from './components/Favoris/Favoris.jsx'
import Home from './components/Home/Home.jsx'
import Recherche from './components/Recherche/Recherche.jsx'
import Contact from './components/Contact/Contact.jsx'
import Details from './components/Home/Details.jsx'
const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [data, setData] = React.useState([])
  const [favoris, setFavoris] = React.useState(["test"]);
  const [drinks, setDrinks] = React.useState([]);
  useEffect(() => {
    setFavoris(localStorage.getItem("fav"));
  }, [])

  favoris? console.log("It exists") : setFavoris([]);
  useEffect(() => {
    const url =
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    const searchUrl =
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const vodka = []
    const gin = []
    const whisky = []
    const rhum = []
    const rest = []
    const allDrinks = []
    fetch(url).then(response =>
      response.json().then(data =>
        data.drinks.map(item =>
          fetch(`${searchUrl}${item.strDrink}`).then(response =>
            response.json().then(data => {
              const drink = Object.values(data.drinks[0])
              if (drink.includes('Vodka')) {
                vodka.push(drink)
              } else if (drink.includes('Gin')) {
                gin.push(drink)
              } else if (
                drink.includes('Rye whiskey') ||
                drink.includes('Rye Whiskey') ||
                drink.includes('Whiskey')
              ) {
                whisky.push(drink)
              } else if (drink.includes('Rum')) {
                rhum.push(drink)
              } else {
                rest.push(drink)
              }
              allDrinks.push(drink)
              setDrinks(allDrinks);
              setData([vodka, gin, whisky, rhum, rest]);
              setIsLoaded(true);
            })
          )
        )
      )
    )
  }, [])

  if (!isLoaded) {
    return <div>Loading</div>
  } else {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home data={data} favoris={favoris} setFavoris={setFavoris}/>
            </Route>
            <Route exact path='/Favoris'>
              <Favoris favoris={favoris}/>
            </Route>
            <Route exact path='/Recherche'>
              <Recherche drinks={drinks} favoris={favoris} setFavoris={setFavoris}/>
            </Route>
            <Route exact path='/Contact'>
              <Contact />
            </Route>
            <Route exact path='/:drink'>
              <Details />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}
export default App
