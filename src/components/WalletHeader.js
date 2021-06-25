import React from 'react';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">
          {` ${email}`}
        </h4>
        <h4 data-testid="total-field">
          0
        </h4>
        <h4 data-testid="header-currency-field">
          BRL
        </h4>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(WalletHeader);
