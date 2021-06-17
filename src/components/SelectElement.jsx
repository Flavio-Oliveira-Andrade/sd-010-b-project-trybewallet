import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectElement extends Component {
  render() {
    const { name, label, options, onChange, dataTestid } = this.props;
    return (
      <label htmlFor={ name }>
        {label}
        :
        <select
          name={ name }
          id={ name }
          onChange={ onChange }
          data-testid={ dataTestid }
        >
          {options.map((option, idx) => {
            if (idx === 0) {
              return <option defaultValue key={ idx }>{option}</option>;
            }
            return <option key={ idx }>{option}</option>;
          })}
        </select>
      </label>
    );
  }
}
SelectElement.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf,
  onChange: PropTypes.func,
}.isRequired;

export default SelectElement;
