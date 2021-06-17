import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { wallet } from '../actions';
import MoedasOptions from './MoedasOptions';

class FormularioDeDespesa extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.maisUm = this.maisUm.bind(this);
    this.state = {
      id: 0,
      value: 0,
      currency: 'BRL',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  maisUm() {
    const { buttoSaveState } = this.props;
    this.setState((previ) => ({
      id: previ.id + 1,
    }));
    buttoSaveState(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.props;
    const { value, currency, description } = this.state;
    const { handleChange } = this;

    return (
      <form onSubmit>
        <header>
          <p data-testid="email-field">{ email }</p>
        </header>
        <div>
          <p>despesas</p>
          <p data-testid="total-field">{ value }</p>
        </div>
        <div>
          <p data-testid="header-currency-field">{ currency }</p>
        </div>
        <Input value={ value } describe={ description } func={ handleChange } />
        <MoedasOptions handleChange={ this.handleChange } />
        <Select handleChange={ this.handleChange } />
        <button
          type="button"
          onClick={ this.maisUm }
        >
          Adicionar Despesa
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
