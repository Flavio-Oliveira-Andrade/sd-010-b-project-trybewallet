import React from 'react';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

function Wallet() {
  const email = useSelector((state) => state.user.email);
  const dispenses = useSelector((state) => state.wallet.wallet.expenses);
  const currency = useSelector((state) => state.wallet.wallet.currencies);

  return (
    <div>
      <header>
        <p data-testid="email-field">{`Email: ${email}`}</p>
        <p data-testid="total-field">{`Dispensa total: ${dispenses}`}</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
    </div>
  );
}

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     email: state.user.user.email,
//   };
// }
//
// export default connect(mapStateToProps)(Wallet);

// Wallet.propTypes = {
//   email: PropTypes.string.isRequired,
// };

export default Wallet;
