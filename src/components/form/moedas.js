import React, { useState, useEffect } from 'react';
import fetchCurrency from '../../services/API';

export default function Moedas() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCurrency(await fetchCurrency());
    };
    fetchAPI();
  }, []);

  const moedas = Object.keys(currency).map((item) => (
    <option key={ item }>
      {item.name}
    </option>
  ));

  return (
    <div>
      <label htmlFor="moeda">
        Moeda :
        <select id="moeda">
          { moedas }
        </select>
      </label>
    </div>
  );
}
