import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../images/logo-trybe.png';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cambioAtual: 0,

    };
  }

  render() {
    const { email } = this.props;
    const { total, cambioAtual } = this.state;
    return (
      <main>
        <header>
          <img
            className="logo-trybe"
            src={ logo }
            alt="Logo Trybe"
          />
          <h3 data-testid="email-field">
            {' '}
            Email:
            { email }
          </h3>
          <h3 data-testid="total-field">
            Total Despesas:
            {total}
          </h3>
          <h3 data-testid="header-currency-field">
            {' '}
            Câmbio Atual BRL:
            {cambioAtual}
          </h3>
        </header>
      </main>);
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
