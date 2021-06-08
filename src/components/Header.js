import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses, currencies } = this.props;
    return (
      <section>
        <p data-testid="email-field">{email}</p>
        <p
          data-testid="total-field"
        >
          {expenses ? expenses.reduce((acc, curr) => acc + curr, 0) : 0 }
        </p>
        <p data-testid="header-currency-field">{currencies}</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   excluir: (e) => dispatch(excluirAction(e))
// });

export default connect(mapStateToProps)(Header);
