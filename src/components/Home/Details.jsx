import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Ingredients = ({ data }) => {
  const ingredients = []
  for (let i = 17; i <= 31; i++) {
    if (data[i] !== '' && data[i] !== null) {
      ingredients.push(data[i])
    }
  }
  return (
    <>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} className='details-li'>
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  )
}

const Dosage = ({ data }) => {
  const dosage = []
  for (let i = 32; i <= 46; i++) {
    if (data[i] !== '' && data[i] !== null) {
      dosage.push(data[i])
    }
  }
  return (
    <>
      <ul>
        {dosage.map((dosage, index) => (
          <li key={index} className='details-li'>
            {dosage}
          </li>
        ))}
      </ul>
    </>
  )
}
const Details = () => {
  const { drink } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
    ).then(response =>
      response.json().then(data => setData(Object.values(data.drinks[0])))
    )
  }, [drink])

  if (data === []) return <p>Loading...</p>
  return (
    <div className='details-content'>
      <div className='details-text'>
        <p>{data[1]}</p>
      </div>
      <div className='details-img'>
        <img src={data[16]} alt="" />
      </div>
      <div className='details-comp'>
        <Ingredients ingredient={data} />
        <Dosage data={data} />
      </div>
      <div className='details-text'>
        <p>Glass Used : {data[8]}</p>
      </div>
      <div className='details-text'>
        <p>{data[9]}</p>
      </div>
    </div>
  )
}

Details.propTypes = {
  data: PropTypes.array,
};

Details.defaultProps = {
  data: [],
};

Ingredients.propTypes = {
  data: PropTypes.array,
};

Ingredients.defaultProps = {
  data: [],
};

Dosage.propTypes = {
  data: PropTypes.array,
};

Dosage.defaultProps = {
  data: [],
};

export default Details
