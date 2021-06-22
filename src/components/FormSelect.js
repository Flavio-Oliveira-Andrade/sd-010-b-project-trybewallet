import React from 'react';
import PropTypes from 'prop-types';

class FormSelect extends React.Component {
  render() {
    const { texto, titulo, testid, array } = this.props;
    return (
      <label htmlFor={ texto }>
        {titulo}
        <select
          id={ texto }
          data-testid={ testid }
        >
          {
            array.map((string) => (
              <option
                name={ texto }
                key={ Object.values(string) }
              >
                {string}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  texto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(String).isRequired,
};

export default FormSelect;
