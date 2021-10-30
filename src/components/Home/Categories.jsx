import React, { useState } from 'react';
import Item from './Item.jsx';

const Categories = (props) => {
  const [index, setIndex] = useState(0);
  function next() {
    if (index >= props.item.length - 1) {
      setIndex(0);
      return 0;
    }
    setIndex(index + 1);
  }
  function previous() {
    if (index <= 0) {
      setIndex(props.item.length - 1);
      return 0;
    }
    setIndex(index - 1);
  }
  return (
    <div className="home-article">
      <h1>{`${props.title} Cocktails`}</h1>
      <div className="item">
        <button className="arrow-left" onClick={previous}></button>
        {props.item[0] ? (
          <Item
            name={props.item[index][1]}
            img={props.item[index][16]}
            desc={props.item[index][9]}
            id={props.item[index][0]}
            favoris={props.favoris}
            setFavoris={props.setFavoris}
          />
        ) : null}
        <button className="arrow-right" onClick={next}></button>
      </div>
    </div>
  );
};

export default Categories;
