import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moedas from '../components/form/moedas';
import Valor from '../components/form/valor';
import Payment from '../components/form/payment';
import Tag from '../components/form/tag';
import Descrição from '../components/form/descrição';
import Header from '../components/header';
import { addExpense, fetchExp } from '../actions/index';

function Wallet(props) {
  const [id, setId] = useState(0);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('hot-dog');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [currency, setCurrency] = useState('USD');
  const { despesa, setDespesa } = useState(0);
  const { email, fetchExpenses, currencies } = props;

  if (currencies.length === 0) {
    fetchExpenses();
  }
  const mountExpense = async () => {
    fetchExpenses();
    const newExpense = { id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    const { addExpenseToState } = props;
    addExpenseToState(newExpense);
  };

  return (
    <div>
      <Header despesa={ despesa } setDespesa={ setDespesa } email={ email } />
      <form>
        <Valor value={ value } setValue={ setValue } />
        <Descrição description={ description } setDescription={ setDescription } />
        <Moedas currency={ currency } setCurrency={ setCurrency } />
        <Payment method={ method } setMethod={ setMethod } />
        <Tag tag={ tag } setTag={ setTag } />
      </form>
      <button
        type="submit"
        onClick={ () => {
          setId(id + 1);
          mountExpense();
        } }
      >
        Adicionar despesa
      </button>
    </div>
  );
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExpenses: () => dispatch(fetchExp()),
  addExpenseToState: (expenses) => dispatch(addExpense(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
