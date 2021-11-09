import React, { useState } from 'react';
import Item from './Item.jsx';
import PropTypes from 'prop-types';

const Random = ({ item, favoris, setFavoris }) => {
  const [obj, setObj] = useState('Plop');
  const [buttonText, setButtonText] = useState('Random Cocktail');

  const getRandom = () => {
    setObj(Math.floor(Math.random() * item.length));
    setButtonText('Again !');
  };
  return (
    <div className="random-div">
      <div className="random-item">
        {obj !== 'Plop' ? (
          <Item
            name={item[obj][1]}
            img={item[obj][16]}
            desc={item[obj][9]}
            id={item[obj][0]}
            favoris={favoris}
            setFavoris={setFavoris}
          />
        ) : (
          <p>Feeling lucky ? Test your luck here !</p>
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
  setFavoris: PropTypes.func,
};

Random.defaultProps = {
  item: [],
  favoris: PropTypes.array,
};

export default Random;
