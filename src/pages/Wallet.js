import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Form from '../components/Form';

class Wallet extends React.Component {
  // totalExpenses(params = 0 ) {
  //   return params;
  // }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h3 data-testid="email-field">
            Email:
            {' '}
            { email }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total:
            {' '}
            { email }
          </h3>
          {/* <h3 data-testid="header-currency-field">{ cambio }</h3> */}
        </header>
        {/* <Form /> */}
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.func.isRequired,
  // totalExpenses: PropTypes.func.isRequired,
  // cambio: PropTypes.func.isRequired,
};

// const mapDispathToProps = (dispatch) => ({
//   totalExpenses: (total) => dispatch(actionTotal(total)),
//   cambio: (cambio) => dispatch(currencies(cambio)),
// });

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

export default connect(mapStateToProps)(Wallet);
