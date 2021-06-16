import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { text, type, inputName, value, onChange } = this.props;
    return (
      <label htmlFor={ inputName }>
        { text }
        <input
          type={ type }
          name={ inputName }
          id={ inputName }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
