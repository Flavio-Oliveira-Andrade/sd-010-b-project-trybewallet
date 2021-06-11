import React, { useState, useEffect } from 'react';
import requestApi from '../../services/api';
import { getNewId } from '../../services/idServices';

function InputSelectMoeda({
  labelDescription = 'Descrição da label',
}) {
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    async function getMoedas() {
      const apiMoedas = await requestApi();
      setMoedas(Object.values(apiMoedas));
    }
    getMoedas();
  }, []);

  return (
    <div>
      <label htmlFor="select-id">
        {labelDescription}
        <select name="moeda" id="select-id">
          {moedas.map((item) => <option key={ getNewId() }>{item.code}</option>)}
        </select>
      </label>
    </div>
  );
}

export default InputSelectMoeda;
