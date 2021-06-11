import React from 'react';

function ButtonAddExpenses({ handleOnClick = null }) {
  return (
    <div>
      <button
        type="button"
        onClick={ handleOnClick }
      >
        Adicionar despesas
      </button>
    </div>
  );
}

export default ButtonAddExpenses;
