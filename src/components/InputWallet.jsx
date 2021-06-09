import React from 'react';
import PropTypes from 'prop-types';

class InputWallet extends React.Component {
  render() {
    const { text, name, type = 'text', handle } = this.props;
    return (
      <label htmlFor={ name }>
        { `${text}: ` }
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ handle }
          className={ name }
        />
      </label>
    );
  }
}

InputWallet.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  handle: PropTypes.func,
};

InputWallet.defaultProps = {
  type: 'text',
  handle: undefined,
};

export default InputWallet;
