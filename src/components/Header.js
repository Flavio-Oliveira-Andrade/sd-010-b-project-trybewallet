import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

class Header extends React.Component {
  constructor() {
    super();

    this.amoutValues = this.amoutValues.bind(this);
  }

  amoutValues() {
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
      <div>
        <header>
          <p
            data-testid="email-field"
          >
            E-mail:
            {' '}
            { userLogin }
          </p>
          <p
            data-testid="total-field"
            name="despesa"
          >
            Despesa Total:
            {' '}
            {' R$ '}
            { this.amoutValues() }
          </p>
          <p
            data-testid="header-currency-field"
            name="cambio"
          >
            BRL
          </p>
        </header>
      </div>
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
