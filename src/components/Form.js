import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    const { currencyLabel } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            {Object.values(currencyLabel).map((item) => (
              <option key={ item.code } name={ item.name }>{ item.code }</option>
            ))}

          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select type="text" id="metodo" name="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="despesas">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" name="descricao" />
          </label>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencyLabel: state.wallet.currencies,
});

const MapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrency()),
});

Form.propTypes = ({
  currencyLabel: PropTypes.shape,
  currencies: PropTypes.string,
}).isRequired;

// export default Form;
export default connect(mapStateToProps, MapDispatchToProps)(Form);
