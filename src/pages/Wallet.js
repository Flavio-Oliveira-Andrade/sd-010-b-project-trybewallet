import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <label htmlFor="input-despesa-total">
          Despesas totais:
          <input name="input-despesa-total" type="number" value="0" data-testid="total-field" />
        </label>
        <label htmlFor="actual-currency">
          Moeda atual:
          <select name="actual-currency" data-testid="header-currency-field">
            <option value="BRL">BRL</option>
          </select>
        </label>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
