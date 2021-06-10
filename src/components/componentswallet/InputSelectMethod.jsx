import React from 'react';

function InputSelectMethod({
  labelDescription = 'Descrição da label',
}) {
  return (
    <div>
      <div>
        <label htmlFor="select-id">
          {labelDescription}
          <select name="moeda" id="select-id">
            <option>Moeda</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default InputSelectMethod;
