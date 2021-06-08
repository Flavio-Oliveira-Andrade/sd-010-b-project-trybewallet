import React from 'react';
import PropTypes from 'prop-types';

class InputWallet extends React.Component {
  render() {
    const { labelText, type = 'text', handle } = this.props;
    const name = labelText.toLowerCase();
    return (
      <label htmlFor={ name }>
        { labelText }
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ handle }
        />
      </label>
    );
  }
}

InputWallet.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  handle: PropTypes.func,
};

InputWallet.defaultProps = {
  type: 'text',
  handle: undefined,
};

export default InputWallet;
