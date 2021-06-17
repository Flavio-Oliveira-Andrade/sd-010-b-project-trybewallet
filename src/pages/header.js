import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, gastos } = this.props; // Nessa props o email tá sendo uma string. Vou ter que usar pro elemento que exibe o email de quem fez o login. Essa props TÁ VINDO DO ESTADO GLOBAL, lá no user do reducers, em initialstate
    let soma = 0;
    gastos.forEach((z) => {
      Object.values(z.exchangeRates).forEach((cotacao) => {
        if (cotacao.codein !== 'BRLT' && z.currency === cotacao.code) {
          soma += z.value * cotacao.ask;
        }
      });
    });
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{soma === 0 ? 0 : (soma).toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  gastos: state.wallet.expenses,
});
Header.propTypes = {
  email: PropTypes.string.isRequired,
  gastos: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};

export default connect(mapStateToProps, null)(Header);
