import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WalletComponent from '../components/WalletComponent';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <h4 data-testid="email-field">
            { email }
          </h4>
          <Link to="/">Voltar</Link>
          <WalletComponent />
        </header>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
