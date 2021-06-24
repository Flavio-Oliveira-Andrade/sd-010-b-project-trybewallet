import React from 'react';

export default function Valor() {
  return (
    <>
      <label htmlFor="valor">
        Valor :
        <input
          type="number"
          id="valor"
          name="valor"
        />
      </label>
      <label htmlFor="descrição">
        Descrição :
        <input
          type="text"
          id="descrição"
          name="descrição"
        />
      </label>
    </>
  );
}
