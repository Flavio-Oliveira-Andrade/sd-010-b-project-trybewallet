import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Lógica feita com a ajuda do @Jonathan Souza - Turma 10 - Tribo B.

class Header extends React.Component {
  render() {
    const { searchEmail } = this.props;
    return (
      <section>
        <p data-testid="email-field">{ searchEmail }</p>
        <p>Despesa total:</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  searchEmail: state.user.email,
});

Header.propTypes = {
  searchEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
