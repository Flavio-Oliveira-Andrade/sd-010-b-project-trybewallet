import React from 'react';

function InputSelectExpenses({
  labelDescription = 'Descrição da label',
}) {
  return (
    <div>
      <label htmlFor="select-id">
        {labelDescription}
        <select name="moeda" id="select-id">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </div>
  );
}

export default InputSelectExpenses;
