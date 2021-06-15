import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { wallet } from '../actions';

class FormularioDeDespesa extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.getCurr = this.getCurr.bind(this);

    this.state = {
      valor: 0,
      moeda: 'BRL',
      moedas: [],
      describe: '',
      typeCoin: 'USD',
      typePagamento: 'Dinheiro',
      typeDespesa: 'Alimentação',
    };
  }

  componentDidMount() {
    this.getCurr();
  }

  async getCurr() {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await result.json();
    const moedas = Object.keys(data);
    moedas.splice(1, 1);
    this.setState({ moedas });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, buttoSaveState } = this.props;
    const { valor, moeda, moedas, describe } = this.state;
    const { handleChange } = this;

    return (
      <form onSubmit>
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
        <Input valor={ valor } describe={ describe } func={ handleChange } />
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="typeCoin" onClick={ this.handleChange }>
            {moedas.map((moedaName) => (
              <option key={ moedaName } value={ moedaName }>
                {moedaName}
              </option>
            ))}
          </select>
        </label>
        <Select handleChange={ this.handleChange } />
        <button
          type="button"
          onClick={ () => buttoSaveState(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  buttoSaveState: (state) => dispatch(wallet(state)) });

FormularioDeDespesa.propTypes = {
  email: PropTypes.string.isRequired,
  buttoSaveState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormularioDeDespesa);
