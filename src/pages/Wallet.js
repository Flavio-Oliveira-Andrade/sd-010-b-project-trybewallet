import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputWallet from '../components/InputWallet';
import Select from '../components/SelectWallet';
import TableWallet from '../components/TableWallet';
import fetchCurrencies from '../actions/fetchCurrAction';
import updateWallet from '../actions/updateWalletAction';
import editWallet from '../actions/editWalletAction';

// import currNames from '../helpers/currencysName';

import travoltaWallet from '../images/travoltaWallet.gif';

const defautState = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  buttonAdd: true,
  id: false,
};

const opPayments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const opTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...defautState,
    };

    this.handle = this.handle.bind(this);
    this.rsStat = this.rsStat.bind(this);
    this.edit = this.edit.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);
  }

  componentDidMount() {
    const { fetchCurr } = this.props;
    fetchCurr();
  }

  handle({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  rsStat(newState = defautState, visible = true) {
    this.setState({ ...newState, buttonAdd: visible });
  }

  edit({ value, description, currency, method, tag, id }) {
    const newState = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    // console.log(newState);
    this.rsStat(newState, false);
  }

  confirmEdit() {
    const { value, description, currency, method, tag, id } = this.state;
    const { editExp } = this.props;
    const inputValues = { value, description, currency, method, tag, id };
    editExp(inputValues);
    this.rsStat();
  }

  render() {
    const { value, description, currency, method, tag, buttonAdd } = this.state;
    const { userEmail, walletCurrencies, addExp, total, expenses } = this.props;
    const iptVls = { value, description, currency, method, tag };
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
          {
            buttonAdd && (
              <button type="button" onClick={ () => { addExp(iptVls); this.rsStat(); } }>
                Adicionar despesa
              </button>
            )
          }
          {!buttonAdd
            && <button type="button" onClick={ this.confirmEdit }>Editar despesa</button>}
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
  addExp: (dataWallet) => dispatch(updateWallet(dataWallet)),
  editExp: (dataWallet) => dispatch(editWallet(dataWallet)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurr: PropTypes.func.isRequired,
  addExp: PropTypes.func.isRequired,
  editExp: PropTypes.func.isRequired,
  total: PropTypes.number,
};

Wallet.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
