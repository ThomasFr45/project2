import React, { useState } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
const Random = ({ allDrinks, favoris, setFavoris }) => {
  const [cocktailIndex, setCocktailIndex] = useState('');
  const [buttonText, setButtonText] = useState(`Click Here !`);

  const getRandomCocktail = () => {
    setCocktailIndex(Math.floor(Math.random() * allDrinks.length));
    setButtonText(`Again`);
  };

  return (
    <div className="random-div">
      <div className="random-item">
        {cocktailIndex !== '' ? (
          <Item
            name={allDrinks[cocktailIndex][1]}
            img={allDrinks[cocktailIndex][16]}
            id={allDrinks[cocktailIndex][0]}
            favoris={favoris}
            setFavoris={setFavoris}
          />
        ) : (
          <h4>Feeling lucky ? Try your luck !</h4>
        )}
        <button className="random-button" onClick={getRandomCocktail}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

Random.propTypes = {
  allDrinks: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.func,
};

Random.defaultProps = {
  allDrinks: [],
  favoris: [],
};

export default Random;
