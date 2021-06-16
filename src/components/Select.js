import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { text, id, options, name, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <select id={ id } name={ name } onChange={ onChange }>
          {
            options.length
              ? options.map((option) => (
                <option key={ option } value={ option }>
                  {' '}
                  { option }
                  {' '}
                </option>))
              : null
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  options: [],
};

export default Select;
