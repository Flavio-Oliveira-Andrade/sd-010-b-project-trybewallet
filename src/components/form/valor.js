import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Valor({ value, setValue }) {
  return (
    <div>
      <label htmlFor="valor">
        Valor :
        <input
          type="number"
          id="valor"
          name="valor"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
    </div>
  );
}
