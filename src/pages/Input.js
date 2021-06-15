import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { valor, func, describe } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            name="valor"
            value={ valor }
            onChange={ func }
          />
        </label>
        <label htmlFor="describe">
          Descrição
          <input
            type="text"
            id="describe"
            name="describe"
            value={ describe }
            onChange={ func }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  valor: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  describe: PropTypes.string.isRequired,
};

export default Input;
