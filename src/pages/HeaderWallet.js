import React from 'react';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.transformNumber = this.transformNumber.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (prevProps.value !== value) {
      this.transformNumber();
    }
  }

  transformNumber() {
    const { value } = this.props;
    const transform = value === 0 ? parseFloat(Math.round(value * 100) / 100).toFixed(2)
      : Number(value);
    this.setState({ number: transform });
    // return transform;
  }

  render() {
    const { email } = this.props;
    const { number } = this.state;
    return (
      <div>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">
          {`Total das despesas: ${number}`}
        </span>
        <span data-testid="header-currency-field">Moeda: BRL</span>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  value: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default HeaderWallet;
