import React from 'react';

function InputSelect({
  labelDescription = 'Descrição da label',
}) {
  return (
    <div>
      <label htmlFor="select-id">
        {labelDescription}
        <select name="moeda" id="select-id">
          <option>Moeda</option>
        </select>
      </label>
    </div>
  );
}

export default InputSelect;
