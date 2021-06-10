import React from 'react';
import PropTypes from 'prop-types';

export default class SelectDespesa extends React.Component {
  render() {
    const { handleChange, despesas } = this.props;
    return (
      <label htmlFor="despesas">
        Tag:
        <select
          id="despesas"
          name="despesas"
          value={ despesas }
          onChange={ (e) => handleChange(e) }
        >
          <option value="Alimentacao" selected>Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectDespesa.propTypes = {
  despesas: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
