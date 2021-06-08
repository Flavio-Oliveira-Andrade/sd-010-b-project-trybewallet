import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { textField, type, id, value, handle, name } = this.props;
    return (
      <label htmlFor={ name }>
        {textField}
        <input
          id={ name }
          value={ value }
          type={ type }
          data-testid={ id }
          onChange={ handle }
        />
      </label>
    );
  }
}

Input.propTypes = {
  textField: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  handle: PropTypes.func,
  name: PropTypes.string,
}.IsRequeried;

export default Input;
