import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      initialValue: 0,
    };
  }

  render() {
    const { user } = this.props;
    const { initialValue } = this.state;
    return (
      <div>
        <h1>Wallet</h1>
        <p data-testid="email-field">{ user }</p>

        <span data-testid="total-field">
          {`Total: ${initialValue}`}
        </span>

        <p data-testid="header-currency-field">
          BRL
        </p>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
