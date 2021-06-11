import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TagSelect extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          onChange={ (e) => handleChange(e) }
        >
          <option key="Alimentação" value="Alimentação">Alimentação</option>
          <option key="Lazer" value="Lazer">Lazer</option>
          <option key="Trabalho" value="Trabalho">Trabalho</option>
          <option key="Transporte" value="Transporte">Transporte</option>
          <option key="Saúde" value="Saúde">Saúde</option>
          <option key="Outros" value="Outros">Outros</option>
        </select>
      </label>
    );
  }
}

TagSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
