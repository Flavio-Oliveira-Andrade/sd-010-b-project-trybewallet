import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          {' '}
          <input type="text" id="valor" onChange={ changeHandler } />
        </label>
        <label htmlFor="descricao">
          Descrição:
          {' '}
          <input type="text" id="descricao" onChange={ changeHandler } />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default Inputs;
