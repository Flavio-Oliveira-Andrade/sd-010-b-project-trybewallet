import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { userEmail } = this.props;
    const { total, cambio } = this.state;
    return (
      <header data-testid="email-field">
        <h1>Header</h1>
        <span>{userEmail}</span>
        <p data-testid="total-field">
          {total}
        </p>
        <p data-testid="header-currency-field">
          {cambio}
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
