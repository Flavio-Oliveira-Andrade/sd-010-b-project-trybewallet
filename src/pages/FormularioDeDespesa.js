import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { newExpense } from '../actions';
import MoedasOptions from './MoedasOptions';
import Header from './Header';

class FormularioDeDespesa extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.maisUm = this.maisUm.bind(this);

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
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
    this.setState(() => ({
      value: 0,
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description } = this.state;
    const { handleChange } = this;

    return (
      <form onSubmit>
        <Header />
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

const mapDispatchToProps = (dispatch) => ({
  buttoSaveState: (state) => dispatch(newExpense(state)) });

FormularioDeDespesa.propTypes = {
  buttoSaveState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormularioDeDespesa);
