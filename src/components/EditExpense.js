import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import inputer from '../functions/inputFunction';
import currencyFunc from '../functions/currencySelect';
import methodSelect from '../functions/methodSelect';
import editButton from '../functions/editButton';
import { updateExpense, addExpense,
  updateTotalExpense, fetchCurrencies, deleteExpense } from '../actions';

import '../styles/editExpense.css';
import addButton from '../functions/addButton';

class EditExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: props.currencies,
    };
  }

  render() {
    const { currencies, expenses, edit, idToEdit } = this.props;
    const infos = this.state;
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const upd = ({ target }) => this.setState({ [target.id]: target.value });

    const enviar = () => {
      const { sendExpense, fetcher } = this.props;
      fetcher();
      this.setState({ ...infos, id: expenses.length, exchangeRates: currencies }, () => {
        sendExpense(this.state);
      });
    };

    const editar = () => {
      const { editExpense, fetcher } = this.props;
      fetcher();
      this.setState({ ...infos, id: expenses.length, exchangeRates: currencies }, () => {
        // sendExpense(this.state);
        editExpense([...expenses.filter((e) => e.id !== idToEdit), infos]);
      });
    };

    const { value, currency, method, tag, description } = this.state;
    return (
      <div>
        <form className={ edit ? 'edit-form' : 'expense-form' }>
          {inputer('number', 'value', value, upd)}
          {currencyFunc(currencies, currency, 'currency', upd)}
          {methodSelect(payments, 'method', method, upd)}
          {methodSelect(tags, 'tag', tag, upd)}
          {inputer('text', 'description', description, upd)}
          {edit
            ? editButton(() => editar())
            : addButton(() => enviar()) }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expense: state.wallet.edit,
  expenses: state.wallet.expenses,
  edit: state.wallet.edit,
  idToEdit: state.wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (payload) => dispatch(updateExpense(payload)),
  sendExpense: (localState) => dispatch(addExpense(localState)),
  delete: (payload) => dispatch(deleteExpense(payload)),
  updateTotalSum: (sum) => dispatch(updateTotalExpense(sum)),
  fetcher: () => dispatch(fetchCurrencies()),
});

EditExpense.propTypes = {
  currencies: PropTypes.object,
  edit: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
