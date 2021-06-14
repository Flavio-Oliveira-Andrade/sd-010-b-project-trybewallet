import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectElement extends Component {
  render() {
    const { name, label, value, options, handleChange } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <select
          name={ name }
          id={ name }
          value={ value }
          onChange={ handleChange }
        >
          { options.map((option, index) => (
            <option key={ index } value={ option }>
              { option }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

SelectElement.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};
