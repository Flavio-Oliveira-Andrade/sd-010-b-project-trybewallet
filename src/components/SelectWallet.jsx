import React from 'react';
import PropTypes from 'prop-types';

class SelectWallet extends React.Component {
  render() {
    const { text, name, options, handle } = this.props;
    return (
      <label htmlFor={ name }>
        { `${text}: ` }
        <select name={ name } id={ name } className={ name } onChange={ handle }>
          { options.map((op) => <option key={ op } value={ op }>{ op }</option>) }
        </select>
      </label>
    );
  }
}

SelectWallet.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  handle: PropTypes.func,
};

SelectWallet.defaultProps = {
  options: ['vazio'],
  handle: undefined,
};

export default SelectWallet;
