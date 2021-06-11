import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      <div>
        <header>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    email: state.user.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
