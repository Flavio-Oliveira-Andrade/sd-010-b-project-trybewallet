import React from 'react';
import { PropTypes } from 'prop-types';

export default function Descrição({ description, setDescription }) {
  return (
    <div>
      <label htmlFor="descrição">
        Descrição :
        <input
          type="text"
          id="descrição"
          name="descrição"
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
        />
      </label>
    </div>
  );
}

Descrição.propTypes = {
  description: PropTypes.string,
  setDescription: PropTypes.func,
}.isRequired;
