import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor () {
    super();

    this.state = {
      total: 0,
    };
  };

  render() {
    const { total } = this.state;
    const { email } = this.props;

    return (
      <>
        <header>
          <p data-testid="email-field">{`Email: ${ email } `}</p>
        </header>
        <main>
          <form>
            <label data-testid="total-field">
              Total:
              <input type="text" value={ total }/>
            </label>
            <br />
            <label data-testid="header-currency-field">
              Moeda:
              <select> Selecione
                <option value="BRL">BRL</option>
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
              </select>
            </label>
          </form>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
