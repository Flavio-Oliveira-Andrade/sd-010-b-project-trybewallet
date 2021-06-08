import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrencies, toAddExpense, isUpdate, isChangeEdit } from '../actions';
import ElementsForm from '../services/createForms/generator';
import { formsExpense } from '../services/createForms/formChildrens';
import Button from './Button';
import '../css/Form.css';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  id: 0,
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handle = this.handle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.editChange = this.editChange.bind(this);
  }

  componentDidMount() {
    const { updatedWallet } = this.props;
    updatedWallet();
  }

  componentDidUpdate(prev) {
    const { edit } = this.props;
    if (prev.edit !== edit && edit) this.editChange();
  }

  editChange() {
    const { state } = this.props;
    this.setState(state);
  }

  handle({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  handleExpense() {
    const { addExpense, updatedWallet, currency2: exchangeRates } = this.props;
    updatedWallet();
    this.setState((prev) => ({ ...INITIAL_STATE, id: prev.id + 1 }));
    addExpense({ ...this.state, exchangeRates });
  }

  handleEdit() {
    const { id } = this.state;
    const { updateExpense, changeEdit } = this.props;
    updateExpense(this.state);
    changeEdit(false);
    this.setState({ ...INITIAL_STATE, id });
  }

  render() {
    const { currency, edit } = this.props;
    const forms = formsExpense(this.state, this.handle, currency);
    return (
      <form>
        <ElementsForm forms={ forms } />
        {edit && <Button name="Editar despesa" onClick={ this.handleEdit } /> }
        {!edit && <Button name="Adicionar despesa" onClick={ this.handleExpense } />}
      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
  currency2: state.wallet.currencies2,
  edit: state.wallet.edit,
  state: state.wallet.expense,
});

const mapDispatchToProps = (dispatch) => ({
  updatedWallet: () => dispatch(updateCurrencies()),
  addExpense: (expense) => dispatch(toAddExpense(expense)),
  updateExpense: (expense) => dispatch(isUpdate(expense)),
  changeEdit: (bool) => dispatch(isChangeEdit(bool)),
});

Form.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.string),
  currency2: PropTypes.oneOfType([PropTypes.object]),
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  edit: PropTypes.bool,
  updatedWallet: PropTypes.func,
  changeEdit: PropTypes.func,
  updateExpense: PropTypes.func,
  addExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
