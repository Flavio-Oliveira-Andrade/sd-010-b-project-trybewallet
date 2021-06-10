import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './header';
import Formulario from './formWallet';

class Wallet extends React.Component {
  render() {
    const { email } = this.props; // pra poder usar email como props.
    return (
      <div>
        <Header email={ email } />
        <Formulario />
      </div>
    ); // Header é o cabeçalho que fiz, e aí trago pra cá o email de novo como props. Usei email como props no meu componente Header. Quero que o email apareça no cabeçalho, então preciso pegar ele no estado global.
  }
}
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
// o mapStateToProps é pra que a gente consiga pegar os valores que estão nos estados globais
const mapStateToProps = (state) => ({
  email: state.user.email,
}); // essa é a estrutura do mapStateToProps. O email vem do estado global  e aqui eu trouxe por Props. O user foi onde eu defini que o email tá no estado global. Por isso state.user.email
export default connect(mapStateToProps, null)(Wallet);
