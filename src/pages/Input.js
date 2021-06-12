import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, type, name, describe } = this.props;
    return (
      <label htmlFor={ id }>
        { describe }
        <input type={ type } id={ id } name={ name } />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
};

export default Input;
