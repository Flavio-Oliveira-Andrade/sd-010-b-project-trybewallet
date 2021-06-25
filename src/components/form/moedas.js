import React, { useState, useEffect } from 'react';
import fetchCurrency from '../../services/API';

// eslint-disable-next-line react/prop-types
export default function Moedas({ currency, setCurrency }) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCurrencies(await fetchCurrency());
    };
    fetchAPI();
  }, []);

  const moedas = Object.keys(currencies).map((item) => (
    <option key={ item } value={ item }>
      {item}
    </option>
  ));

  return (
    <div>
      <label htmlFor="moeda">
        Moeda :
        <select
          id="moeda"
          value={ moedas.item }
          name={ currency }
          onChange={ ({ target }) => setCurrency(target.value) }
        >
          { moedas }
        </select>
      </label>
    </div>
  );
}
