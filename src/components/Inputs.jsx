import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type = 'text', name, test, handle, place } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        id={ name }
        data-testid={ test }
        onChange={ handle }
        placeholder={ place }
      />
    );
  }
}

Input.propTypes = {
  place: PropTypes.string.isRequired,
  type: PropTypes.string,isRequired
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Input;
