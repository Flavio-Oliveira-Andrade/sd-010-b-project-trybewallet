import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputElement extends Component {
  render() {
    const { type, label, onChange, defaultValue, dataTestid } = this.props;

    return (
      <label htmlFor={ label }>
        {label}
        :
        <input
          type={ type }
          id={ label }
          defaultValue={ defaultValue }
          data-testid={ dataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputElement.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputElement;
