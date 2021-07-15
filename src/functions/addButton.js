import React from 'react';

function addButton(func) {
  return (
    <button
      type="button"
      onClick={ func }
    >
      Adicionar despesa
    </button>
  );
}

export default addButton;
