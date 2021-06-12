import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, name, describe } = this.props;
    return (
      <label htmlFor={ id }>
        { describe }
        <select id={ id }>
          <option name={ name }>ola</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
};

export default Select;
