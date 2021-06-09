import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      moeda: 'BRL',
    };
  }

  // valorTotal(){
  //   this.setState({
  //     valor: 1,
  //   })
  // }

  render() {
    const { email } = this.props;
    const { valor, moeda } = this.state;

    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
        </header>
        <div>
          <p>despesas</p>
          <p data-testid="total-field">{ valor }</p>
        </div>
        <div>
          <p data-testid="header-currency-field">{ moeda }</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
