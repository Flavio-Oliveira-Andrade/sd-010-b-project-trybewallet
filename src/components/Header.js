import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

import './Header.css';
import wallet from '../pages/wallet.jpg';

class Header extends React.Component {
  constructor() {
    super();

    this.somaValores = this.somaValores.bind(this);
  }

  somaValores() {
    let valorTotal = 0;
    const { expenses } = this.props;

    // Lógica feita com ajuda do Henrique Clementino
    expenses.forEach(({ value, currency, exchangeRates }) => {
      valorTotal += exchangeRates[currency].ask * value;
    });

    return valorTotal;
  }

  render() {
    const { userLogin } = this.props;

    return (
      <>
        <div className="figura">
          <img src={ wallet } alt="figura wallet" width="50px" />
        </div>
        <div className="div-wallet">
          <header className="header-wallet">
            <p
              data-testid="email-field"
              className="email"
            >
              E-mail:
              {' '}
              { userLogin }
            </p>
            <p
              className="despesa"
              data-testid="total-field"
              name="despesa"
            >
              Despesa Total:
              {' '}
              {' R$ '}
              { this.somaValores() }
            </p>
            <p
              className="cambio"
              data-testid="header-currency-field"
              name="cambio"
            >
              BRL
            </p>
          </header>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
});

Header.propTypes = {
  userLogin: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
