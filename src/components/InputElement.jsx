import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputElement extends Component {
  render() {
    const { name, label, value, handleChange } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <input
          type="text"
          name={ name }
          id={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputElement.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
