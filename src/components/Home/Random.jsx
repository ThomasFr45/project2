import React, { useState } from 'react';
import Item from './Item.jsx';

const Random = (props) => {
  const [item, setItem] = useState('Plop');
  const [buttonText, setButtonText] = useState('Cocktail aléatoire');

  const getRandom = () => {
    setItem(Math.floor(Math.random() * props.item[0].length));
    setButtonText('Encore !');
  };
  console.log(props.item[0])
  return (
    <div className="random-div">
      <div className="random-item">
        {item !== 'Plop' ? (
          <Item
            name={props.item[1][item][1]}
            img={props.item[1][item][16]}
            desc={props.item[1][item][9]}
            id={props.item[1][item][0]}
            favoris={props.favoris}
            setFavoris={props.setFavoris}
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

export default Random;
