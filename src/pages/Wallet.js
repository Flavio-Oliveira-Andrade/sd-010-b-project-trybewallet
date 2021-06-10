import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <header data-testid="email-field">
          {email}
          <span>Despesas:</span>
          <span data-testid="total-field">0</span>
        </header>
        <section>
          <span>
            Cambio:
            <select data-testid="header-currency-field">
              <option value="BRL">BRL</option>
              <option value="USA">USA</option>
            </select>
          </span>
        </section>
        <Form />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
};

Wallet.defaultProps = {
  email: '',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
