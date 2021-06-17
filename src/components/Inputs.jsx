import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { place, type = 'text', name, handle, test } = this.props;
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

Inputs.propTypes = {
  place: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

Inputs.defaultProps = {
  type: 'text',
};

export default Inputs;
