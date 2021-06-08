import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputWallet from '../components/InputWallet';
import SelectWallet from '../components/SelectWallet';

import travoltaWallet from '../images/travoltaWallet.gif';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    const opPayments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const opTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <main>
        <header className="headerWallet">
          <img src={ travoltaWallet } alt="travoltaWallet" className="travoltaWallet" />
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">-0-</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <section>
          <form>
            <InputWallet labelText="Valor: " />
            <InputWallet labelText="Descrição: " />
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
