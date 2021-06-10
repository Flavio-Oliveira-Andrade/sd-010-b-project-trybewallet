import React from 'react'

function renderHeadingInputs(name, value, id) {
  return (
    <div>
      <span>{ `${name}:` }</span>
      <span
        data-testid={ id }
      >
        { value }
      </span>
    </div>
  );
}

export default renderHeadingInputs;
