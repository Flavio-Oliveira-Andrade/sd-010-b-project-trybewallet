import React from 'react';
import PropTypes from 'prop-types';

class SelectWallet extends React.Component {
  render() {
    const { labelText, options } = this.props;
    const name = labelText.toLowerCase().replace(/\s/g, '');
    return (
      <label htmlFor={ name }>
        { `${labelText}: ` }
        <select name={ name } id={ name } className={ name }>
          { options.map((op) => <option key={ op } value={ op }>{ op }</option>) }
        </select>
      </label>
    );
  }
}

SelectWallet.propTypes = {
  labelText: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  // handle: PropTypes.func,
};

SelectWallet.defaultProps = {
  options: ['vazio'],
  // handle: undefined,
};

export default SelectWallet;
