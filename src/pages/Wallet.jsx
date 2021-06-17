import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Description from '../components/Description';
import Value from '../components/Value';
import PaymentMethod from '../components/PaymentMethod';
import Tag from '../components/Tag';
import SelectCurr from '../components/SelectCurr';
import { addExchangeRate } from '../actions';
import './Wallet.css';
import WalletHeader from '../components/WallletHeader';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    let id = 0;
    const { newExpense } = this.props;
    const {
      count,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;
    id = count;
    newExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
    this.setState({
      count: count + 1,
    });
  }

  render() {
    return (
      <div>
        <WalletHeader />
        <form className="wallet--form">
          <Value handleChange={ this.handleChange } />
          <Description handleChange={ this.handleChange } />
          <SelectCurr handleChange={ this.handleChange } />
          <Tag handleChange={ this.handleChange } />
          <PaymentMethod handleChange={ this.handleChange } />
          <button
            type="button"
            className="button--expense"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,

});

const mapDispatchToProps = (dispatch) => ({

  newExpense: (email) => dispatch(addExchangeRate(email)),
});

Wallet.propTypes = {
  newExpense: PropTypes.func,
};

Wallet.defaultProps = {
  newExpense: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
