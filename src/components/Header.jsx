import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.state = { currentExpense: 0 };
  }

  render() {
    const { userEmail } = this.props;
    const { currentExpense } = this.state;
    return (
      <header>
        <div>Wellcome to the TrybeWallet!</div>
        <p data-testid="email-field">
          Email:
          {userEmail}
        </p>
        <p data-testid="total-field">
          Despesa:
          { currentExpense }
        </p>
        <p data-testid="header-currency-field">BRL</p>

      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  userEmail: email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: propTypes.string,
}.isRequired;
