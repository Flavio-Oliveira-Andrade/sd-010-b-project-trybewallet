import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: props.total,
      currency: props.currency,
    };
  }

  render() {
    const { email } = this.props;
    const { total = 0, currency = 'BRL' } = this.state;
    return (
      <div>
        <h2 data-testid="email-field">{ email }</h2>
        <span data-testid="total-field">
          Despesa Total:
          { total }
        </span>
        <span data-testid="header-currency-field">{ currency }</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
