import React, { useState } from 'react';
import Item from './Item.jsx';
import PropTypes from 'prop-types';

const Random = ({ item, favoris, setFavoris }) => {
  const [obj, setObj] = useState('Plop');
  const [buttonText, setButtonText] = useState('Cocktail aléatoire');

  const getRandom = () => {
    setObj(Math.floor(Math.random() * item[0].length));
    setButtonText('Encore !');
  };
  return (
    <div className="random-div">
      <div className="random-item">
        {obj !== 'Plop' ? (
          <Item
            name={item[1][obj][1]}
            img={item[1][obj][16]}
            desc={item[1][obj][9]}
            id={item[1][obj][0]}
            favoris={favoris}
            setFavoris={setFavoris}
          />
        ) : (
          <p>Vous vous sentez chanceux ? Clickez ici !</p>
        )}
        <button className="random-button" onClick={getRandom}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

Random.propTypes = {
  item: PropTypes.array,
  favoris: PropTypes.array,
  setFavoris: PropTypes.object,
};

Random.defaultProps = {
  item: [],
  favoris: PropTypes.array,
};

export default Random;
