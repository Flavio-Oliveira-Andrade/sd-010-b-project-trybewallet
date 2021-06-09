import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../components/Input';
import { fetchCurrency as fetchCurrencyThunk } from '../actions';
import { SelectPagamento } from '../components/SelectPagamento';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currency: [],
  //   };
  //   this.attState = this.attState.bind(this);
  // }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  // attState(arg) {
  //   this.setState({
  //     currency: arg,
  //   });
  // }

  render() {
    const { emailUser, currencyM } = this.props;
    console.log(currencyM);
    return (
      <>
        <header>
          <h1 data-testid="email-field">
            {emailUser}
          </h1>
          <p data-testid="total-field">
            0
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        <form>
          <Input type="text" name="valor" />
          <Input type="text" name="descrição" />
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda">
              {Object.keys(currencyM)
                .map((element, index) => (
                  <option
                    key={ index }
                  >
                    {element}
                  </option>
                ))}
            </select>
          </label>
          <SelectPagamento />
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  currencyM: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
