import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import '../styles/wallet.css';
import AddExpense from '../components/AddExpense';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetcher } = this.props;
    fetcher();
  }

  render() {
    const { email, totalSum } = this.props;
    return (
      <div>
        <header className="header">
          <img src="https://static.wixstatic.com/media/4c2984_e8ba75672946447b9c0718f98d806496~mv2.png/v1/fill/w_562,h_142,al_c,lg_1,q_90/4c2984_e8ba75672946447b9c0718f98d806496~mv2.webp" alt="logo-trybe" className="logo" />
          <div className="infos-field">
            <h5 data-testid="email-field">
              { `Email: ${email}` }
            </h5>
            <div className="currency">
              <h5 data-testid="total-field">
                { `Despesa total: ${totalSum}` }
              </h5>
              <h5 data-testid="header-currency-field">BRL</h5>
            </div>
          </div>
        </header>
        <AddExpense />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalSum: state.wallet.totalSum,
});

const mapDispatchToProps = (dispatch) => ({
  fetcher: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
