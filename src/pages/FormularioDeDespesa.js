import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

class FormularioDeDespesa extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      valor: 0,
      moeda: 'BRL',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.props;
    const { valor, moeda } = this.state;

    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
        </header>
        <div>
          <p>despesas</p>
          <p data-testid="total-field">{ valor }</p>
        </div>
        <div>
          <p data-testid="header-currency-field">{ moeda }</p>
        </div>
        <div>
          <form>
            <Input id="valor" type="number" name="number" describe="Valor" />
            <Input id="describe" type="text" name="describe" describe="Descrição" />
            <Select id="moeda" name="moeda" describe="Moeda" />
            <label htmlFor="pagamento">
              <p>Método de pagamento</p>
              <select id="pagamento">
                <option value="Dinheiro">Dinheiro</option>
                <option name="credito" value="credito">Cartão de crédito</option>
                <option name="debito" value="debito">Cartão de débito</option>
              </select>
            </label>
            <label htmlFor="tipo">
              <p>Tag</p>
              <select id="tipo">
                <option name="alimentacao" value="alimentacao"> Alimentação </option>
                <option name="lazer" value="lazer">Lazer</option>
                <option name="trabalho" value="trabalho">Trabalho</option>
                <option name="transporte" value="transporte">Transporte</option>
                <option name="saude" value="saude">Saúde</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

FormularioDeDespesa.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(FormularioDeDespesa);
