import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import './Wallet.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor" className="flex">
          <p>Valor da despesa : </p>
          <input type="text" name="valor" />
        </label>
        <label htmlFor="Descrição" className="flex">
          <p>Descrição da despesa : </p>
          <input type="text" name="Descrição" />
        </label>
        <label htmlFor="Moeda" className="flex">
          <p>Moeda : </p>
          <select id="Moeda">
            <option>Alimentação</option>
          </select>
        </label>
        <label htmlFor="Método de pagamento" className="flex">
          <p>Método de pagamento : </p>
          <select id="Método de pagamento">
            <option>Alimentação</option>
          </select>
        </label>
        <label htmlFor="tag" className="flex">
          <p>Despesa</p>
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

// Header.propTypes = {
//   lerEmail: PropTypes.string,
// }.isRequired;

// const mapStateToProps = (state) => ({
//   lerEmail: state.user.email,
// });

// const mapDispachToProps = (dispatch) => ({
//   updateEmail: (value, tipo) => dispatch(
//     // actionUpdate(value, tipo),
//   ),
// });

export default Form;
