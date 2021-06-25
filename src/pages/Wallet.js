import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrencies as getCurrencies } from '../actions';
import { ExpensesTable, Header, NewExpenseForm, EditExpenseForm } from '../components';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { isEditing } = this.props;
    return (
      <main className="wallet-main">
        <Header />
        { isEditing ? <EditExpenseForm /> : <NewExpenseForm />}
        {/* MUDANÇA AO CLICAR NO BOTÃO EDITAR */}
        <ExpensesTable />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isEditing: state.wallet.isEditing,
});
// RECEBENDO DO ESTADO

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
});
// ENVIANDO PRA O ESTADO

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  isEditing: PropTypes.bool,
  fetchCurrencies: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  isEditing: false,
};
