import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { textField, id, options, value, handle, name } = this.props;
    const optionsList = options.map((op, idx) => (
      <option key={ `${op} - ${idx}` } data-testid={ op } value={ op }>
        {op}
      </option>
    ));
    return (
      <label htmlFor={ name }>
        {textField}
        <select id={ name } value={ value } data-testid={ id } onChange={ handle }>
          {optionsList}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  textField: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(),
  value: PropTypes.string,
  handle: PropTypes.func,
  name: PropTypes.string,
}.IsRequeried;

export default Select;
