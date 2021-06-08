import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovie extends React.Component {
  render() {
    const { place, type = 'text', name, value, handle, test } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        id={ name }
        data-testid={ test }
        onChange={ handle }
        placeholder={ place }
      />
    );
  }
}

InputAddMovie.propTypes = {
  place: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default InputAddMovie;
