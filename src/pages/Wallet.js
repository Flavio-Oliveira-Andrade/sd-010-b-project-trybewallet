import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputFormWallet from '../components/InputFormWallet';
import SelectWallet from '../components/SelectWallet';

import cambio from '../img/cambio.jpg';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    const opPayments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const opTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <main>
        <header>
          <img src={ cambio } alt="cambio" />
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">-0-</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <section>
          <form>
            <InputFormWallet labelText="Valor: " />
            <InputFormWallet labelText="Descrição: " />
            <SelectWallet labelText="Moeda: " />
            <SelectWallet labelText="Método de pagamento: " options={ opPayments } />
            <SelectWallet labelText="Tag " options={ opTags } />
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
