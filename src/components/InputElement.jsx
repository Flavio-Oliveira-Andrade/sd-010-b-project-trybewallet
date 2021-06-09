import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputElement extends Component {
  render() {
    const { name, type, label, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        :
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputElement.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputElement;
