import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.header = this.header.bind(this);
  }

  header() {
    const { usuario } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{ `Usuário: ${usuario}` }</h4>
        <h4 data-testid="total-field">Despesa total: 0</h4>
        <h4 data-testid="header-currency-field">Câmbio: BRL</h4>
      </header>
    );
  }

  render() {
    return (
      <>
        { this.header() }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.user.email,
});

Wallet.propTypes = {
  usuario: PropTypes.string,
};

Wallet.defaultProps = {
  usuario: '',
};

export default connect(mapStateToProps, null)(Wallet);
