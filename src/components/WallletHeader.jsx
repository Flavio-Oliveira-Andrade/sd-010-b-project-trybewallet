import React from 'react';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExpense: 0,
    };
  }

  sumValues() {
    const { values } = this.props;
    let totalExpense = 0;
    values.forEach(({ value }) => {
      const toNumber = parseFloat(value);
      totalExpense += toNumber;
      console.log(totalExpense);
    });
    return totalExpense;
  }

  render() {
    const { email } = this.props;
    const { currentExpense } = this.state;
    return (
      <header data-testid="email-field">
        {email}
        <div className="info--currencie">
          <span data-testid="header-currency-field">R$BRL</span>
          <span data-testid="total-field">
            Total de gastos:
            { this.sumValues() }
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  values: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletHeader);
