import React from 'react';
import PropTypes from 'prop-types';

class SelectWallet extends React.Component {
  render() {
    const { tx, name, ops, handle, slc } = this.props;
    return (
      <label htmlFor={ name }>
        { `${tx}: ` }
        <select
          name={ name }
          id={ name }
          className={ name }
          onChange={ handle }
          data-testid={ `${name}-input` }
        >
          { ops.map((op) => (
            <option key={ op } value={ op } selected={ slc === op }>
              { op }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

SelectWallet.propTypes = {
  tx: PropTypes.string.isRequired,
  slc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ops: PropTypes.arrayOf(PropTypes.string),
  handle: PropTypes.func,
};

SelectWallet.defaultProps = {
  ops: ['vazio'],
  handle: undefined,
};

export default SelectWallet;
