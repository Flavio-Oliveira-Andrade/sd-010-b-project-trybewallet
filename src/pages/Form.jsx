import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    // const { login, total } = this.props;
    // const { outgoing } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" name="valor" onChange={ (e) => console.log(e.target.value) } />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input id="descricao" type="text" name="valor" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              <option>{}</option>
            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento:
            <select id="metodoDePagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="Tag">
            Tag
            <select id="Tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
            <button type="button">Adicionar Despesa</button>
          </label>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   wallet: (email, password) => dispatch(loginAction(email, password)),
// });

// Login.propTypes = {
//   login: PropTypes.object,
// }.isRequired;

export default Form;
