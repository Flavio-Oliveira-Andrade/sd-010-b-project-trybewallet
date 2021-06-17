import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../actions';
import Form from '../Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.formControl = this.formControl.bind(this);
    this.currencyRequisition = this.currencyRequisition.bind(this);
    this.exchangeRequisition = this.exchangeRequisition.bind(this);
    this.sumOfExpenses = this.sumOfExpenses.bind(this);
    this.idLogic = this.idLogic.bind(this);
    this.addingExpenses = this.addingExpenses.bind(this);
    this.header = this.header.bind(this);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
      coinRequisition: [],
      totalExpenses: 0,
    };
  }

  componentDidMount() {
    this.currencyRequisition();
  }

  formControl({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async currencyRequisition() {
    const partialResult = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((apiResponse) => apiResponse.json())
      .then((response) => Object.keys(response))
      // .map((item) => delete (item === 'USDT' || item === 'DOGE'))
      .catch((error) => error);
    const result = partialResult.filter((item) => item !== 'USDT');
    this.setState({ coinRequisition: result });
  }

  async exchangeRequisition() {
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((apiResponse) => apiResponse.json());
  }

  sumOfExpenses() {
    const { expensesId } = this.props;
    // [].reduce(() => {}, 0);
    const result = expensesId.reduce((
      acc,
      cur,
    ) => acc + (cur.value * cur.exchangeRates[cur.currency].ask), 0);
    this.setState({ totalExpenses: result });
  }

  idLogic() {
    const { expensesId } = this.props;
    if (expensesId.length === 0) {
      return 0;
    }
    return (expensesId[expensesId.length - 1].id + 1);
  }

  async addingExpenses() {
    const { addingAnExpense } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const exchangeRates = await this.exchangeRequisition();
    const resposta = ({
      id: this.idLogic(),
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
    addingAnExpense(resposta);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Lazer',
    });
    this.sumOfExpenses();
  }

  header() {
    const { usuario } = this.props;
    const { totalExpenses } = this.state;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{`Usuário: ${usuario}`}</h4>
        <h4 data-testid="total-field">{`Despesa total: ${totalExpenses}`}</h4>
        <h4 data-testid="header-currency-field">Câmbio: BRL</h4>
      </header>
    );
  }

  render() {
    const {
      value,
      description,
      currency,
      coinRequisition,
      method,
      tag,
    } = this.state;
    return (
      <>
        { this.header() }
        <Form
          value={ value }
          description={ description }
          currency={ currency }
          coinRequisition={ coinRequisition }
          method={ method }
          tag={ tag }
          formControl={ this.formControl }
          addingExpenses={ this.addingExpenses }
        />
        {/* <form>
          { this.formValue() }
          { this.formDescription() }
          { this.formCurrency() }
          { this.formMethod() }
          { this.formTag() }
          { this.addExpenseButton() }
        </form> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.user.email,
  expensesId: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addingAnExpense: (state) => dispatch(addExpenses(state)),
  // addingAnExpense: (addingExpenses) => dispatch({ type: 'ADD_EXPENSES', addingExpenses }),
});

Wallet.propTypes = {
  usuario: PropTypes.string,
  expensesId: PropTypes.arrayOf(PropTypes.object),
  addingAnExpense: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  usuario: '',
  expensesId: [],
  // addingAnExpense: console.log('Function not received'),
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
