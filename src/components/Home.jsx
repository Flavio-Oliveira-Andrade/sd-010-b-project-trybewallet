import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalGastos: 0,
    };
  }

  render() {
    const { email, currencies } = this.props;
    const { totalGastos } = this.state;

    return (
      <header>
        <h3 data-testid="email-field">
          {email}
        </h3>
        <h3 data-testid="total-field">
          Dispesa Total:
          {totalGastos}
        </h3>
        <h3
          data-testid="header-currency-field"
        >
          {currencies}
        </h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.payload.email,
  currencies: state.wallet.currencies,
});

// const mapDispatchToProps = () => {
// };
Home.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Home);
