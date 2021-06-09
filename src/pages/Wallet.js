import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputWallet from '../components/InputWallet';
import SelectWallet from '../components/SelectWallet';
import fetchCurrencies from '../actions/fetchCurrAction';
import updateWallet from '../actions/updateWalletAction';

import travoltaWallet from '../images/travoltaWallet.gif';

// const defautState = {
//   value: 0,
//   description: '',
//   currency: 'USD',
//   method: 'Dinheiro',
//   tag: 'Alimentação',
// };

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    // this.state = Object.assign({}, ...defautState);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handle = this.handle.bind(this);
    // this.fillTotal = this.fillTotal.bind(this);
  }

  componentDidMount() {
    const { fetchCurr } = this.props;
    fetchCurr();
  }

  // fillTotal() {
  //   const { expenses } = this.props;
  //   const total = expenses.length > 0 ? expenses.length : 0;
  //   this.setState({ total });
  // }

  handle({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { userEmail, walletCurrencies, updateExpenses, total } = this.props;
    const opPayments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const opTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <main>
        <header className="headerWallet">
          <img src={ travoltaWallet } alt="travoltaWallet" className="travoltaWallet" />
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">{` - ${total} -`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <InputWallet text="Valor" name="value" handle={ this.handle } />
          <InputWallet text="Descrição" name="description" handle={ this.handle } />

          <SelectWallet
            text="Moeda"
            options={ walletCurrencies }
            name="currency"
            handle={ this.handle }
          />

          <SelectWallet
            text="Método de pagamento"
            options={ opPayments }
            name="method"
            handle={ this.handle }
          />

          <SelectWallet text="Tag" options={ opTags } name="tag" handle={ this.handle } />
          <button
            type="button"
            onClick={ () => updateExpenses(this.state) }
          >
            Adicionar despesa
          </button>
        </form>

      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletCurrencies: state.wallet.currencies,
  // expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrencies()),
  updateExpenses: (dataWallet) => dispatch(updateWallet(dataWallet)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurr: PropTypes.func.isRequired,
  updateExpenses: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
