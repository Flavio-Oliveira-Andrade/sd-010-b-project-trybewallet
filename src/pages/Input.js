import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, func, describe } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            name="value"
            value={ value }
            onChange={ func }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            value={ describe }
            onChange={ func }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  describe: PropTypes.string.isRequired,
};

export default Input;
