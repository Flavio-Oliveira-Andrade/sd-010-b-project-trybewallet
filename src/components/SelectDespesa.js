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
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

SelectDespesa.propTypes = {
  despesas: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
