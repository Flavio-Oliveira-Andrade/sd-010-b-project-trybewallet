import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputWallet from '../components/InputWallet';
import Select from '../components/SelectWallet';
import TableWallet from '../components/TableWallet';
import fetchCurrencies from '../actions/fetchCurrAction';
import updateWallet from '../actions/updateWalletAction';
import currNames from '../helpers/currencysName';

import travoltaWallet from '../images/travoltaWallet.gif';

const defautState = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  buttonAddName: 'Adicionar despesa',
};

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...defautState,
    };

    this.handle = this.handle.bind(this);
    this.rstStat = this.rstStat.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    const { fetchCurr } = this.props;
    fetchCurr();
  }

  handle({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  rstStat(newState = defautState, buttonAddName = 'Adicionar despesa') {
    this.setState({ ...newState, buttonAddName });
  }

  edit({ target }) {
    const expEdit = (target.parentNode.parentNode.children);

    // console.log(expEdit[4].innerHTML);
    // console.log(currNames);
    // console.log(currNames.find(({ name }) => name === expEdit[4].innerHTML));
    const newState = {
      value: expEdit[3].innerHTML,
      description: expEdit[0].innerHTML,
      currency: currNames.find(({ name }) => name === expEdit[4].innerHTML).code,
      method: expEdit[2].innerHTML,
      tag: expEdit[1].innerHTML,
    };
    this.rstStat(newState, 'Editar despesa');
  }

  render() {
    const { value, description, currency, method, tag, buttonAddName } = this.state;
    const { userEmail, walletCurrencies, upExps, total, expenses } = this.props;
    const opPayments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const opTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const iptValues = { value, description, currency, method, tag };

    return (
      <main>
        <header className="headerWallet">
          <img src={ travoltaWallet } alt="travoltaWallet" className="travoltaWallet" />
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">{` - R$${total} -`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <InputWallet text="Valor" name="value" handle={ this.handle } value={ value } />
          <InputWallet
            text="Descrição"
            name="description"
            handle={ this.handle }
            value={ description }
          />
          <Select
            tx="Moeda"
            ops={ walletCurrencies }
            name="currency"
            handle={ this.handle }
            slc={ currency }
          />
          <Select
            tx="Método de pagamento"
            ops={ opPayments }
            name="method"
            handle={ this.handle }
            slc={ method }
          />
          <Select tx="Tag" ops={ opTags } name="tag" handle={ this.handle } slc={ tag } />
          <button type="button" onClick={ () => { upExps(iptValues); this.rstStat(); } }>
            { buttonAddName }
          </button>
        </form>
        <TableWallet expenses={ expenses } edit={ this.edit } />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletCurrencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(fetchCurrencies()),
  upExps: (dataWallet) => dispatch(updateWallet(dataWallet)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurr: PropTypes.func.isRequired,
  upExps: PropTypes.func.isRequired,
  total: PropTypes.number,
};

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
