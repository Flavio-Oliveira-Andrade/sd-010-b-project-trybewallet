import React from 'react';
import PropTypes from 'prop-types';

class InputWallet extends React.Component {
  render() {
    const { text, name, type = 'text', handle, value } = this.props;
    return (
      <label htmlFor={ name }>
        { `${text}: ` }
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ handle }
          className={ name }
          value={ value }
          data-testid={ `${name}-input` }
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
  value: PropTypes.string.isRequired,
};

InputWallet.defaultProps = {
  type: 'text',
  handle: undefined,
};

export default InputWallet;
