import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moedaCifrao } from '../actions';

class AddExpense extends Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  structure() {
    return (
      <>
        <label htmlFor="metodo">
          Método de pagamento
          <select
            type="text"
            id="metodo"
            name="method"
          >
            <option selected>-</option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="despesas">
          Tag
          <select id="despesas" name="tag">
            <option selected>-</option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
            name="description"

          />
        </label>
      </>
    );
  }

  render() {
    const { moedas } = this.props;
    console.log(typeof (moedas));

    return (

      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
            name="value"
          />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="moeda"
          >

            { Object.values(moedas).map((item) => (
              <option
                key={ item.code }
                value={ item.code }
              >
                { item.code }
              </option>
            ))}

          </select>
        </label>

        { this.structure() }

        <button type="submit">Adicionar despesa</button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(moedaCifrao()),
});

AddExpense.propTypes = ({
  currencies: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
