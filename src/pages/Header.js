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
    // this.atualizaTotal = this.atualizaTotal.bind(this);
  }

  componentDidMount() {
    // const { totalGlobal } = this.props;
    // console.log(totalGlobal);
    // const renderTotal = totalGlobal.reduce(
    //   (acc, despesa) => (acc.valor + despesa.valor), 0,
    // );
    // console.log(renderTotal);
    this.atualizaTotal();
  }

  atualizaTotal() {
    const { totalGlobal } = this.props;
    console.log(totalGlobal);
    const renderTotal = totalGlobal.reduce(
      (acc, despesa) => acc + despesa.valor, 0,
    );
    console.log(renderTotal);
    this.setState({ total: renderTotal });
  }

  render() {
    const { userEmail } = this.props;
    const { total, cambio } = this.state;
    // console.log(totalGlobal);
    // console.log(total);
    return (
      <header data-testid="email-field">
        <h1>Header</h1>
        <span>{userEmail}</span>
        <p data-testid="total-field">
          Valor Total:
          {' '}
          {total}
        </p>
        <p data-testid="header-currency-field">
          Câmbio:
          {' '}
          {cambio}
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalGlobal: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalGlobal: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
