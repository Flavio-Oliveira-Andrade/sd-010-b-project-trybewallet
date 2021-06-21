import React from 'react';
import PropTypes from 'prop-types';

class InputFormWallet extends React.Component {
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

InputFormWallet.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  handle: PropTypes.func,
};

InputFormWallet.defaultProps = {
  type: 'text',
  handle: undefined,
};

export default InputFormWallet;
