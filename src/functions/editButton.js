import React from 'react';

function editButton(func) {
  return (
    <button
      type="button"
      data-testid="edit-btn"
      onClick={ func }
    >
      Editar despesa
    </button>
  );
}

export default editButton;
