import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      dispenses: 0,
      currencyField: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { dispenses, currencyField } = this.state;
    return (
      <article>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ dispenses }</p>
          <p data-testid="header-currency-field">{ currencyField }</p>
        </header>
        <main>
          <p>a</p>
        </main>
      </article>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
