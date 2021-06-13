import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { text, id, options } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <select id={ id }>
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
};

Select.defaultProps = {
  options: [],
};

export default Select;
